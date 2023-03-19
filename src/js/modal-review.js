// Коротенький опис, як ця штука працює:

// Зразу прошу звернути увагу, шо ця штука не універсальна і писана на коліні, бо рівень знань в тематиці так собі, м'яко кажучи.

// 1)  Для початку необхідно і модалці і попапу задати по 2 класи з певними атрибутами:

// - базовий клас модалки/попапа (modalRootClass/popupRootClass), це клас зовнішнього div (чи як у вас там зроблено) модалки. В цьому класі, щоб модалка відображалася, коли не прихована, має бути атрибут

// opacity: 1;

// - клас модалки/попапа (modalHideClass/popupHideClass), який добавля'ється скриптом на модалку і відповідає за його приховування:

// .your-class-name--hidden {
//   opacity: 0;
//   pointer-events: none;
// }

// Увага! Обидва класи мають бути зразу задані на тегах, бо модалки і попапи в "стартовій" позиції приховані. Потім скрипт прибирає клас "приховування", і модалка з'являється

// 2)  На кнопці, яка викликає появу модалки (openBtn) зі сторінки має бути заданий клас з унікальною(!!!) назвою. Наприклад 'js-buy-now-modal'. У мене зараз для цієї мети використовується '.top-sellers-button', бо немає секції, до якої моя модалка. Просто прив'язався до того, шо було.

// 3) На кнопці, яка викликає появу попапу(submitBtn) при сабміті модалки має бути заданий клас з унікальною(!!!) назвою. Наприклад 'js-buy-now-submit'.

// 4) На кнопці, яка закриває модалку(closeBtn) - так само, клас з унікальною назвою, наприклад 'js-buy-now-close-modal'.

// 5) На кнопці, яка закриває попап(closePopupBtn) - так само, клас з унікальною назвою, наприклад 'js-buy-now-close-popup'.

// 6) Далі копіюємо список параметрів в секції "selectors" і вписуємо свої значення(справа). Копіюємо саме шматок між фігурними дужками:

// selectors: [
//   {
//     тут моє ...
//   },
//   {
//     тут ваше, тобто вийде такий перелік параметрів в фігурних дужках, типу

//     {моє},{ваше}, {може іще чиєсь}
//   },
// ]

// Зверніть увагу, що значення селекторів в modalHideClass і popupHideClass БЕЗ крапочок напочатку. Всі інші з крапочками. Це так задумано. 

// Ну і все, далі має працювати.

// З нюансів - натискання на Send форми відкриває попап, але тупо ігнорує, чи ввели ви щось в саму форму :) Але фіча, будем вважати :)

(() => {
  const refs = {
    selectors: [
      // {
      //   isOneStep: false,
      //   openBtn: '.reviews-btn',
      //   closeBtn: '.js-reviewClose',
      //   submitBtn: '.js-reviewSubmit',
      //   closePopupBtn: '.js-reviewPopupClose',
      //   modalRootClass: '.modal-review',
      //   modalHideClass: 'modal-review--hidden',
      //   popupRootClass: '.popup-review',
      //   popupHideClass: 'popup-review--hidden',
      // },
      {
        isOneStep: true,
        openBtn: '.subscribe-btn',
        closeBtn: '.subscribe-form-close',
        submitBtn: '.subscribe-form-submit',
        closePopupBtn: '.js--mockup',
        modalRootClass: '.subscribe-form',
        modalHideClass: 'subscribe-form-hidden',
        popupRootClass: '.js--mockup',
        popupHideClass: 'js--mockup',
      },
{
        isOneStep: false,
        openBtn: '.js-buy-open-btn',
        closeBtn: '.js-buy-close-modal',
        submitBtn: '.js-buy-review-submit',
        closePopupBtn: '.js-buy-close-popup',
        modalRootClass: '.modal-buy',
        modalHideClass: 'modal-buy-hidden',
        popupRootClass: '.popup-buy',
        popupHideClass: 'popup-buy-hidden',
      },

    ],
    backdrop: document.querySelector('.modal-review__backdrop'),
    bodyNoScroll: document.querySelector('body'),

    init: function (selectors) {
      for (let paramSet of selectors) {
        document
          .querySelector(paramSet.openBtn)
          .addEventListener('click', () =>
            toggleModal(paramSet.modalRootClass, paramSet.modalHideClass)
          );

        document
          .querySelector(paramSet.closeBtn)
          .addEventListener('click', () =>
            toggleModal(paramSet.modalRootClass, paramSet.modalHideClass)
          );

        if (paramSet.isOneStep) {
          document
          .querySelector(paramSet.submitBtn)
          .addEventListener('click', () =>
            toggleModal(paramSet.modalRootClass, paramSet.modalHideClass)
          );
        } else {
        document
          .querySelector(paramSet.submitBtn)
          .addEventListener('click', () =>
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

  function showPopup(
    modalRootClass,
    modalHideClass,
    popupRootClass,
    popupHideClass
  ) {
    document.querySelector(modalRootClass).classList.toggle(modalHideClass);
    document.querySelector(popupRootClass).classList.toggle(popupHideClass);
  }

  refs.init(refs.selectors);
})();
