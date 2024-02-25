//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedaNav = header.offsetTop;

    if (window.pageYOffset > fixedaNav) {
        header.classList.add('navbar-fixed');
     } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navbarMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navbarMenu.classList.toggle('hidden');
});