const swiperMain = (() => {
	const accountantInit = new Swiper('.swiper-main', {
		slidesPerView: 2.15,
		spaceBetween: 10,
		speed: 800,

		centeredSlides: false,
		grabCursor: true,
		loop: true,
		autoplay: {
			delay: 10000500,
			disableOnInteraction: false,
		},
		centerInsufficientSlides: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		// breakpoints: {
		// 	768: {
		// 		spaceBetween: 40,
		// 		slidesPerView: 2.5,
		// 	},
		// 	1024: {
		// 		spaceBetween: 40,
		// 		slidesPerView: 3.5,
		// 	},
		// 	1200: {
		// 		spaceBetween: 80,
		// 		slidesPerView: 3.5,
		// 	},
		// },
	});

	// const swiper = document.querySelector('.variantsSitesSection');
	// const container = document.querySelector('.container');
	// let screenWidth = window.screen.width;
	// let swiperWidth = swiper.clientWidth;
	// let containerWidth = container.clientWidth;

	// let marginsContainer = screenWidth - containerWidth;
	// let marginContainer = marginsContainer / 2;

	// let marginsSwiper = screenWidth - swiperWidth;
	// let marginSwiper = marginsSwiper / 2;

	// console.log(screenWidth, 'ШиРИНА экрана')
	// console.log(swiperWidth, 'ШиРИНА свайпера')
	// console.log(marginsSwiper, 'маржины')
	// console.log(marginSwiper, 'маржин')

	// swiper.style.marginLeft = marginContainer+'px';
	// swiper.style.marginRight = -marginContainer+'px';

	// window.addEventListener('resize', ()=> {
	//     swiper.style.marginLeft = marginContainer+'px';
	//     swiper.style.marginRight = -marginContainer+'px';
	// })

	const init = () => {};

	return {
		init,
	};
})();

export default swiperMain;
