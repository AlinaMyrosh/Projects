// const swiper = new Swiper('.swiper', {
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     allowSlideNext: true,
//     allowSlidePrev: true,
//     allowTouchMove: true,
//     effect: 'slide',
//     mousewheel: {
//         invert: true,
//     },
//     slideNextClass: 'projects-prev-btn',
//     slidePrevClass: 'projects-next-btn',
//     spaceBetween: 24,
// });

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation],
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const sectionReview = document.querySelector('.reviews');
sectionReview.addEventListener('keydown', (event) => {
    // console.log('e', event)
    event.preventDefault();
    if (event.code === 'ArrowRight') {
        swiper.slideNext(300);
    } else if (event.code === 'ArrowLeft') {
        swiper.slidePrev(300);
    }
});
