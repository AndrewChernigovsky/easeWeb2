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

let coordinatsSHAPE = SHAPE.getBoundingClientRect();

window.addEventListener('scroll', function(){

    // 1 Вычислить всю высоту документа h
    let screenHeight = document.body.scrollHeight
    console.log('Высота всего документа h', Math.floor(screenHeight, 1) + ' px')

    // 2 Вычислить всю высоту отображаемого окна h1
    let windowInnerWidth = document.documentElement.clientWidth
    let windowInnerHeight = document.documentElement.clientHeight

    console.log('высота отображаемого окна h1', Math.floor(windowInnerHeight, 1) + ' px')

    // 3 Вычислить высоту от вверха документа до вверхней границы блока t,h2
    console.log('Вычисляем координаты блока', coordinatsSHAPE)

    // 4 Вычислить центр отображаемого окна относительно всего документа c
    let scrolltop1 = document.body.scrollTop + windowInnerHeight + scrollY;
    let centerScreen = (scrolltop1 + scrollY) / 2;
    console.log('Вычисляем центр:' + Math.floor(centerScreen, 1) + ' px');

    // 5 Вычислить рассотояние скроллинга
    console.log('Вычисляем рассотояние скроллинга ' + Math.floor(scrollY, 1) + ' px');

    // 6 Вычисляем расстояние низа отображаемого документа до верхней границы блока
    let scrolltop = document.body.scrollTop + windowInnerHeight + scrollY;
    console.log('нижняя граница отображаемого окна:' + Math.floor(scrolltop, 1) + ' px');

    // 7 Вычисляем расстояние от верха всего документа до верхней границы блока
    let offsetTop = screenHeight - scrollY - coordinatsSHAPE.bottom + coordinatsSHAPE.height;
    console.log('расстояние от верха всего документа до верхней границы блока:' + Math.floor(offsetTop, 1) + ' px');

    // 8 Координата вверха блока
    let topSHAPE = coordinatsSHAPE.top
    console.log('верхняя граница блока:' + Math.floor(topSHAPE, 1) + ' px');

    // 9 Если граница блока и низа отобржаемого окна совпадают, начать изменение блока в + иначе в -
    if(scrolltop >= topSHAPE) {

      let s = Math.floor(scrollY, 0);

      let x = s - 100 + '%';
      let x1 = ((s+100) - s) + '%';
      console.log(x)
      if(x > 100){
        x = 0;
      }

      if(topSHAPE >= centerScreen) {
        SHAPE.style.borderRadius = `${x} ${x} 0% 0%`;
      } else {
        SHAPE.style.borderRadius = `${x1} ${x1} 0% 0%`;
      }

      // let y = (SHAPE.style.borderRadius = `100% 100% 0% 0%`);
      let y = (SHAPE.style.borderRadius = `${x} ${x} 0% 0%`);
      SHAPE.style.borderRadius = `${x} ${x} 0% 0%`;
      console.log('centerrrr');
      // console.log('бордер-радиус', y);
      console.log('loggg')
    }
})
const active = 'active';
// const overlay = 'overlay';
const overlay = document.querySelector('.overlay');
const menuBtn = document.getElementById('menuBtn');
const popupCall = document.getElementById('popupCall__mainID');
const btnClosePopupCall = document.getElementById('popupCallBtnCloseID');

menuBtn.addEventListener('click', ()=> {
    if(popupCall.classList.contains(active)) {
        popupCall.classList.remove(active)
        overlay.classList.remove(active)

    } else {
        popupCall.classList.add(active)
        overlay.classList.add(active)
    }
})

overlay.addEventListener('click', ()=> {
    if(overlay.classList.contains(active)) {
        overlay.classList.remove(active)
        popupCall.classList.remove(active)
    }
})

btnClosePopupCall.addEventListener('click', ()=> {
    if(popupCall.classList.contains(active)) {
        overlay.classList.remove(active)
        popupCall.classList.remove(active)
    }
})