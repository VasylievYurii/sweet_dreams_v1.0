(() => {
  const refs = {

    selectors: [
      {
      openBtn: '.top-sellers-button',
      closeBtn: '.js-reviewClose',
      submitBtn: '.js-reviewSubmit',
      closePopupBtn: '.js-reviewPopupClose',
      modalRootClass: '.modal-review',
      modalHideClass: 'modal-review--hidden',
      popupRootClass: '.popup-review',
      popupHideClass: 'popup-review--hidden',
      },
    ],
    backdrop: document.querySelector('.modal-review__backdrop'),
    bodyNoScroll: document.querySelector('body'),

    init: function (selectors) {
      for (let paramSet of selectors){
        document
        .querySelector(paramSet.openBtn)
        .addEventListener('click', () => toggleModal(paramSet.modalRootClass, paramSet.modalHideClass) );
        
        document
        .querySelector(paramSet.closeBtn)
        .addEventListener('click', () => toggleModal(paramSet.modalRootClass, paramSet.modalHideClass) );

        document
        .querySelector(paramSet.submitBtn)
        .addEventListener('click', () => showPopup(paramSet.modalRootClass, paramSet.modalHideClass, paramSet.popupRootClass, paramSet.popupHideClass) );

        document
        .querySelector(paramSet.closePopupBtn)
        .addEventListener('click', () => toggleModal(paramSet.popupRootClass, paramSet.popupHideClass) );
      }
    },
     
  };

  function toggleBackdrop() {
    refs.backdrop.classList.toggle('modal-review__backdrop--hidden');
    refs.bodyNoScroll.classList.toggle('page__body--no-scroll');
  }

  function toggleModal(rootClass, hideClass) {
    console.log(rootClass);
    console.log(hideClass);
    document.querySelector(rootClass).classList.toggle(hideClass);
    toggleBackdrop();
  }

  function showPopup(modalRootClass, modalHideClass, popupRootClass, popupHideClass) {
    document.querySelector(modalRootClass).classList.toggle(modalHideClass);
    document.querySelector(popupRootClass).classList.toggle(popupHideClass);
  }

  refs.init(refs.selectors);

})();
