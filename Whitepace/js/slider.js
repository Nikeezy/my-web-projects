var swiper = Swiper;
var init = false;

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    if(mobile.matches) {
        if (init) {
            swiper.destroy();
            init = false;
        }
        if(!init) {
            init = true;
            swiper = new Swiper('.swiper', {
                centeredSlides: true,
            
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                
                pagination: {
                    el: '.swiper-pagination',
                },
                
                initialSlide: 1,
                slidesPerView: 1,
                spaceBetween: 32,
            });
        }
    }
    else if(tablet.matches) {
        if (init) {
            swiper.destroy();
            init = false;
        }
        if(!init) {
            init = true;
            swiper = new Swiper('.swiper', {
                centeredSlides: true,
            
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                
                pagination: {
                    el: '.swiper-pagination',
                },
                
                initialSlide: 1,
                slidesPerView: 2,
                spaceBetween: 32,
            });
        }
    }
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

window.addEventListener('load', function() {
    swiperMode();
})

window.addEventListener('resize', function() {
    swiperMode();
})