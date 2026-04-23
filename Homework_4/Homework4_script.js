/* EXERCISE 1: FORM VALIDATION */

let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }

    let passwordPattern = /[#\$%]/;

    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 5) {
        passwordError.textContent = "At least 5 characters required";
        isValid = false;
    } else if (!password.match(passwordPattern)) {
        passwordError.textContent = "Must include #, $ or %";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    }
});


/* EXERCISE 2: CARD GALLERY */

let track = document.getElementById("track");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

let index = 0;

let visibleCards = 3;
let totalCards = document.querySelectorAll(".card").length;

let cardWidth = 210;

rightBtn.addEventListener("click", function () {

    let maxIndex = totalCards - visibleCards;

    if (index < maxIndex) {
        index++;
    } else {
        index = 0;
    }

    track.style.transform = `translateX(-${index * cardWidth}px)`;
});

leftBtn.addEventListener("click", function () {

    let maxIndex = totalCards - visibleCards;

    if (index > 0) {
        index--;
    } else {
        index = maxIndex;
    }

    track.style.transform = `translateX(-${index * cardWidth}px)`;
});