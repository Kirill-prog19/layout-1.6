var swiper2 = new Swiper ('.swiper2', {
    pagination: {
        el: '.swiper2-pagination',
    },
    spaceBetween: 16,
});

var listSpecies = document.querySelector('.list-species');
var closeOpen = 1;
var secondButton = document.querySelector('.second-button');
var secondButtonText = secondButton.querySelector('.second-button p');
var secondButtonImg = secondButton.querySelector('.second-button img');
secondButton.addEventListener('click', function () {
    if (closeOpen % 2 === 1) {
        listSpecies.classList.remove('list-species');
        listSpecies.classList.add('new-list-species');
        secondButtonText.textContent = 'Скрыть';
        secondButtonImg.classList.add('button__img');
    } else {
        listSpecies.classList.remove('new-list-species');
        listSpecies.classList.add('list-species');
        secondButtonText.textContent = 'Показать все';
        secondButtonImg.classList.remove('button__img');
    }
    closeOpen += 1;
});