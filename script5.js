var feedbackButton1 = document.querySelector('.title__right img');
var feedbackButton2 = document.querySelector('.nav-right__link-repair');
var feedbackButton3 = document.querySelector('.title__img-repair');
var feedbackClose = document.querySelector('.feedback img');
var feedback = document.querySelector('.feedback');
var body__container = document.querySelector('.body__container');
var feedback__blure = document.querySelector('.feedback__blure');

if (body__container.clientWidth < 768) {
    feedbackButton1.addEventListener('click', function () {
        feedback.classList.add('feedback-click');
        body__container.classList.add('body__container-feedback');
    });
    feedbackButton2.addEventListener('click', function () {
        feedback.classList.add('feedback-click');
        body__container.classList.add('body__container-feedback');
    });
    feedbackClose.addEventListener('click', function () {
        feedback.classList.remove('feedback-click');
        body__container.classList.remove('body__container-feedback');
    });
}




if (body__container.clientWidth >= 768) {
    feedbackButton3.addEventListener('click', function () {
        feedback.classList.add('feedback-click');
        body__container.classList.add('body__container-feedback');
    });
    feedbackButton2.addEventListener('click', function () {
        feedback.classList.add('feedback-click');
        body__container.classList.add('body__container-feedback');
    });
    feedbackClose.addEventListener('click', function () {
        feedback.classList.remove('feedback-click');
        body__container.classList.remove('body__container-feedback');
    });
    feedback__blure.addEventListener('click', function () {
        feedback.classList.remove('feedback-click');
        body__container.classList.remove('body__container-feedback');
    });
}