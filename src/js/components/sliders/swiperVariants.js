const swiperVariants = (() => {
	const accountantInit = new Swiper('#swiperVariants', {
		slidesPerView: 1.5,
		spaceBetween: 20,
		speed: 800,
		// centeredSlides: true,
		grabCursor: true,
		loop: false,
		preloadImages: true,
		autoplay: {
			delay: 1500000,
			disableOnInteraction: false,
		},
		// centerInsufficientSlides: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2.2,
			},
			1024: {
				slidesPerView: 1.5,
			},
			1200: {
				slidesPerView: 2.2,
			},
		},
	});
	const init = () => {};

	return {
		init,
	};
})();

export default swiperVariants;
