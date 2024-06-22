const inputName = document.getElementById("name");
const inputFirstname = document.getElementById("firstname");
const inputEmail = document.getElementById("InputEmail");
const inputPassword = document.getElementById("InputPassword");
const inputPasswordConfirm = document.getElementById("InputPasswordConfirm");
const submitButton = document.getElementById("submitButton");
submitButton.disabled = true;

inputName.addEventListener("keyup", validateForm);
inputFirstname.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputPasswordConfirm.addEventListener("keyup", validateForm);


function validateForm() {
    const validName = validateRequired(inputName);
    const validFirstame = validateRequired(inputFirstname);
    const validEmail = validateEmail(inputEmail);
    const validPassword = validatePassword(inputPassword);
    const validPasswordConfirm = validateConfirmPassword(inputPassword, inputPasswordConfirm);

    if (validName && validFirstame && validEmail && validPassword && validPasswordConfirm){
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function validateEmail(input){

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;

    if(mailUser.match(regexEmail)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input) {

    if(input.value != '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input) {

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const userPassword = input.value;

    if(userPassword.match(regexPassword)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateConfirmPassword(password, passwordConfirm) {
    if (password.value == passwordConfirm.value && passwordConfirm.value != '') {
        passwordConfirm.classList.add("is-valid");
        passwordConfirm.classList.remove("is-invalid");
        return true;
    } else {
        passwordConfirm.classList.remove("is-valid");
        passwordConfirm.classList.add("is-invalid");
        return false;
    }
}