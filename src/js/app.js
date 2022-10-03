// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

//import Accordion from './components/accordion';
import menuBurger from './components/burger-menu';
import scrollSmooth from './components/scroll-smooth';
// import shapeResize from './components/animations/shapeResize';
// import initSelects from './components/select';
// import bntOFFER from './components/btnOffer';
const SHAPE = document.getElementById('mainFormShape');

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    scrollSmooth.init();
    menuBurger.init();
  });
})(jQuery);
