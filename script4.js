var burgerButton = document.querySelector('.nav-left');
var burgerNavigation = document.querySelector('.navigation');
var closeButton = document.querySelector('.navigation__header a:first-child img');
var body__container = document.querySelector('.body__container');
var blureButton = document.querySelector('.navigation__blure');




if (body__container.clientWidth >= 768 && body__container.clientWidth < 1440) {
    burgerButton.addEventListener('click', function () {
        burgerNavigation.classList.add('navigation-click');
        body__container.classList.add('body__container-relative');
    
    });
    
    blureButton.addEventListener('click', function () {
        burgerNavigation.classList.remove('navigation-click');
        body__container.classList.remove('body__container-relative');
    });
    
    closeButton.addEventListener('click', function () {
        burgerNavigation.classList.remove('navigation-click');
        body__container.classList.remove('body__container-relative');
    });
} else {
    burgerButton.addEventListener('click', function () {
        burgerNavigation.classList.add('navigation-click');
        body__container.classList.add('body__container-relative');
    });
    closeButton.addEventListener('click', function () {
        burgerNavigation.classList.remove('navigation-click');
        body__container.classList.remove('body__container-relative');
    });
    blureButton.addEventListener('click', function () {
        burgerNavigation.classList.remove('navigation-click');
        body__container.classList.remove('body__container-relative');
    });
}

if (body__container.clientWidth >= 1440) {
    burgerNavigation.classList.remove('navigation-click');
        body__container.classList.remove('body__container-relative');
}