const modals = [
  {
    modalRootClass: '.js-modalName',
    modalOpenBtnClass: '.js-modalName-openBtn',
    modalCloseBtnClass: '.js-modalName-closeBtn',
    modalSubmitFormClass: '.js-modalName-submitForm',

    modalHideClass: 'js-hideClass',
  },
];

function toggleModal(config) {
  //main hide class. Use it for transition implementation
  document
    .querySelector(config.modalRootClass)
    .classList.toggle(config.modalHideClass);

  // optional deffered hide class. Use it ho hide modal completely, for exapmle to hide scrolling

  // setTimeout(
  //   () =>
  //     document
  //       .querySelector(modalRootClass)
  //       .classList.toggle('visually-hidden'),
  //   250
  // );
}

function onOpenModalButtonClick(config) {}

function initActionElements(modals) {
  modals.map(modal => {
    document.querySelectorAll(modal.modalOpenBtnClass).forEach(openButton => {
      element.addEventListener('click', toggleModal);
    });
    document
      .querySelector(modal.modalCloseBtnClass)
      .addEventListener('click', toggleModal);
    document
      .querySelector(modal.modalSubmitFormClass)
      ?.addEventListener('submit', toggleModal);
  });
}

const refs = {
  selectors: [
    {
      isOneStep: false,
      openBtn: ['.reviews-btn'],
      closeBtn: '.js-reviewClose',
      submitBtn: '.js-reviewSubmit',
      closePopupBtn: '.js-reviewPopupClose',
      modalRootClass: '.modal-review',
      modalHideClass: 'modal-review--hidden',
      popupRootClass: '.popup-review',
      popupHideClass: 'popup-review--hidden',
    },
    //   {
    //     isOneStep: true,
    //     openBtn: ['.subscribe-btn'],
    //     closeBtn: '.subscribe-form-close',
    //     submitBtn: '.js-subscribeSubmit',
    //     closePopupBtn: '.js--mockup',
    //     modalRootClass: '.subscribe-form',
    //     modalHideClass: 'subscribe-form-hidden',
    //     popupRootClass: '.js--mockup',
    //     popupHideClass: 'js--mockup',
    //   },
    //   {
    //     isOneStep: false,
    //     openBtn: ['.js-buy-open-btn', '.js-buy-open-btn1'],
    //     closeBtn: '.js-buy-close-modal',
    //     submitBtn: '.js-buySubmit',
    //     closePopupBtn: '.js-buy-close-popup',
    //     modalRootClass: '.modal-buy',
    //     modalHideClass: 'modal-buy-hidden',
    //     popupRootClass: '.popup-buy',
    //     popupHideClass: 'popup-buy-hidden',
    //   },
  ],
  backdrop: document.querySelector('.modal-review__backdrop'),
  bodyNoScroll: document.querySelector('body'),

  init: function (selectors) {
    for (let paramSet of selectors) {
      for (let openButton of paramSet.openBtn) {
        document
          .querySelector(openButton)
          .addEventListener('click', () =>
            toggleModal(paramSet.modalRootClass, paramSet.modalHideClass)
          );
      }

      document
        .querySelector(paramSet.closeBtn)
        .addEventListener('click', () =>
          toggleModal(paramSet.modalRootClass, paramSet.modalHideClass)
        );

      if (paramSet.isOneStep) {
        document
          .querySelector(paramSet.submitBtn)
          .addEventListener('submit', () =>
            toggleModal(paramSet.modalRootClass, paramSet.modalHideClass)
          );
      } else {
        document
          .querySelector(paramSet.submitBtn)
          .addEventListener('submit', () =>
            showPopup(
              paramSet.modalRootClass,
              paramSet.modalHideClass,
              paramSet.popupRootClass,
              paramSet.popupHideClass
            )
          );

        document
          .querySelector(paramSet.closePopupBtn)
          .addEventListener('click', () =>
            toggleModal(paramSet.popupRootClass, paramSet.popupHideClass)
          );
      }
    }
  },
};

function bindElements() {}

function toggleBackdrop() {
  refs.backdrop.classList.toggle('modal-review__backdrop--hidden');
  refs.bodyNoScroll.classList.toggle('page__body--no-scroll');
}

function toggleModal(rootClass, hideClass) {
  if (document.querySelector(rootClass).classList.contains('visually-hidden')) {
    document.querySelector(rootClass).classList.toggle('visually-hidden');
    document.querySelector(rootClass).classList.toggle(hideClass);
  } else {
    document.querySelector(rootClass).classList.toggle(hideClass);
    setTimeout(
      () =>
        document.querySelector(rootClass).classList.toggle('visually-hidden'),
      250
    );
  }

  toggleBackdrop();
  return false;
}

function showPopup(
  modalRootClass,
  modalHideClass,
  popupRootClass,
  popupHideClass
) {
  document.querySelector(modalRootClass).classList.toggle(modalHideClass);
  setTimeout(
    () =>
      document
        .querySelector(modalRootClass)
        .classList.toggle('visually-hidden'),
    250
  );
  document.querySelector(popupRootClass).classList.toggle('visually-hidden');
  document.querySelector(popupRootClass).classList.toggle(popupHideClass);
}

refs.init(refs.selectors);
