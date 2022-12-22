import menuBurger from './components/burger-menu';
import scrollSmooth from './components/scroll-smooth';
import inputmask from './components/inputMask';
import swiperMain from './components/sliders/swiperMain';

const overlay = document.querySelector('.overlay');
const BODY = document.querySelector('body');

(($) => {
	$(() => {
		scrollSmooth.init();
		menuBurger.init();

		if (swiperMain) {
			swiperMain.init();
		}

		$('.swiper-wrapper').removeClass('overflowXScroll');

		$('.intro-section__texts-inner .anima').each(function (i) {
			for (let z = 0; z < 1000; z++) {
				$(this)
					.delay(i++ * 2000)
					.fadeTo(1000, 1)
					.fadeTo(1000, 0);
			}
		});

		let link1 = $("a[href='#benefits']");
		let link2 = $("a[href='#price']");

		function foo() {
			if ($('body').hasClass('overflow')) {
				$('body').removeClass('overflow');
				$('.js-burger').removeClass('active');
				$('.js-burger-open').removeClass('active');
			}
			if ($('.overlay').hasClass('active')) {
				$('.overlay').removeClass('active');
				$('.js-burger').removeClass('active');
				$('.js-burger-open').removeClass('active');
			}
		}

		link1.on('click', function () {
			foo();
		});
		link2.on('click', function () {
			foo();
		});

		inputmask();
	});
})(jQuery);

window.addEventListener('load', function () {
	var newVideo = document.getElementsByTagName('video');

	Array.from(newVideo).forEach((e) => {
		e.autoplay = true;
		e.addEventListener(
			'ended',
			function () {
				this.currentTime = 0;
				this.play();
			},
			false
		);
	});
});

let windowWidth = window.innerWidth;
// let windowWidthClient = window.clientWidth;

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

// const titlesAnima = document.querySelectorAll('.titleIntro-anima .animaH2');

document.addEventListener('DOMContentLoaded', () => {
	menuBtn.forEach((e) => {
		e.addEventListener('click', () => {
			btnClosePopupCall.addEventListener('click', () => {
				if (popupCall.classList.contains(active)) {
					popupCall.classList.remove(active);
					overlay.classList.remove(active);
					NAV.classList.remove(active);
					BURGER.classList.remove(active);
					BODY.style.overflow = 'auto';
					// BODY.style.width = `${windowWidth}` + 'px';
				} else {
					BURGER.classList.remove(active);
					BODY.style.overflow = 'auto';
					// BODY.style.width = `${windowWidth}` + 'px';
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
				// BODY.style.width = `${windowWidth}` + 'px';
			}

			overlay.addEventListener('click', () => {
				if (overlay.classList.contains(active)) {
					overlay.classList.remove(active);
					popupCall.classList.remove(active);
					BODY.style.overflow = 'auto';
				}
			});
		});
	});

	tarifWrapper.forEach((e) => {
		e.addEventListener('click', () => {
			e.classList.toggle('active');
		});
	});
});

let optionsSHAPE = {
	root: null,
	rootMargin: '0px 0px -50% 0px',
	threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
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

let observerSHAPE = new IntersectionObserver(callbackSHAPE, optionsSHAPE);

if (SHAPE) {
	observerSHAPE.observe(SHAPE);
}
