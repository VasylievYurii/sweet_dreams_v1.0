const swiper = new Swiper('.swiper', {
  spaceBetween: 18,
  slidesPerView: 1,
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
