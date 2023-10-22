const form = document.querySelector('#login-form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')


let usernameVal = localStorage.getItem('Email')
let usernameArr = usernameVal ? JSON.parse(usernameVal) : [];

let passwordVal = localStorage.getItem('Password')
let passwordArr = passwordVal ? JSON.parse(passwordVal) : [];

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(validateInput()) {
        alert("Successfully Loged In")
        window.location.href='final.html'
    }
})

function validateInput(){
    let usernameVal = username.value.trim()
    let passwordVal = password.value.trim()
    let success = true
    console.log(usernameArr.includes(usernameVal))
    console.log(passwordArr.includes(passwordVal))

    if(usernameVal === '') {
         setError(username, '* username required to access')
         success = false
    } else if(usernameArr.includes(usernameVal)) {
        setSuccess(username)
    } else {
        setError(username, '* Invalid username')
        success = false
    }

    if(passwordVal === '') {
        setError(password, '* enter the password')
        success = false
    } else if(passwordArr.includes(passwordVal)) {
        setSuccess(password)
    } else {
        setError(password, '* Invalid Password')
        success = false
    }

    return success
}


function setError(element, message) {
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerHTML = message
    inputGroup.classList.add('error')
    inputGroup.classList.add('.success')
}

function  setSuccess(element){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerHTML = ''
    inputGroup.classList.add('success')
    inputGroup.classList.add('.error')
}



