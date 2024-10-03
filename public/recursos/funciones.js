document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    let isMenuOpen = false;

    menuButton.addEventListener('click', function () {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden', !isMenuOpen);
        menuButton.setAttribute('aria-expanded', isMenuOpen);
        menuIcon.classList.toggle('hidden', isMenuOpen);
        closeIcon.classList.toggle('hidden', !isMenuOpen);
    });
});