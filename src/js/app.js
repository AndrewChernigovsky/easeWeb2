import menuBurger from './components/burger-menu';
import scrollSmooth from './components/scroll-smooth';
import inputmask from './components/inputMask';

const overlay = document.querySelector('.overlay');
const BODY = document.querySelector('body');

(($) => {
	$(() => {
		scrollSmooth.init();
		menuBurger.init();

		$('.intro-section__texts-inner .anima').each(function (i) {
			for (let z = 0; z < 1000; z++) {
				$(this)
					.delay(i++ * 2000)
					.fadeTo(1000, 1)
					.fadeTo(1000, 0);
			}
		});

		$('.intro-section__image-wrapper .anima').each(function (i) {
			for (let z = 0; z < 1000; z++) {
				$(this)
					.delay(0)
					.animate(
						{
							top: '10px',
						},
						1000
					)
					.animate(
						{
							top: '-10px',
						},
						1000
					);
			}
		});

		inputmask();

	});
})(jQuery);

let windowWidth = window.innerWidth;
let windowWidthClient = window.clientWidth;

const SHAPE = document.getElementById('mainFormShape');
const active = 'active';
const menuBtn = document.querySelectorAll('.menuButton');

const popupCall = document.getElementById('popupCall__mainID');
const btnClosePopupCall = document.getElementById('popupCallBtnCloseID');
const tarifWrapper = document.querySelectorAll('.prices-section__tarif');
const NAV = document.querySelector('.js-burger');
const BURGER = document.querySelector('.burger');
const blockWrapperSteps = document.querySelector('.stepsWorking-section__wrapper1');
const blockContacts = document.querySelector('#contacts');
const lastBlockInnerID = document.querySelector('#stepsWorkingLastBlock');
const contactsLink = document.querySelector('#contactsLink');

const getCall = document.querySelector(".PopupCall button[type='submit']");
const politeCheckbox = document.querySelector(".PopupCall input[type='checkbox']");

const titlesAnima = document.querySelectorAll('.titleIntro-anima .animaH2');

document.addEventListener('DOMContentLoaded', () => {
	menuBtn.forEach(e=>{
		e.addEventListener('click', () => {
			btnClosePopupCall.addEventListener('click', () => {
				if (popupCall.classList.contains(active)) {
					popupCall.classList.remove(active);
					overlay.classList.remove(active);
					NAV.classList.remove(active);
					BURGER.classList.remove(active);
					BODY.style.overflow = 'auto';
					BODY.style.width = `${windowWidth}` + 'px';
				} else {
					BURGER.classList.remove(active);
					BODY.style.overflow = 'auto';
					BODY.style.width = `${windowWidth}` + 'px';
				}
			});
			if (popupCall.classList.contains(active)) {
				popupCall.classList.remove(active);
				BODY.style.overflow = 'auto';
				overlay.classList.remove(active);
			} else {
				popupCall.classList.add(active);
				BODY.style.overflow = 'hidden';
				overlay.classList.add(active);
				BODY.style.width = `${windowWidth}` + 'px';
			}

			overlay.addEventListener('click', () => {
				if (overlay.classList.contains(active)) {
					overlay.classList.remove(active);
					popupCall.classList.remove(active);
					BODY.style.overflow = 'auto';
				}
			});

			contactsLink.addEventListener('click', () => {
				if (BODY.classList.contains('stop-scroll')) {
					BODY.classList.remove('stop-scroll');
				}
			});
		});
	})

	tarifWrapper.forEach((e) => {
		e.addEventListener('click', () => {
			e.classList.toggle('active');
		});
	});

});

let targetStepWorking = document.getElementById('stepsWorkingSectionWrapper1');

let foo111 = function (event) {
	const toLeft = event.deltaY < 0 && targetStepWorking.scrollLeft > 0;
	const toRight = event.deltaY > 0 && targetStepWorking.scrollLeft < targetStepWorking.scrollWidth - targetStepWorking.clientWidth;
	let diff = targetStepWorking.scrollWidth / 2 + 20;

	if (toLeft || toRight) {
		event.preventDefault();
		targetStepWorking.scrollLeft += event.deltaY;
	}

	if (targetStepWorking.scrollLeft >= diff || (targetStepWorking.scrollLeft <= diff - diff && event.deltaY < 0)) {
		BODY.classList.remove('stop-scroll');
		// targetStepWorking.removeEventListener('wheel', foo111)
	}
	
};

