const mainSwiper = new Swiper('.slider__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 10000,
    },
    effect: 'slide',
    speed: 800, 
});

const partnerSwiper = new Swiper(".partner-swiper", {
    direction: 'horizontal',
    pagination: { 
      el: ".partner-swiper-pagination",
      clickable: true,
      type: 'bullets',
      bulletClass: 'custom-bullet',
    },
    slidesPerView: 1,
    speed: 500, 
  });