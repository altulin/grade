import Swiper, { Navigation, Pagination } from "swiper";

const createlawSlider = () => {
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper(".law__swiper", {
    navigation: {
      nextEl: ".law-button-next",
      prevEl: ".law-button-prev",
    },
    pagination: {
      el: ".law__pagination",
      bulletClass: "pagination__bullet",
      bulletActiveClass: "pagination__bullet--active",
      type: "bullets",
    },
    breakpoints: {
      769: { cssMode: false, slidesPerView: "auto" },
      320: { cssMode: true, slidesPerView: 1 },
    },
    loop: true,
    spaceBetween: 16,
    slidesPerView: "auto",
  });
};

export default createlawSlider;
