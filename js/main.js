// import Swiper from 'swiper/swiper-bundle.js';

const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 1000,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  }
});