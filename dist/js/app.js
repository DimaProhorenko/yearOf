const menuBtn = document.querySelector('.header__menu');
const closeBtn = document.querySelector('.header__close');
const headerOverlay = document.querySelector('.header__overlay');

menuBtn.addEventListener('click', () => {
    headerOverlay.classList.add('header__overlay--open');
})

closeBtn.addEventListener('click', () => {
    headerOverlay.classList.remove('header__overlay--open');
})