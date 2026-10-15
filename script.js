const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const closeButton = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
})

closeButton.addEventListener('click', () => {
    menu.classList.remove('active');
})