// const button = document.querySelector('.register');
// const form = document.querySelector('.registration-form');
// const formInputs = document.querySelectorAll('.input');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const phoneInput = document.querySelector('#phone');
// const passwordInput = document.querySelector('#password');
// const confirmPassInput = document.querySelector('#confirmPass');
// const message = document.querySelector('.errorMessage');
// const popup = document.querySelector('#popup');
// const close = document.querySelector('.popup__close')[0];
// const welcome = document.querySelector('#popup__text');
// welcome.innerHTML = "";
// let errors = [];
// // console.log(form, formInputs, nameInput, email, phone, password, confirmPass);

// function checkValidate(input) {
//     let validity = input.validity;
//     if (validity.valueMissing) {
//         errors.push("Field " + input.placeholder + " is empty");
//     }
// }

// 

// function validatePhone(phone) {
//     let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
//     return re.test(String(phone));
// }

// function validatePassword(password) {
//     let re = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
//     return re.test(password);
// }

// function validateConfirmPassword(password) {
//     let passwordValue = password.value;
//     if (password === passwordValue)
//         return true;
// }

// function checkAll() {

//     errors = [];

//     let emailValue = emailInput.value;
//     let phoneValue = phoneInput.value;
//     let passwordValue = passwordInput.value;
//     let confirmPassValue = confirmPassInput.value;


//     

//     

//     if (phoneValue !== '' && !validatePhone(phoneValue)) {
//         errors.push("Phone number entered incorrectly");
//         phone.classList.add('error');
//     }

//     if (passwordValue !== '' && !validatePassword(passwordValue)) {
//         errors.push("The password should consist of 8 or more Latin characters, contain uppercase and lowercase letters, numbers and special characters");
//         password.classList.add('error');
//     }

//     if (confirmPassValue !== '' && !validateConfirmPassword(confirmPassValue)) {
//         errors.push('Passwords do not match!');
//         confirmPassValue.classList.add('error');
//     }

// }

// function onSubmit() {

//     console.log('work');
//     let name = nameInput.value;

//     checkAll()

//     if (errors.length == 0) {
//         popup.style.display = "block";
//         welcome.innerHTML = `Добро пожаловать, ${name}!`;
//         close.onclick = function () {
//             popup.style.display = "none";
//         }
//         window.onclick = function (event) {
//             if (event.target == popup) {
//                 popup.style.display = "none";
//             }
//         }
//     } else {
//         message.innerHTML = errors.join('<br><br>');
//     }

//     
// }

// button.addEventListener('click', onSubmit);

const form = document.querySelector('.registration-form');
const formInputs = document.querySelectorAll('.input');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const passwordInput = document.querySelector('#password');
const confirmPassInput = document.querySelector('#confirmPass');
const Errmessages = document.querySelectorAll('.errorMessage');

function validateEmail(email) {
    let re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    return re.test(email);
}

function validatePhone(phone) {
    let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return re.test(String(phone));
}

function validatePassword(password) {
    let re = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    return re.test(password);
}

function validateConfirmPassword(password) {
    let passwordValue = password.value;
    if (password === passwordValue)
        return true;
}

form.onsubmit = function () {
    let emailValue = emailInput.value;
    let phoneValue = phoneInput.value;
    let passwordValue = passwordInput.value;
    let confirmPassValue = confirmPassInput.value;
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');


    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            for (let m of Errmessages) {
                m.textContent = "Input not filled";
            }
        } else {
            input.classList.remove('error');
            for (let m of Errmessages) {
                m.textContent = "";
            }
        }
    });

    if (emptyInputs.length !== 0) {
        // for (let m of Errmessages) {
        //     m.textContent = "Input not filled";
        return false;
        // }
    }

    if (emailValue !== '' && !validateEmail(emailValue)) {
        console.log("Email entered incorrectly");
        emailInput.classList.add('error');
        return false;
    } else {
        emailInput.classList.remove('error');
    }

    if (phoneValue !== '' && !validatePhone(phoneValue)) {
        console.log("Phone number entered incorrectly");
        phoneInput.classList.add('error');
        return false;
    } else {
        phoneInput.classList.remove('error');
    }

    if (passwordValue !== '' && !validatePassword(passwordValue)) {
        console.log("The password should consist of 8 or more Latin characters, contain uppercase and lowercase letters, numbers and special characters");
        passwordInput.classList.add('error');
        return false;
    } else {
        passwordInput.classList.remove('error');
    }

    if (confirmPassValue !== '' && !validateConfirmPassword(confirmPassValue)) {
        console.log("Passwords do not match!");
        confirmPassInput.classList.add('error');
        return false;
    } else {
        confirmPassInput.classList.remove('error');
    }

}