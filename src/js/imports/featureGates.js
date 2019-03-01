import {LDClient} from "ldclient-js"
import readCookie from "../utils/cookies"

export default class FeatureGates {
  constructor(selector, flagContent) {
    this.gates = Array.from(document.querySelectorAll(selector))
    if (this.gates.length === 0) {
      return
    }

    this.flagContent = flagContent
    this.userEmail = decodeURIComponent(readCookie("forestry_email"))
  }

  apply() {
    return new Promise((resolve, reject) => {
      try {
        const client = LDClient.initialize("5beaef624274db30424f398f", {
          key: this.userEmail
        })
        client.on("ready", () => {
          for (let gate of this.gates) {
            let featureName = gate.dataset.featurename
            let featureState = gate.dataset.featurestate
            if (client.variation(featureName)) {
              if (this.clientHasVariation(client, featureName, featureState)) {
                this.activateContent(gate)
              } else {
                this.deactivateContent(gate)
              }
            }
          }
          resolve()
        })
      } catch (e) {
        resolve()
      }
    })
  }

  /**
   * Check if client has featureName set to value of featureState
   * boolean values may be specified as "on"/"off" instead of t/f
   *
   * @param {LDClient} client
   * @param {string} featureName
   * @param {string} featureState
   */
  clientHasVariation(client, featureName, featureState) {
    if (featureState === "on") {
      return (
        client.variation(featureName) === true ||
        client.variation(featureName) === "on"
      )
    }
    if (featureState === "off") {
      return (
        client.variation(featureName) === false ||
        client.variation(featureName) === "off"
      )
    }
    return client.variation(featureName) === featureState
  }

  activateContent(node) {
    node.innerHTML = this.flagContent[node.dataset.content]
  }

  deactivateContent(node) {
    node.remove()
  }
}
