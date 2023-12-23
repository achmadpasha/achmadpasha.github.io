// Hamburger Menu Start
const menuToggle = document.querySelector ('.menu-toggle input');
const list = document.querySelector('.nav-bar ul');

menuToggle.addEventListener('click', function () {
    list.classList.toggle('slide')
});
// Hamburger Menu End

// Day Night Toggle Start
const dayNightBtn = document.querySelector(".day-night-btn"),
icon = document.querySelector(".icon .light");

dayNightBtn.addEventListener("click", () => {
    dayNightBtn.classList.toggle("active");

// if(dayNightBtn.classList.contains("active")) {
//   return icon.classList.replace(".light", ".dark");
// }

// icon.classList.replace(".dark", ".light");
});
// Day Night Toggle End

// Single Toggle Start
const singleToggleBtn = document.querySelector(".single-toggle-btn"),
icons = document.querySelector(".icon .day");

singleToggleBtn.addEventListener("click", () => {
    singleToggleBtn.classList.toggle("active");
});
// Single Toggle End

// Theme Toggle Start
const toggleBtn = document.querySelector(".toggle-btn"),
lockIcon = document.querySelector(".icon .light");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
});
// Theme Toggle End