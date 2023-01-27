const form = document.querySelector('.registration-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const passwordInput = document.querySelector('#password');
const confirmPassInput = document.querySelector('#confirmPass');
const popup = document.querySelector('#popup');
const closePopup = document.querySelector('.popup__close');
const welcomePopup = document.querySelector('#popup__text');
welcomePopup.innerHTML = "";

form.addEventListener('submit', function (event) {
    event.preventDefault();

    validateInputs();
});

function setError(input, message) {
    const formItem = input.parentElement;
    const errorMessage = formItem.querySelector('.errorMessage');

    errorMessage.textContent = message;
    input.classList.add('error');
    input.classList.remove('success');
}

function setSuccess(input) {
    const formItem = input.parentElement;
    const errorMessage = formItem.querySelector('.errorMessage');

    errorMessage.textContent = "";
    input.classList.add('success');
    input.classList.remove('error');
}

function validateEmail(email) {
    let re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return re.test(String(phone));
}

function validatePassword(password) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/;
    return re.test(password);
}

function validateInputs() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPassValue = confirmPassInput.value.trim();

    if (nameValue === "") {
        setError(nameInput, "Please, enter your name");
    } else {
        setSuccess(nameInput);
    }

    if (emailValue === "") {
        setError(emailInput, "Please, enter your email");
    } else if (!validateEmail(emailValue)) {
        setError(emailInput, "Email entered incorrectly");
    } else {
        setSuccess(emailInput);
    }

    if (phoneValue === "") {
        setError(phoneInput, "Please, enter your phone number");
    } else if (!validatePhone(phoneValue)) {
        setError(phoneInput, "Phone number entered incorrectly");
    } else {
        setSuccess(phoneInput);
    }

    if (passwordValue === "") {
        setError(passwordInput, "Please, enter your password");
    } else if (!validatePassword(passwordValue)) {
        setError(passwordInput, "The password should consist of 6 or more Latin characters, contain uppercase and lowercase letters, numbers and special characters");
    } else {
        setSuccess(passwordInput);
    }

    if (confirmPassValue === "") {
        setError(confirmPassInput, "Please, confirm your password");
    } else if (passwordValue !== confirmPassValue) {
        setError(confirmPassInput, "Passwords do not match!");
    } else {
        setSuccess(confirmPassInput);
        popup.style.display = "block";
        welcomePopup.innerHTML = `Добро пожаловать, ${nameValue}!`;
        closePopup.addEventListener('click', function () {
            popup.style.display = "none";
        });
        window.addEventListener('click', function (event) {
            if (event.target == popup) {
                popup.style.display = "none";
            }
        });
    }
}