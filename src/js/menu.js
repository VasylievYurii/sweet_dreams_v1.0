(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    backdrop: document.querySelector('.modal-review__backdrop'),
    bodyNoScroll: document.querySelector('body'),
    menuLink: document.querySelector('.header-nav-mob'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuLink.addEventListener('click', toggleMenu);



  function toggleBackdrop() {
    refs.backdrop.classList.toggle('modal-review__backdrop--hidden');
    refs.bodyNoScroll.classList.toggle('page__body--no-scroll');
  }

  function toggleMenu() {
    toggleBackdrop();
    refs.menu.classList.toggle('is-open');
  }
})();