if (targetStepWorking && windowWidth >= 1024) {
	targetStepWorking.addEventListener('wheel', foo111)
}



let optionsOuter = {
	root: null,
	rootMargin: '0% 0px 0% 0px',
	threshold: 1,
};
let optionsList = {
	root: null,
	rootMargin: '50px',
	threshold: 0.5,
};

let optionsSHAPE = {
	root: null,
	rootMargin: '0px 0px -50% 0px',
	threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
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

			window.addEventListener('resize', () => {
				let windowWidth = window.innerWidth;

				if (windowWidth <= 1024) {
					observer.unobserve(entry.target);
					return;
				}
			});
		}
	});
};
let callbackList = function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			BODY.classList.remove('stop-scroll');
			console.log("пересек последний");
			// BODY.style.width = `${windowWidthClient}` + 'px';
			observer.unobserve(lastBlockInnerID);
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
let observerContacts = new IntersectionObserver(callbackContacts, optionsContacts);

// window.addEventListener('resize', ()=> {
// 	BODY.style.width = `${windowWidthClient}` + 'px';
// })

if (blockWrapperSteps && window.innerWidth >= 1024) {
	observerOuter.observe(blockWrapperSteps);
	// alert('yes');
}

// if (lastBlockInnerID) {
// 	observerList.observe(lastBlockInnerID);
// }

if (blockContacts) {
	observerContacts.observe(blockContacts);
}
if (SHAPE) {
	observerSHAPE.observe(SHAPE);
}

const variant = document.querySelector('.variantSection-wrapper .stepsWorking-section__wrapper');
const variant1 = document.querySelector('.variantSection-wrapper');
const introSectionWrapper = document.querySelector('.intro-section__wrapper');

if (variant  && windowWidth >= 1024) {
	let el0 = variant.getBoundingClientRect();
	let el1 = introSectionWrapper.getBoundingClientRect();
	const screenWidth = window.screen.width;

	function foo() {
		let el0 = variant.getBoundingClientRect();
		let el1 = introSectionWrapper.getBoundingClientRect();
		let x = el1.left + 'px';
		variant1.style.marginLeft = `${x}`;
	}

	foo();
	window.addEventListener('resize', () => {
		foo();
	});
}


let jsForm = document.querySelector('.js-form');
let jsformButton = document.querySelector('.js-form button[type="submit"]');
let jsForm1 = document.querySelector('.js-form1');
let jsformButton1 = document.querySelector('.js-form1 button[type="submit"]');
let jsForm2 = document.querySelector('.js-form2');
let jsFormPopup = document.querySelector('.js-formPopup');
let jsformButton2 = document.querySelector('.js-form2 button[type="submit"]');

const phoneInput = document.querySelector('.js-form input[data-mask="tel"]');
const phoneInput1 = document.querySelector('.js-form1 input[data-mask="tel"]');
const phoneInput2 = document.querySelector('.js-form2 input[data-mask="tel"]');
const phoneInput3 = document.querySelector('.js-formPopup input[data-mask="tel"]');

const nameInput = document.querySelector('.js-form input[name="username"]');
const nameInput1 = document.querySelector('.js-form1 input[name="username"]');
const nameInput2 = document.querySelector('.js-form2 input[name="username"]');
const nameInput3 = document.querySelector('.js-formPopup input[name="username"]');


if (phoneInput){
	phoneInput.addEventListener('input', updateValuePhone);
	phoneInput.addEventListener('blur', updateValueblur);
}
if (phoneInput1){
	phoneInput1.addEventListener('input', updateValuePhone1);
	phoneInput1.addEventListener('blur', updateValueblur1);
}
if (phoneInput2){
	phoneInput2.addEventListener('input', updateValuePhone2);
	phoneInput2.addEventListener('blur', updateValueblur2);
}

if (nameInput){
	nameInput.addEventListener('input', updateValueName);
	nameInput.addEventListener('blur', updateValueblur);
}

if (nameInput1){
	nameInput1.addEventListener('input', updateValueName1);
	nameInput1.addEventListener('blur', updateValueblur1);
}
if (nameInput2){
	nameInput2.addEventListener('input', updateValueName2);
	nameInput2.addEventListener('blur', updateValueblur2);
}

