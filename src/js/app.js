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

// let array = [
// 	0.00,
// 	0.01,
// 	0.02,
// 	0.03,
// 	0.04,
// 	0.05,
// 	0.06,
// 	0.07,
// 	0.08,
// 	0.09,
// 	0.10,
// 	0.11,
// 	0.12,
// 	0.13,
// 	0.14,
// 	0.15,
// 	0.16,
// 	0.17,
// 	0.18,
// 	0.19,
// 	0.20,
// 	0.21,
// 	0.22,
// 	0.23,
// 	0.24,
// 	0.25,
// 	0.26,
// 	0.27,
// 	0.28,
// 	0.29,
// 	0.30,
// 	0.31,
// 	0.32,
// 	0.33,
// 	0.34,
// 	0.35,
// 	0.36,
// 	0.37,
// 	0.38,
// 	0.39,
// 	0.40,
// 	0.41,
// 	0.42,
// 	0.43,
// 	0.44,
// 	0.45,
// 	0.46,
// 	0.47,
// 	0.48,
// 	0.49,
// 	0.50,
// 	0.51,
// 	0.52,
// 	0.53,
// 	0.54,
// 	0.55,
// 	0.56,
// 	0.57,
// 	0.58,
// 	0.59,
// 	0.60,
// 	0.61,
// 	0.62,
// 	0.63,
// 	0.64,
// 	0.65,
// 	0.66,
// 	0.67,
// 	0.68,
// 	0.69,
// 	0.70,
// 	0.71,
// 	0.72,
// 	0.73,
// 	0.74,
// 	0.75,
// 	0.76,
// 	0.77,
// 	0.78,
// 	0.79,
// 	0.80,
// 	0.81,
// 	0.82,
// 	0.83,
// 	0.84,
// 	0.85,
// 	0.86,
// 	0.87,
// 	0.88,
// 	0.89,
// 	0.90,
// 	0.91,
// 	0.92,
// 	0.93,
// 	0.94,
// 	0.95,
// 	0.96,
// 	0.97,
// 	0.98,
// 	0.99,
// 	1.00
// ]

(($) => {
	// When DOM is ready
	$(() => {
		//const accordions = new Accordion();
		scrollSmooth.init();
		menuBurger.init();
		swiperMain.init();

		$(function() {
      		$('.intro-section__texts-inner .animaH2').each(function(i) {
				for(let z=0; z<100; z++) {
					$(this).delay((i++) * 1000).fadeTo(1000, 1).fadeTo(1000,0);
				}
			})
      		$('.intro-section__texts-inner .anima').each(function(i) {
				for(let z=0; z<100; z++) {
					$(this).delay((i++) * 2000).fadeTo(1000, 1).fadeTo(1000,0);
				}
			})
		});
	});
})(jQuery);

const BODY = document.querySelector("body");

const SHAPE = document.getElementById('mainFormShape');

const active = 'active';
// const overlay = 'overlay';
const overlay = document.querySelector('.overlay');
const menuBtn = document.getElementById('menuBtn');
const popupCall = document.getElementById('popupCall__mainID');
const btnClosePopupCall = document.getElementById('popupCallBtnCloseID');
const tarifWrapper = document.querySelectorAll('.prices-section__tarif-wrapper');
const tarifTitle = document.querySelector('.prices-section__title');

// let coordinatsSHAPE = SHAPE.getBoundingClientRect();

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

let targetStepWorking = document.getElementById("stepsWorkingSectionWrapper1");

targetStepWorking.addEventListener('wheel', event => {
	const toLeft  = event.deltaY < 0 && targetStepWorking.scrollLeft > 0
	const toRight = event.deltaY > 0 && targetStepWorking.scrollLeft < targetStepWorking.scrollWidth - targetStepWorking.clientWidth

	let diff = targetStepWorking.scrollWidth / 2 + 20;
	console.log(diff, ' diff')

	if (toLeft || toRight) {
	  event.preventDefault()
	  targetStepWorking.scrollLeft += event.deltaY
	  console.log('условия первое')
	}

	if (targetStepWorking.scrollLeft >= diff || (targetStepWorking.scrollLeft <= (diff - diff) && event.deltaY < 0)) {
		console.log('условия второе')
		BODY.classList.remove("stop-scroll");
	}

	// console.log('event.deltaY ', event.deltaY)
	// console.log('targetStepWorking.scrollLeft ', targetStepWorking.scrollLeft)
	// console.log('targetStepWorking.scrollWidth ',  targetStepWorking.scrollWidth)
});

const blockWrapperSteps = document.querySelector('.stepsWorking-section__wrapper1');
const blocksStepsWorking = document.querySelectorAll('.stepsWorking-section__step-block');

const blockContacts =  document.querySelector('#contacts');

let lastBlockInner = blocksStepsWorking[blocksStepsWorking.length - 1];

(function Function__lastBlockInnerID() {
	lastBlockInner.setAttribute('id', 'stepsWorkingLastBlock')
})();
const lastBlockInnerID =  document.querySelector('#stepsWorkingLastBlock');


let optionsOuter = {
    root: null,
    rootMargin: "0% 0px 0% 0px",
    threshold: 1,
};
let optionsList = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};

let optionsSHAPE = {
    root: null,
    rootMargin: "0%",
    threshold: buildThresholdList()
};

const numSteps = 100.0;
let boxElement;
let prevRatio = 0.0;

console.log(optionsSHAPE.threshold)

function buildThresholdList() {
	let thresholds = [];
	let numSteps = 100;

	for (let i=0; i<=numSteps; ++i) {
	  let ratio = i/numSteps;
	  thresholds.push(ratio);
	}
	return thresholds;
}

// функция обратного вызова
let callbackOuter = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log("пересек");
            BODY.classList.add("stop-scroll");
		}
	});
};

let callbackList = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log("пересек последний");
            BODY.classList.remove("stop-scroll");
        }
    });
};

let i = 0;
let y = 0;

let callbackSHAPE = function (entries, observer) {
	entries.forEach((entry) => {
		console.log(i, 'i')
		y = (entry.intersectionRatio * i++) + '%';
		console.log(y, 'ратио')

		if (entry.intersectionRatio > prevRatio) {
			entry.target.style.borderRadius = `${y} ${y} 0 0`;
			console.log('border-radius ', entry.target.style.borderRadius)
		}

		prevRatio = entry.intersectionRatio;
	});
};

let observerOuter = new IntersectionObserver(callbackOuter, optionsOuter);
let observerList = new IntersectionObserver(callbackList, optionsList);
let observerSHAPE = new IntersectionObserver(callbackSHAPE, optionsSHAPE);

observerOuter.observe(blockWrapperSteps);
observerList.observe(lastBlockInnerID);
observerSHAPE.observe(blockContacts);


