import LDClient from "ldclient-js"
import readCookie from "../utils/cookies"

export default class FeatureGates {
  constructor(selector, flagContent) {
    this.gates = Array.from(document.querySelectorAll(selector))
    if (this.gates.length === 0) {
      return
    }

    this.flagContent = flagContent

    this.userEmail = readCookie("forestry_email")
    this.userEmail = "dj@forestry.io"
    this.client = LDClient.initialize("5beaef624274db30424f398f", {
      key: this.userEmail
    })

    this.flags = new Map()

    this.client.on("ready", () => {
      for (let gate of this.gates) {
        let featureName = gate.dataset.featurename
        let featureState = gate.dataset.featurestate
        if (this.client.variation(featureName)) {
          if (featureState === "on") {
            this.activateContent(gate)
          } else {
            this.deactivateContent(gate)
          }
        }
      }
    })
  }

  activateContent(node) {
    node.innerHTML = this.flagContent[node.dataset.content]
  }

  deactivateContent(node) {
    node.remove()
  }
}
