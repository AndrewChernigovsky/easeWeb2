const swiperMain = (() => {
    const accountantInit = new Swiper('.swiper-main', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        speed: 800,

        centeredSlides: false,
        autoplay: {
        delay: 1000500,
        disableOnInteraction: false,
        },
        centerInsufficientSlides: false,
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
        breakpoints: {
        768: {
            spaceBetween: 40,
            slidesPerView: 2.5,
        },
        1024: {
            spaceBetween: 40,
            slidesPerView: 3.5,
        },
        1200: {
            spaceBetween: 200,
            slidesPerView: 3.1,
        },
        },
    });

    const swiper = document.querySelector('.swiper-main');
    let screenWidth = window.screen.width;
    let swiperWidth = swiper.offsetWidth;

    window.addEventListener('resize', ()=> {
        if(swiperWidth > screenWidth) {
            swiper.style.maxWidth = screenWidth+'px';
        }
    })

    const init = () => {};

    return {
        init,
    };
})();

  export default swiperMain;