// function updateValuePhone1(e) {

// 	let valuePhone = e.target.value;
// 	let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// 	let p = document.createElement('p');

// 	if(!valuePhone.match(re) === true) {
// 		// jsformButton1.setAttribute('disabled', 'disabled')

// 		if(e.target.classList.contains('valid')){
// 			e.target.classList.remove('valid');
// 		}

// 		if(e.target.classList.contains('invalid')){
// 			e.target.classList.remove('invalid');
// 		}
// 	} else {
// 		// jsformButton1.removeAttribute('disabled', ' ')
// 		e.target.classList.remove('invalid');
// 		e.target.classList.add('valid');
// 	}
// }
// function updateValuePhone2(e) {

// 	let valuePhone = e.target.value;
// 	let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// 	let p = document.createElement('p');

// 	if(!valuePhone.match(re) === true) {
// 		jsformButton2.setAttribute('disabled', 'disabled')

// 		if(e.target.classList.contains('valid')){
// 			e.target.classList.remove('valid');
// 		}

// 		if(e.target.classList.contains('invalid')){
// 			e.target.classList.remove('invalid');
// 		}
// 	} else {
// 		jsformButton2.removeAttribute('disabled', ' ')
// 		e.target.classList.remove('invalid');
// 		e.target.classList.add('valid');
// 	}
// }
// function updateValuePhone(e) {

// 	let valuePhone = e.target.value;
// 	let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// 	let p = document.createElement('p');

// 	if(!valuePhone.match(re) === true) {
// 		jsformButton.setAttribute('disabled', 'disabled')

// 		if(e.target.classList.contains('valid')){
// 			e.target.classList.remove('valid');
// 		}

// 		if(e.target.classList.contains('invalid')){
// 			e.target.classList.remove('invalid');
// 		}
// 	} else {
// 		jsformButton.removeAttribute('disabled', ' ')
// 		e.target.classList.remove('invalid');
// 		e.target.classList.add('valid');
// 	}
// }
// function updateValueName(e) {

// 	let valueName = e.target.value;

// 	if(!valueName === "") {
// 		jsformButton.setAttribute('disabled', 'disabled')

// 		if(e.target.classList.contains('valid')){
// 			e.target.classList.remove('valid');
// 		}

// 		if(e.target.classList.contains('invalid')){
// 			e.target.classList.remove('invalid');
// 		}
// 	} else {
// 		jsformButton.removeAttribute('disabled', ' ')
// 		e.target.classList.remove('invalid');
// 		e.target.classList.add('valid');
// 	}
// }
// function updateValueName1(e) {

// 	let valueName = e.target.value;

// 	if(!valueName === "") {
// 		jsformButton1.setAttribute('disabled', 'disabled')

// 		if(e.target.classList.contains('valid')){
// 			e.target.classList.remove('valid');
// 		}

// 		if(e.target.classList.contains('invalid')){
// 			e.target.classList.remove('invalid');
// 		}
// 	} else {
// 		jsformButton1.removeAttribute('disabled', ' ')
// 		e.target.classList.remove('invalid');
// 		e.target.classList.add('valid');
// 	}
// }
// function updateValueName2(e) {

// 	let valueName = e.target.value;

// 	if(!valueName === "") {
// 		jsformButton2.setAttribute('disabled', 'disabled')

// 		if(e.target.classList.contains('valid')){
// 			e.target.classList.remove('valid');
// 		}

// 		if(e.target.classList.contains('invalid')){
// 			e.target.classList.remove('invalid');
// 		}
// 	} else {
// 		jsformButton2.removeAttribute('disabled', ' ')
// 		e.target.classList.remove('invalid');
// 		e.target.classList.add('valid');
// 	}
// }
// function updateValueblur(e) {

// 	if(e.target.classList.contains('valid')){
// 		e.target.classList.remove('valid');
// 	}

// 	if(e.target.classList.contains('invalid')){
// 		e.target.classList.remove('invalid');
// 	}

// 	jsformButton.removeAttribute('disabled', ' ')
// 	e.target.classList.remove('invalid');
// }
// function updateValueblur2(e) {

// 	if(e.target.classList.contains('valid')){
// 		e.target.classList.remove('valid');
// 	}

