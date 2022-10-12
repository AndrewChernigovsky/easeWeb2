// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

//import Accordion from './components/accordion';
import menuBurger from './components/burger-menu';
import scrollSmooth from './components/scroll-smooth';
import swiperMain from './components/sliders/swiperMain';
// import shapeResize from './components/animations/shapeResize';
// import initSelects from './components/select';
// import bntOFFER from './components/btnOffer';

(($) => {
	// When DOM is ready
	$(() => {
		//const accordions = new Accordion();
		scrollSmooth.init();
		menuBurger.init();
		swiperMain.init();

		$(function() {
      		$('.intro-section__texts-inner h2').each(function(i) {
				for(let z=0; z<100; z++) {
					$(this).delay((i++) * 2000).fadeTo(1000, 1).fadeTo(1000,0);
				}
			})
		});
	});
})(jQuery);

const SHAPE = document.getElementById('mainFormShape');



const active = 'active';
// const overlay = 'overlay';
const overlay = document.querySelector('.overlay');
const menuBtn = document.getElementById('menuBtn');
const popupCall = document.getElementById('popupCall__mainID');
const btnClosePopupCall = document.getElementById('popupCallBtnCloseID');
const tarifWrapper = document.querySelectorAll('.prices-section__tarif-wrapper');
const tarifTitle = document.querySelector('.prices-section__title');

let coordinatsSHAPE = SHAPE.getBoundingClientRect();


// window.addEventListener('scroll', function () {
// 	// 1 Вычислить всю высоту документа h
// 	let screenHeight = document.body.scrollHeight;
// 	console.log('Высота всего документа h', Math.floor(screenHeight, 1) + ' px');

// 	// 2 Вычислить всю высоту отображаемого окна h1
// 	let windowInnerWidth = document.documentElement.clientWidth;
// 	let windowInnerHeight = document.documentElement.clientHeight;

// 	console.log('высота отображаемого окна h1', Math.floor(windowInnerHeight, 1) + ' px');

// 	// 3 Вычислить высоту от вверха документа до вверхней границы блока t,h2
// 	console.log('Вычисляем координаты блока', coordinatsSHAPE);

// 	// 4 Вычислить центр отображаемого окна относительно всего документа c
// 	let scrolltop1 = document.body.scrollTop + windowInnerHeight + scrollY;
// 	let centerScreen = (scrolltop1 + scrollY) / 2;
// 	console.log('Вычисляем центр:' + Math.floor(centerScreen, 1) + ' px');

// 	// 5 Вычислить рассотояние скроллинга
// 	console.log('Вычисляем рассотояние скроллинга ' + Math.floor(scrollY, 1) + ' px');

// 	// 6 Вычисляем расстояние низа отображаемого документа до верхней границы блока
// 	let scrolltop = document.body.scrollTop + windowInnerHeight + scrollY;
// 	console.log('нижняя граница отображаемого окна:' + Math.floor(scrolltop, 1) + ' px');

// 	// 7 Вычисляем расстояние от верха всего документа до верхней границы блока
// 	let offsetTop = screenHeight - scrollY - coordinatsSHAPE.bottom + coordinatsSHAPE.height;
// 	console.log('расстояние от верха всего документа до верхней границы блока:' + Math.floor(offsetTop, 1) + ' px');

// 	// 8 Координата вверха блока
// 	let topSHAPE = coordinatsSHAPE.top;
// 	console.log('верхняя граница блока:' + Math.floor(topSHAPE, 1) + ' px');

// 	// 9 Если граница блока и низа отобржаемого окна совпадают, начать изменение блока в + иначе в -
// 	if (scrolltop >= topSHAPE) {
// 		let s = (Math.floor(scrollY, 0) - 1500);
// 		console.log(s);
// 		let x = Math.floor(s / 100) + 80 + '%';
// 		console.log(x);

