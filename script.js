const firstName = document.getElementById(`firstName`);
const firstNameError = document.getElementById(`firstNameError`);
const lastName = document.getElementById(`lastName`);
const lastNameError = document.getElementById(`lastNameError`);
const email = document.getElementById(`email`);
const emailError = document.getElementById(`emailError`);
const password = document.getElementById(`password`);
const passwordError = document.getElementById(`passwordError`);

const form = document.getElementById(`signup-form`);

function adjustFormHeight() {
    const errors = document.querySelectorAll('.errors');
    let totalHeight = 474;

    errors.forEach(error => {
        if (error.textContent !== "") {
            totalHeight += 20;
            error.classList.add("active");
        } else {
            error.classList.remove("active");
        }
    });
    form.style.height = `${totalHeight}px`;
}


form.addEventListener(`submit`, (e) => {

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (firstName.value === '' || firstName.value == null) {
        e.preventDefault();
        firstNameError.textContent = "First Name cannot be empty";
        firstName.style.borderColor = "#FF7979";
        firstName.style.background = "url('./Group\ 11.png') no-repeat right "
        firstName.style.backgroundPositionX = "95%"
    } else {
        firstNameError.textContent = "";
        firstName.style.borderColor = "";
        firstName.style.background = "";
    }

    if (lastName.value === '' || lastName.value == null) {
        e.preventDefault();
        lastNameError.textContent = "Last Name cannot be empty";
        lastName.style.borderColor = "#FF7979";
        lastName.style.background = "url('./Group\ 11.png') no-repeat right "
        lastName.style.backgroundPositionX = "95%"
    } else {
        lastNameError.textContent = "";
        lastName.style.borderColor = "";
        lastName.style.background = "";
    }

    if (email.value === '' || email.value == null) {
        e.preventDefault();
        emailError.textContent = "Email cannot be empty";
        email.style.borderColor = "#FF7979";
        email.style.background = "url('./Group\ 11.png') no-repeat right "
        email.style.backgroundPositionX = "95%"
        email.placeholder = "email@example/com";
        email.classList.add('error');
    } else if (!emailPattern.test(email.value.trim())) {
        e.preventDefault();
        emailError.textContent = "Looks like this is not an email";
        email.style.borderColor = "#FF7979";
        email.style.background = "url('./Group\ 11.png') no-repeat right "
        email.style.backgroundPositionX = "95%"
        email.placeholder = "email@example/com";
        email.classList.add('error');
    } else {
        emailError.textContent = "";
        email.style.borderColor = "";
        email.style.background = "";
        email.classList.remove('error');

    }
    const lowerCasePattern = /[a-z]/;
    const upperCasePattern = /[A-Z]/;
    const numberPattern = /\d/;
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (password.value === '' || password.value == null) {
        e.preventDefault();
        passwordError.textContent = "Password cannot be empty";
        password.style.borderColor = "#FF7979";
        password.style.background = "url('./Group\ 11.png') no-repeat right ";
        password.style.backgroundPositionX = "95%";
    } else if (password.value.length < 6) {
        e.preventDefault();
        passwordError.textContent = "Password must be at least 6 characters long";
        password.style.borderColor = "#FF7979";
        password.style.background = "url('./Group\ 11.png') no-repeat right ";
        password.style.backgroundPositionX = "95%";
    } else if (!lowerCasePattern.test(password.value)) {
        e.preventDefault();
        passwordError.textContent = "Password must contain at least one lowercase letter";
        password.style.borderColor = "#FF7979";
        password.style.background = "url('./Group\ 11.png') no-repeat right ";
        password.style.backgroundPositionX = "95%";
    } else if (!upperCasePattern.test(password.value)) {
        e.preventDefault();
        passwordError.textContent = "Password must contain at least one uppercase letter";
        password.style.borderColor = "#FF7979";
        password.style.background = "url('./Group\ 11.png') no-repeat right ";
        password.style.backgroundPositionX = "95%";
    } else if (!numberPattern.test(password.value)) {
        e.preventDefault();
        passwordError.textContent = "Password must contain at least one number";
        password.style.borderColor = "#FF7979";
        password.style.background = "url('./Group\ 11.png') no-repeat right ";
        password.style.backgroundPositionX = "95%";
    } else {
        passwordError.textContent = "";
        password.style.borderColor = "";
        password.style.background = "";
    }

    adjustFormHeight();
});