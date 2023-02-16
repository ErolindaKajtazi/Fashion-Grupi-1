//Responsive navbar
let navButton = document.querySelector(".mobile-nav");
let navHeader = document.querySelector(".header");

console.log(navButton);
console.log(navHeader);

navButton.addEventListener("click", function () {
    navHeader.classList.toggle("open-nav");
});

// Get the form element and the input fields
const form = document.querySelector('.login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Function to validate the form
function validateForm() {
  if (usernameInput.value.trim() === '') {
    usernameInput.style.borderBottomColor = 'red';
  } else {
    usernameInput.style.borderBottomColor = '';
  }

  if (passwordInput.value.trim() === '') {
    passwordInput.style.borderBottomColor = 'red';
  } else {
    passwordInput.style.borderBottomColor = '';
  }

  if (form.checkValidity()) {
    // Submit the form
    form.submit();
  }
}

// Add an event listener to the Login button
const loginButton = document.querySelector('.btn-log');
loginButton.addEventListener('click', validateForm);
