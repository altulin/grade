import Swiper, { Navigation } from "swiper";

const createlawSlider = () => {
  Swiper.use([Navigation]);
  const swiper = new Swiper(".law__swiper", {
    navigation: {
      nextEl: ".law-button-next",
      prevEl: ".law-button-prev",
    },
    loop: true,
    spaceBetween: 16,
    slidesPerView: "auto",
  });
};

export default createlawSlider;
