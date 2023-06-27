window.addEventListener('scroll', () => {
  if (window.innerWidth >= 1200) {
    const heroSection = document.querySelector('.hero-container');
    const link = document.querySelector('.js-scroll-down');
    const footer = document.querySelector('.footer');
    const linkRect = link.getBoundingClientRect();
    const heroRect = heroSection.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    if (
      linkRect.top <= 40 &&
      footerRect.top > window.innerHeight &&
      heroRect.bottom <= 108
    ) {
      link.classList.add('sticky');
    } else {
      link.classList.remove('sticky');
    }
  }
});
