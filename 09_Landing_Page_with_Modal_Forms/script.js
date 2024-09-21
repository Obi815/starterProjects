const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');
const signupBtn = document.querySelector('.signup-btn');
const loginBtn = document.querySelector('.login-btn');
const loginXbtn = document.querySelector('.login-x');
const signupXbtn = document.querySelector('.signup-x');

const formContainer = document.querySelector('.form-container')

/* a function that calls the .display in css 
to show the signup form when sign up button is clicked */
signupBtn.addEventListener('click', () => {
    signupModal.classList.add('display');
    formContainer.classList.add('disable')
})

/* a function that calls the .display in css 
to show the login form when  login button is clicked */
loginBtn.addEventListener('click', () => {
    loginModal.classList.add('display');
    formContainer.classList.add('disable')
})

/* these next two function remove the pop 
up forms when x button is clicked */

loginXbtn.addEventListener('click', () => {
    loginModal.classList.remove('display');

    formContainer.classList.remove('disable')
})

signupXbtn.addEventListener('click', () => {
    signupModal.classList.remove('display');
    formContainer.classList.remove('disable')
})