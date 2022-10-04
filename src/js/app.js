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


// 1) Отслеживаем высоту документа, его скролл
// window.addEventListener('scroll', function() {

//   console.log('расстояние пролистывания ' + Math.floor(scrollY, 1) + 'px');
//   const height = document.body.offsetHeight
//   const screenHeight = window.innerHeight
//   let elHeigth =  SHAPE.offsetHeight;
//   let scrollYY = scrollY + screenHeight;
//   let centerScreen = screenHeight / 2;
//   let centerScreen1 = screenHeight / 2;
//   let scrollbottom = document.body.scrollTop + c.bottom;

//   console.log('top:' + Math.floor(scrollYY, 1) + ' bottom: ' + Math.floor(scrollbottom, 1));
//   console.log('center:' + Math.floor(centerScreen1, 1));

//   if(scrollYY < centerScreen && scrollYY >= c.top) {
//     let x = scrollYY * 100% + '%';
//     console.log(x)
//   }
//   let x = scrollYY;
//   let y = ;
//   let z = ;
//   let o = ;
//   if (scrollYY >= c.top) {
//     SHAPE.style.borderRadius = `${x} ${y} ${z} ${o} / 100% 100% 0% 0%`;
//   }
// });

 // let scrolltop = document.body.scrollTop + c.top;


const SHAPE = document.getElementById('mainFormShape');



window.addEventListener('scroll', function(){
    // 1 Вычислить всю высоту документа h
    // 2 Вычислить всю высоту отображаемого окна h1
    // 3 Вычислить высоту от вверха документа до вверхней границы блока t,h2
    var coordinatsSHAPE = SHAPE.getBoundingClientRect();
    console.log('Вычисляем координаты блока', coordinatsSHAPE)
    // 4 Вычислить центр отображаемого окна относительно всего документа c
    // 5 Вычислить рассотояние скроллинга
    // 6 Если граница блока и низа отобржаемого окна совпадают, начать изменение блока в + иначе в -


})