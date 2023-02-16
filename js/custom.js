//Responsive navbar
let navButton = document.querySelector(".mobile-nav");
let navHeader = document.querySelector(".header");

console.log(navButton);
console.log(navHeader);

navButton.addEventListener("click", function () {
    navHeader.classList.toggle("open-nav");
});

