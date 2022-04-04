import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

const body = document.querySelector('.page__body');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
// const phoneInput = document.getElementById('phone-number');
// const PHONE_NUMBER_LENGTH = 11;
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.site-list__link');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    overlay.classList.remove('visually-hidden');
    body.classList.add('page__lock');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    overlay.classList.add('visually-hidden');
    body.classList.remove('page__lock');
  }
});

overlay.addEventListener('click', function () {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  overlay.classList.add('visually-hidden');
  body.classList.remove('page__lock');
});

links.forEach((link) => {
  link.addEventListener('click', function () {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    overlay.classList.add('visually-hidden');
    body.classList.remove('page__lock');
  });
});


// phoneInput.addEventListener('input', () => {
//   const valueLength = phoneInput.value.length;

//   if (valueLength < PHONE_NUMBER_LENGTH) {
//     phoneInput.setCustomValidity('Введите номер телефона в формате: 88009202020');
//   } else if (valueLength > PHONE_NUMBER_LENGTH) {
//     phoneInput.setCustomValidity('Номер телефона не должен превышать 11 знаков');
//   } else {
//     phoneInput.setCustomValidity('');
//   }

//   phoneInput.reportValidty();
// });


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
