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

const overlay = document.querySelector('.overlay');
const BODY = document.querySelector('body');

(($) => {
	// When DOM is ready
	$(() => {
		//const accordions = new Accordion();
		scrollSmooth.init();
		menuBurger.init();
		swiperMain.init();

		$('.intro-section__title .animaH2').each(function (i) {
			for (let z = 0; z < 1000; z++) {
				$(this)
					.delay(i++ * 2000)
					.fadeTo(1000, 1)
					.fadeTo(1000, 0);
			}
		})
		$('.intro-section__texts-inner .anima').each(function (i) {
			for (let z = 0; z < 1000; z++) {
				$(this)
					.delay(i++ * 2000)
					.fadeTo(1000, 1)
					.fadeTo(1000, 0);
			}
		})
		$('.intro-section__image-wrapper .anima').each(function (i) {
			for (let z = 0; z < 1000; z++) {
				$(this)
				.delay(0).animate({
					top: '50px'
				}, 5000).animate({
					top: '-50px'
				}, 5000)
			}
		})
		$('.circles-section__circle-text-wrapper .anima').each(function (i) {
			for (let z = 0; z < 1000; z++) {
				$(this)
				.delay(i++ * 2000)
				.fadeTo(0, 0)
				.fadeTo(1000, 1)
				.fadeTo(1000, 0);
			}
		})
		$('.circles-section__circle-text-wrapper .anima1').each(function (i) {
			for (let z = 0; z < 1000; z++) {
				$(this)
				.delay(i++ * 2000)
				.fadeTo(0, 0)
				.fadeTo(1000, 1)
				.fadeTo(1000, 0);
			}
		})
	});
})(jQuery);

let windowWidth = window.innerWidth;
let windowWidthClient = window.clientWidth;

const SHAPE = document.getElementById('mainFormShape');
const active = 'active';
const menuBtn = document.getElementById('menuBtn');
const popupCall = document.getElementById('popupCall__mainID');
const btnClosePopupCall = document.getElementById('popupCallBtnCloseID');
const tarifWrapper = document.querySelectorAll('.prices-section__tarif-wrapper');
const NAV = document.querySelector('.js-burger');
const BURGER = document.querySelector('.burger');
const blockWrapperSteps = document.querySelector('.stepsWorking-section__wrapper1');
const blocksStepsWorking = document.querySelectorAll('.stepsWorking-section__step-block');
const blockContacts = document.querySelector('#contacts');
let lastBlockInner = blocksStepsWorking[blocksStepsWorking.length - 1];
const lastBlockInnerID = document.querySelector('#stepsWorkingLastBlock');
const integrationBlock = document.querySelector('#integration');
const integrationTitles = document.querySelectorAll('.integration-section__title');
const contactsLink = document.querySelector('#contactsLink');
const integrationInner = document.querySelector('.integration-section__inner');

const getCall = document.querySelector(".PopupCall button[type='submit']");
const politeCheckbox = document.querySelector(".PopupCall input[type='checkbox']")


