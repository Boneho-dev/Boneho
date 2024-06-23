const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll("a");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

function closeMenu() {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

navLinks.forEach((Link) => {
    Link.addEventListener('click', closeMenu);
});