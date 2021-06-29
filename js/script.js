const form__login = document.querySelector(".form__login");
const form__email = document.querySelector(".form__email");
const form__password = document.querySelector(".form__password");
const error__email = document.querySelector(".error__email");
const error__password = document.querySelector(".error__password");

form__login.addEventListener('click', validation);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validation(){
	form__email.classList.remove('error_border');
	form__password.classList.remove('error_border');
	error__password.innerHTML = "";
	error__email.innerHTML = "";
	
	if(form__password.value.length < 6 && !validateEmail(form__email.value)){
		form__password.classList.add('error_border');
		form__email.classList.add('error_border');
		error__password.classList.add('show');
		error__email.classList.add('show');
		error__password.innerHTML = "Password is too short";
		error__email.innerHTML = "This is not an email";
	} else if(!validateEmail(form__email.value)){
		form__email.classList.add('error_border');
		error__email.classList.add('show');
		error__email.innerHTML = "This is not an email";
	} else if(form__password.value.length < 6){
		form__password.classList.add('error_border');
		error__password.classList.add('show');
		error__password.innerHTML = `Password is too short`;
	}else{
		console.log("Send to the server")
	}
	
}