// 	if(e.target.classList.contains('invalid')){
// 		e.target.classList.remove('invalid');
// 	}

// 	jsformButton2.removeAttribute('disabled', ' ')
// 	e.target.classList.remove('invalid');
// }
// function updateValueblur1(e) {

// 	if(e.target.classList.contains('valid')){
// 		e.target.classList.remove('valid');
// 	}

// 	if(e.target.classList.contains('invalid')){
// 		e.target.classList.remove('invalid');
// 	}

// 	jsformButton.removeAttribute('disabled', ' ')
// 	e.target.classList.remove('invalid');
// }

// if (jsForm) {
// 	jsForm.addEventListener('submit', (e)=> {
// 		let valuePhone = phoneInput.value;
// 		let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// 		let p = document.createElement('p');

// 		if(!valuePhone.match(re) === true) {
// 			e.preventDefault();
// 			phoneInput.classList.add('invalid')
// 			jsForm.appendChild(p);
// 			p.innerHTML = "<p class='base-text'>введите корректный номер</p>"
// 		}
// 		if(valuePhone === ''){
// 			jsForm.appendChild(p);
// 			p.innerHTML = "<p class='base-text'>введите номер</p>"
// 		} else {
// 			phoneInput.classList.remove('invalid');
// 			phoneInput.classList.add('valid')
// 		}
// 	})
// }
// if (jsForm1) {
// 	jsForm1.addEventListener('submit', (e)=> {
// 		let valuePhone = phoneInput1.value;
// 		let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// 		let p = document.createElement('p');

// 		if(!valuePhone.match(re) === true) {
// 			e.preventDefault();
// 			phoneInput1.classList.add('invalid')
// 		}
// 		if(valuePhone === ''){
// 			phoneInput1.classList.add('invalid')
// 		} else {
// 			phoneInput1.classList.remove('invalid');
// 			phoneInput1.classList.add('valid')
// 		}
// 	})
// }
// if (jsForm2) {
// 	jsForm2.addEventListener('submit', (e)=> {
// 		let valuePhone = phoneInput2.value;
// 		let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// 		let p = document.createElement('p');

// 		if(!valuePhone.match(re) === true) {
// 			e.preventDefault();
// 			phoneInput2.classList.add('invalid')
// 			jsForm2.appendChild(p);
// 			p.innerHTML = "<p class='base-text'>введите корректный номер</p>"
// 		}
// 		if(valuePhone === ''){
// 			jsForm2.appendChild(p);
// 			p.innerHTML = "<p class='base-text'>введите номер</p>"
// 		} else {
// 			phoneInput2.classList.remove('invalid');
// 			phoneInput2.classList.add('valid')
// 		}
// 	})
// }
// if (jsFormPopup) {
// 	jsFormPopup.addEventListener('submit', (e)=> {
// 		let valuePhone = phoneInput3.value;
// 		let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// 		let p = document.createElement('p');

// 		if(!valuePhone.match(re) === true) {
// 			e.preventDefault();
// 			phoneInput3.classList.add('invalid')
// 			jsFormPopup.appendChild(p);
// 			p.innerHTML = "<p class='base-text'>введите корректный номер</p>"
// 		}
// 		if(valuePhone === ''){
// 			jsFormPopup.appendChild(p);
// 			p.innerHTML = "<p class='base-text'>введите номер</p>"
// 		} else {
// 			phoneInput3.classList.remove('invalid');
// 			phoneInput3.classList.add('valid')
// 		}
// 	})
// }

// let sections = document.querySelectorAll('.lazy_contentSection');

// let optionsLazy = {
// 	root: null,
// 	rootMargin: '0px',
// 	threshold: 1,
// };

// let callbackLazy = function (entries, observer) {
// 	entries.forEach((entry) => {

// 		const arr = document.querySelectorAll('.lazy_content')

// 		if (entry.isIntersecting) {
// 			const lazyContent = entry.target
// 			console.log("lazy loading ", lazyContent)


// 			arr.forEach((el) => {
// 				el.classList.remove("lazy_content")
// 				el.classList.add("block")
// 			})

// 			observerLazy.unobserve(lazyContent);
// 		}
// 	});
// };

// let observerLazy = new IntersectionObserver(callbackLazy, optionsLazy);

// Array.from(sections).forEach(e=>{
// 	observerLazy.observe(e);
// })
