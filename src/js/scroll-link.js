const scrollDown = {
      el: document.querySelector('.scroll-down'),
      show() {
        this.el.classList.remove('scroll-down-hide');
      },
      hide() {
        this.el.classList.add('scroll-down-hide');
      },
  addEventListener() {
        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          scrollY > 700 ? this.show() : this.hide();
        });
      }
    }
    scrollDown.addEventListener();