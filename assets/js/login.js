const login = document.querySelector('.log_in')
const signup = document.querySelector(".sign_up")
const login_link  = document.querySelector('.log_in p a');
const signup_link = document.querySelector(".sign_up p a");

signup_link.addEventListener('click', () => { 
	login.style.display = "flex"
	signup.style.display = "none"
})

login_link.addEventListener('click', () => { 
	signup.style.display = "flex"
	login.style.display = "none"
})