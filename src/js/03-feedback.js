import throttle from 'lodash.throttle'
const feedbackForm = document.querySelector('.feedback-form')
const emailOriginal = document.querySelector('[type="email"]')
const messageOriginal = document.querySelector('[name="message"]')
const submit = document.querySelector('[type="submit"]')

const data = {}

const storage = localStorage.getItem('feedback-form-state')

if (storage) {
    console.log(1);
    const {message, email} = JSON.parse(storage)
    messageOriginal.value = message
    emailOriginal.value = email
    data.email = email
    data.message = message
}

function onInput() {
    data.email = emailOriginal.value
    data.message = messageOriginal.value
    localStorage.setItem('feedback-form-state', `${JSON.stringify(data)}`)
    }


feedbackForm.addEventListener("input", throttle(onInput, 500))

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault()
    localStorage.removeItem('feedback-form-state')
    console.log(data)
    event.target.reset()
})