const swiper = new Swiper('.swiper-buy', {
  spaceBetween: 0,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});