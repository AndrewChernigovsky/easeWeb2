const BURGEROPEN = document.querySelector('.js-burger-open');
const BURGER = document.querySelector('.burger');
const NAV = document.querySelector('.js-burger');
const NAVWRAPPER = document.querySelector('.header__wrapper');

const BODY = document.querySelector('body');
const CLASS_OVERFLOW = 'overflow';
const CLASS_ACTIVE = 'active';

const menuBurger =(() => {
  const menuBurgers = function menuBurger(){
    BURGER.addEventListener('click', (e) => {
      e.preventDefault();
      NAV.classList.toggle(CLASS_ACTIVE);
      BODY.classList.toggle(CLASS_OVERFLOW)
      BURGER.classList.toggle(CLASS_ACTIVE)
    })
  };

  const init = () => {
    menuBurgers();
  };

  return {
    init,
  }
})();


export default menuBurger;
