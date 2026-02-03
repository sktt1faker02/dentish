/******/ (() => { // webpackBootstrap
/*!**********************************!*\
  !*** ./src/testimonials/view.js ***!
  \**********************************/
document.addEventListener("DOMContentLoaded", () => {
  const swiperContainers = document.querySelectorAll(".testimonials-swiper");
  swiperContainers.forEach(container => {
    const wrapper = container.closest(".testimonials-block");
    const autoplay = wrapper?.dataset.autoplay === "true";
    const autoplaySpeed = parseInt(wrapper?.dataset.autoplaySpeed) || 5000;
    new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: autoplay ? {
        delay: autoplaySpeed,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      } : false,
      pagination: {
        el: container.querySelector(".swiper-pagination"),
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map