// Get the navbar
const navbar = document.getElementById('navbar');

// Add an event listener to window to detect scroll
window.onscroll = function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
