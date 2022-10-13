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

let coordinatsSHAPE = SHAPE.getBoundingClientRect();

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

	if (toLeft || toRight) {
	  event.preventDefault()
	  targetStepWorking.scrollLeft += event.deltaY
	}
});

const blockWrapperSteps = document.querySelector('.stepsWorking-section__wrapper1');
const blocksStepsWorking = document.querySelectorAll('.stepsWorking-section__step-block');

let lastBlockInner = blocksStepsWorking[blocksStepsWorking.length - 1];

(function Function__lastBlockInnerID() {
	lastBlockInner.setAttribute('id', 'stepsWorkingLastBlock')
})();

let lastBlockInnerID =  document.querySelector('#stepsWorkingLastBlock');

let optionsOuter = {
    root: null,
    rootMargin: "0px 0px -20% 0px",
    threshold: 1,
};
let optionsList = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};

let optionsSHAPE = {
    root: null,
    rootMargin: "-10% 0px -40% 0px",
    threshold: buildThresholdList()
};

const numSteps = 100.0;
let boxElement;
let prevRatio = 0.0;

function buildThresholdList() {
	let thresholds = [];
	let numSteps = 100;

	for (let i=0.1; i<=numSteps; i++) {
	  let ratio = i/numSteps;
	  thresholds.push(ratio);
	}

	thresholds.push(0);
	return thresholds;
}

// функция обратного вызова
let callbackOuter = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("пересек");
            BODY.classList.add("stop-scroll");
		}
	});
};

let callbackList = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("пересек последний");
            BODY.classList.remove("stop-scroll");
        }
    });
};

let callbackSHAPE = function (entries, observer) {
	entries.forEach((entry) => {
		let i = 100;
		console.log(i--)
		let y = entry.intersectionRatio * 100 + '%';
		let y1 = (entry.intersectionRatio * i--) + '%';
		console.log(y1, '123123132 6666666666666')

		if (entry.intersectionRatio > prevRatio) {
			entry.target.style.borderRadius = `${y1} ${y1} 0 0`;
			console.log(entry.intersectionRatio, '123123222')
			console.log(entry.target.style.borderRadius)
		}
		// if (entry.intersectionRatio < prevRatio) {
		// 	entry.target.style.borderRadius = `'${y} ${y} 0 0`;
		// 	console.log(entry.intersectionRatio, '123123222')
		// 	console.log(entry.target.style.borderRadius)
		// } else {
		//   	entry.target.style.borderRadius = `${y1} ${y1} 0 0`;
		// }

		prevRatio = entry.intersectionRatio;
	});
};

let observerOuter = new IntersectionObserver(callbackOuter, optionsOuter);
let observerList = new IntersectionObserver(callbackList, optionsList);
let observerSHAPE = new IntersectionObserver(callbackSHAPE, optionsSHAPE);

observerOuter.observe(blockWrapperSteps);
observerList.observe(lastBlockInnerID);
observerSHAPE.observe(SHAPE);
