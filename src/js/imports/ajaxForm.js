import axios from "axios"

export default class AjaxForm {
  constructor(element) {
    this.form = element
    this.form.addEventListener("submit", this.handleSubmit.bind(this))
  }

  handleSubmit(e) {
    e.preventDefault()

    // don't submit if currently submitting
    if (this.submitting) {
      return false
    }

    // set submitting
    this.submitting = true
    this.form.classList.add("form--submitting")

    // reset form
    this.form.classList.remove("form--submit-fail")
    this.form.classList.remove("form--submit-success")
    this.form.dataset.error = ""

    // send submission to formspree
    let formData = new FormData(this.form)
    let formAction = this.form.action
    axios({
      method: "post",
      url: formAction,
      data: formData,
      dataType: "json"
    })
      .then((response) => {
        // show success state
        this.form.classList.add("form--submit-success")
        this.form.classList.remove("form--submitting")
        this.submitting = false
      })
      .catch((err) => {
        // show error
        this.submitting = false
        this.form.dataset.error = "An error occurred. Please try again."
        this.form.classList.add("form--submit-fail")
        this.form.classList.remove("form--submitting")
      })
    return false
  }
}
