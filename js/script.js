"use strict"


// Меню бургер 

const burgerHeader = document.querySelector('.header__burger');
const menuHeader = document.querySelector('.header__menu');
if (burgerHeader) {
    burgerHeader.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerHeader.classList.toggle('_active');
        menuHeader.classList.toggle('_active');
    });
};

// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            
            if (burgerHeader.classList.contains('_active')){
                document.body.classList.remove('_lock');
                burgerHeader.classList.remove('_active');
                menuHeader.classList.remove('_active');
            }
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}