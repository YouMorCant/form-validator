//Dynamic Variables
const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using contraint API
    isValid = form.checkValidity();

    // check if inputs are valid
    if (!isValid) {
        message.textContent = "Please fill out all required fields";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    // checks to see if the passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
    }else{
        passwordsMatch = false;
        message.textContent = "Passwords do not match, please try again";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    // If form is valid and passwords match
    message.textContent = "Successfully Registered!";
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
}

function storeFormData() {
    const user = {
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value
    };
    // Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    
    // Validate Form
    validateForm();

    //Store data
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event Listeners
form.addEventListener('submit', processFormData);