import Swiper, { Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.min.css';

const swiper1 = new Swiper('.swiper1', {
  modules: [Navigation, Pagination],
  spaceBetween: 18,
  slidesPerView: 1,
  grabCursor: true,
  slideToClickedSlide: true,
  mousewheel: {
    sensitivity: 1,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: '.swiper-pagination1',
  },
});

const swiper2 = new Swiper('.swiper2', {
  modules: [Navigation, Pagination],
  spaceBetween: 16,
  slidesPerView: 1,
  grabCursor: true,
  slideToClickedSlide: true,
  mousewheel: {
    sensitivity: 1,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 28,
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination2',
  },
});

const swiper3 = new Swiper('.swiper3', {
  modules: [Navigation, Pagination],
  spaceBetween: 16,
  slidesPerView: 1,
  grabCursor: true,
  slideToClickedSlide: true,
  mousewheel: {
    sensitivity: 1,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination3',
  },
});