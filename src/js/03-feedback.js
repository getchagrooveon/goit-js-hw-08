import throttle from 'lodash.throttle'
const feedbackForm = document.querySelector('.feedback-form')
const email = document.querySelector('[type="email"]')
const message = document.querySelector('[name="message"]')
const submit = document.querySelector('[type="submit"]')

const data = {}

const storage = localStorage.getItem('feedback-form-state')

if (storage) {
    const {message, email} = JSON.parse(storage)
    message.value = message
    email.value = email
}

function onInput() {
    data.email = email.value
    data.message = message.value
    localStorage.setItem('feedback-form-state', `${JSON.stringify(data)}`)
    }


feedbackForm.addEventListener("input", throttle(onInput, 500))

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault()
    localStorage.removeItem('feedback-form-state')
    console.log(data)
    event.target.reset()
})