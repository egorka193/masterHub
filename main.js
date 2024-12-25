const swiper = new Swiper('.hero__swiper .swiper', {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 150,
    loop: true,
    speed: 6500,
    freeMode: true,
    autoplay: {
        delay: 0,
    },
});
  
  
const buttons = document.querySelectorAll('.discover__list')
const cards = document.querySelectorAll('.discover__cards')



buttons.forEach(item => item.addEventListener('click', function(e){
    const active = document.querySelector('.list__active')
    active.classList.remove('list__active')

    cards.forEach((item) =>{
        if(!item.classList.contains('hidden')){
            item.classList.add('hidden')
        }
    })

    if(e.target.classList.contains('discover__list')){
        e.target.classList.add('list__active')
        const data = e.target.getAttribute('data')
        console.log(data);
        document.querySelector(`.discover__content-${data}`).classList.remove('hidden')
    }
    if(e.target.parentNode.classList.contains('discover__list')){
        e.target.parentNode.classList.add('list__active')
        const data = e.target.parentNode.getAttribute('data')
        console.log(data);
        document.querySelector(`.discover__content-${data}`).classList.remove('hidden')
    }

}));

const mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});




const saySwiper = new Swiper(".saySwiper", {
    slidesPerView: 1,
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});


const Showanswer = document.querySelectorAll('.help__showanswer')
const questionNumber = document.querySelectorAll(".help__question")
const answerNumber = document.querySelectorAll('.help__answer')



function handleClick(event){
    const question = event.target.offsetParent.offsetParent
    console.log(question);
    question.classList.toggle('answer__active')

}

Showanswer.forEach(item => item.addEventListener('click', handleClick))