document.addEventListener('DOMContentLoaded', () => {
	menuBtn.addEventListener('click', () => {
		btnClosePopupCall.addEventListener('click', () => {
			if (popupCall.classList.contains(active)) {
				popupCall.classList.remove(active);
				overlay.classList.remove(active);
				popupCall.classList.remove(active);
				NAV.classList.remove(active);
				BURGER.classList.remove(active);
				BODY.style.overflow = 'auto';
				BODY.style.width = `${windowWidth}` + 'px'
			} else {
				BURGER.classList.remove(active);
				BODY.style.width = `${windowWidth}` + 'px'
			}
		});
		if (popupCall.classList.contains(active)) {
			popupCall.classList.remove(active);
			BODY.style.overflow = 'auto';
			overlay.classList.remove(active)

		} else {
			popupCall.classList.add(active);
			BODY.style.overflow = 'hidden';
			overlay.classList.add(active)
			BODY.style.width = `${windowWidth}` + 'px'
		}
	});

	overlay.addEventListener('click', () => {
		if (overlay.classList.contains(active)) {
			overlay.classList.remove(active);
			popupCall.classList.remove(active);
			BODY.style.overflow = 'auto';
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

	contactsLink.addEventListener('click', () => {
		if(BODY.classList.contains('stop-scroll')) {
			BODY.classList.remove('stop-scroll');
		}
	})

	politeCheckbox.addEventListener('click', (e)=> {

		if(politeCheckbox.hasAttribute('checked', 'checked')) {
			politeCheckbox.removeAttribute('checked')
			getCall.setAttribute('disabled', 'disabled')
		} else {
			politeCheckbox.setAttribute('checked', 'checked')
			getCall.removeAttribute('disabled')
		}
	}

	)
});

let targetStepWorking = document.getElementById('stepsWorkingSectionWrapper1');

if (targetStepWorking) {
	targetStepWorking.addEventListener('wheel', (event) => {
		const toLeft = event.deltaY < 0 && targetStepWorking.scrollLeft > 0;
		const toRight = event.deltaY > 0 && targetStepWorking.scrollLeft < targetStepWorking.scrollWidth - targetStepWorking.clientWidth;
		let diff = targetStepWorking.scrollWidth / 2 + 20;

		if (toLeft || toRight) {
			event.preventDefault();
			targetStepWorking.scrollLeft += event.deltaY;
		}

		if (targetStepWorking.scrollLeft >= diff || (targetStepWorking.scrollLeft <= diff - diff && event.deltaY < 0)) {
			BODY.classList.remove('stop-scroll');
		}
	});

	(function Function__lastBlockInnerID() {
		lastBlockInner.setAttribute('id', 'stepsWorkingLastBlock');
	})();
}

let optionsOuter = {
	root: null,
	rootMargin: '-10% 0px 0% 0px',
	threshold: 1,
};
let optionsList = {
	root: null,
	rootMargin: '0px',
	threshold: 0.8,
};
let optionsSHAPE = {
	root: null,
	rootMargin: '0px 0px -50% 0px',
	threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
};
let optionsIntegration = {
	root: null,
	rootMargin: '0% 0%',
	threshold: 1,
};
let optionsContacts = {
	root: null,
	rootMargin: '0%',
	threshold: 1,
};

let callbackOuter = function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			BODY.classList.add('stop-scroll');
			BODY.style.width = `${windowWidth}` + 'px'
		}
	});
};
let callbackList = function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			BODY.classList.remove('stop-scroll');
			BODY.style.width = `${windowWidthClient}` + 'px'
		}
	});
};
let callbackIntegration = function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			integrationTitles.forEach((e) => {
				if (e.classList.contains(active)) {
					e.classList.remove(active);
					integrationInner.classList.remove(active);
					observerIntegration.unobserve(integrationBlock);

				} else {
					e.classList.add(active);
					integrationInner.classList.add(active);
					observerIntegration.unobserve(integrationBlock);
				}
			});
		}
	});
};
let callbackContacts = function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			BODY.classList.remove('stop-scroll');
		}
	});
};
let callbackSHAPE = function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			let ratio = entry.intersectionRatio;

			if (ratio < 0.9) {
				SHAPE.style.borderRadius = `
            ${100 - ratio * 100}%
            ${100 - ratio * 100}%
            0 0`;
			} else {
				ratio = 1;
				SHAPE.style.borderRadius = `
            ${100 - ratio * 100}%
            ${100 - ratio * 100}%
            0 0`;
			}
		}
	});
};

let observerOuter = new IntersectionObserver(callbackOuter, optionsOuter);
let observerList = new IntersectionObserver(callbackList, optionsList);
let observerSHAPE = new IntersectionObserver(callbackSHAPE, optionsSHAPE);
let observerIntegration = new IntersectionObserver(callbackIntegration, optionsIntegration);
let observerContacts = new IntersectionObserver(callbackContacts, optionsContacts);

if (blockWrapperSteps) {
	observerOuter.observe(blockWrapperSteps);
}
if (lastBlockInnerID) {
	observerList.observe(lastBlockInnerID);
}
if (integrationBlock) {
	observerIntegration.observe(integrationBlock)
}
if (blockContacts) {
	observerContacts.observe(blockContacts);
}
if (SHAPE) {
	if (observerSHAPE.observe(SHAPE)) {
		SHAPE.unobserve();
	}
}

const variant = document.querySelector('.variantSection-wrapper .stepsWorking-section__wrapper');
const variant1 = document.querySelector('.variantSection-wrapper');
const introSectionWrapper = document.querySelector('.intro-section__wrapper')

if(variant) {
	let el0 = variant.getBoundingClientRect();
	let el1 = introSectionWrapper.getBoundingClientRect();
	const screenWidth = window.screen.width

	function foo() {
		let el0 = variant.getBoundingClientRect();
		let el1 = introSectionWrapper.getBoundingClientRect();
		let x = el1.left + 'px';
		variant1.style.marginLeft = `${x}`;
	}

	foo()
	window.addEventListener('resize' , ()=> {
		foo();
	})
}