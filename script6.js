var callButton1 = document.querySelector('.nav-right__link-checkstatus');
var callButton2 = document.querySelector('.title__img-checkstatus');

var closeCall = document.querySelector('.call img');
var call = document.querySelector('.call');
var call__blure = document.querySelector('.call__blure');
var body__container = document.querySelector('.body__container');


if (body__container.clientWidth < 768) {
    callButton1.addEventListener('click', function () {
        call.classList.add('call-click');
        body__container.classList.add('body__container-call');
    });

    
    closeCall.addEventListener('click', function () {
        call.classList.remove('call-click');
        body__container.classList.remove('body__container-call');
    });
}

if (body__container.clientWidth >= 768) {
    callButton2.addEventListener('click', function () {
        call.classList.add('call-click');
        body__container.classList.add('body__container-call');
        
    });
    callButton1.addEventListener('click', function () {
        call.classList.add('call-click');
        body__container.classList.add('body__container-call');
        
    });
    closeCall.addEventListener('click', function () {
        call.classList.remove('call-click');
        body__container.classList.remove('body__container-call');
        
    });
    call__blure.addEventListener('click', function () {
        call.classList.remove('call-click');
        body__container.classList.remove('body__container-call');
        
    });
}