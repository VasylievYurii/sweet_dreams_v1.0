(() => {
  const refs = {
    openAddReviewBtn: document.querySelector('.top-sellers-button'),
    closeAddReviewBtn: document.querySelector('.modal-review__button-close'),

    // openTestModalBtn: document.querySelector('.top-sellers-img'),
    // closeTestModalBtn: document.querySelector('.test-modal'),

    backdrop: document.querySelector('.modal-review__backdrop'),

    addReviewModal: document.querySelector('.modal-review'),
    // testModal: document.querySelector('.test-modal'),
    
    bodyNoScroll: document.querySelector('body'),
  };

  refs.openAddReviewBtn.addEventListener ('click', () => toggleBackdrop(toggleAddReviewModal));
  refs.closeAddReviewBtn.addEventListener('click', () => toggleBackdrop(toggleAddReviewModal));

  // refs.openTestModalBtn.addEventListener ('click', () => toggleBackdrop(toggleTestModal));
  // refs.closeTestModalBtn.addEventListener('click', () => toggleBackdrop(toggleTestModal));

  function toggleAddReviewModal() {
    refs.addReviewModal.classList.toggle('modal-review--hidden');
  }

  // function toggleTestModal() {
  //   refs.testModal.classList.toggle('test-modal--hidden');
  // }

  function toggleBackdrop(callback) {
    refs.backdrop.classList.toggle('modal-review__backdrop--hidden');
    refs.bodyNoScroll.classList.toggle('page__body--no-scroll');
    callback();
  }


})();