// 		if (topSHAPE >= centerScreen) {
// 			SHAPE.style.borderRadius = `${x} ${x} 0% 0%`;
// 		} else {
// 			SHAPE.style.borderRadius = `${x1} ${x1} 0% 0%`;
// 		}

// 		// let y = (SHAPE.style.borderRadius = `100% 100% 0% 0%`);
// 		let y = (SHAPE.style.borderRadius = `${x} ${x} 0% 0%`);
// 		SHAPE.style.borderRadius = `${x} ${x} 0% 0%`;
// 		console.log('centerrrr');
// 		console.log('бордер-радиус', y);
// 		console.log('loggg');
// 	}
// });

const stepsWorking = document.getElementById('stepsWorking-sectionID');
const stepsWorkingSlide1 = document.querySelector('.stepsWorking-section__wrapper1')
let coordinatsstepsWorking = stepsWorking.getBoundingClientRect();
let coordinatsstepsWorkingSlide1 = stepsWorkingSlide1.getBoundingClientRect();

let scrollWidthAll = Math.max(
	stepsWorking.scrollWidth, stepsWorking.scrollWidth,
	stepsWorking.offsetWidth, stepsWorking.offsetWidth,
	stepsWorking.clientWidth, stepsWorking.clientWidth
)

window.addEventListener('scroll', function () {
	let windowInnerHeight = document.documentElement.clientHeight;
	console.log('Отображаемая область', windowInnerHeight)

	let screenHeight = document.body.scrollHeight;
	console.log('Высота всего документа h', Math.floor(screenHeight, 1) + ' px');

	console.log('Вычисляем координаты блока', coordinatsstepsWorking);

	console.log('Вычисляем координаты слайда', coordinatsstepsWorkingSlide1);

	let scrolltop = document.body.scrollTop + windowInnerHeight + scrollY;
	console.log('нижняя граница отображаемого окна:' + Math.floor(scrolltop, 1) + ' px');

	let topstepsWorking = coordinatsstepsWorking.top;
	let widthstepsWorking = coordinatsstepsWorking.width;
	let widthstepsWorkingSlide = coordinatsstepsWorkingSlide1.width;

	console.log('верхняя граница блока:' + Math.floor(topstepsWorking, 1) + ' px');

	console.log('Вычисляем рассотояние скроллинга ' + Math.floor(scrollY, 1) + ' px');

	console.log('Вычисляем ширину всего блока ' + Math.floor(widthstepsWorking, 1) + ' px');
	console.log('Вычисляем ширину всего слайда ' + Math.floor(widthstepsWorkingSlide, 1) + ' px');
	console.log('Вычисляем всю ширину ' + Math.floor(widthstepsWorkingSlide * 2, 1) + ' px');

	if (scrolltop >= topstepsWorking) {
		widthstepsWorking.style.width = widthstepsWorkingSlide * 2
	}

	stepsWorking.addEventListener('scroll',()=> {
		console.log('Вычисляем ширину всего блока ' + Math.floor(coordinatsstepsWorking.width, 1) + ' px');

	})
});

document.addEventListener('DOMContentLoaded', () => {
	menuBtn.addEventListener('click', () => {
		if (popupCall.classList.contains(active)) {
			popupCall.classList.remove(active);
			overlay.classList.remove(active);
		} else {
			popupCall.classList.add(active);
			overlay.classList.add(active);
		}
	});

	overlay.addEventListener('click', () => {
		if (overlay.classList.contains(active)) {
			overlay.classList.remove(active);
			popupCall.classList.remove(active);
		}
	});

	btnClosePopupCall.addEventListener('click', () => {
		if (popupCall.classList.contains(active)) {
			overlay.classList.remove(active);
			popupCall.classList.remove(active);
		}
	});

	tarifWrapper.forEach((e) => {
		e.addEventListener('click', () => {
			if (e.classList.contains('active')) {
				e.classList.remove('active');
				e.firstElementChild.classList.remove('active');
			} else {
				e.classList.add('active');
				e.firstElementChild.classList.add('active');
			}
		});
	});
});

