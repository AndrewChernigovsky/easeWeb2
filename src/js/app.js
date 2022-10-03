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

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    scrollSmooth.init();
    menuBurger.init();
  });
})(jQuery);

const SHAPE = document.getElementById('mainFormShape');


// Отслеживаем изменение окна браузера
window.addEventListener("resize", function() {
  const windowInnerWidth  = document.documentElement.clientWidth;
  const windowInnerHeight = document.documentElement.clientHeight;
  console.log('width Browser ', windowInnerWidth, 'height Browser ', windowInnerHeight)
}, false);

const windowInnerWidth  =screen.width;
const windowInnerHeight = document.documentElement.clientHeight;
console.log('height Browser:' + windowInnerHeight)

if(SHAPE) {
  var c = SHAPE.getBoundingClientRect();
}
console.log('shape sizes:' + c.height)
// 1) Отслеживаем высоту документа, его скролл
window.addEventListener('scroll', function() {
  // console.log(scrollY + 'px');
  var c = SHAPE.getBoundingClientRect();
  let elHeigth =  SHAPE.offsetHeight;
  // let scrolltop = (document.body.scrollTop + c.top) + elHeigth;
  let scrolltop = document.body.scrollTop + c.top;
  let scrollleft = document.body.scrollLeft + c.left;
  console.log('top:' + scrolltop + ' left: ' + scrollleft + '');
});

window.addEventListener('scroll', function() {

});

// 2) Отслеживаем положение блока Элемента