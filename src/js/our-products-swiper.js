const swiper = new Swiper('.swiper', {
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
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
