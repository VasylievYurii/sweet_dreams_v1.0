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

const swiper2 = new Swiper('.swiper2', {
  spaceBetween: 18,
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
  },
});

const swiper3 = new Swiper('.swiper3', {
  spaceBetween: 16,
  slidesPerView: 1,
  loop: true,
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
    el: '.swiper-pagination3',
  },
});