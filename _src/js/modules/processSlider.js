/* eslint-disable no-unused-vars */
import Swiper, { Navigation, Pagination } from "swiper";
import { winWidth } from "./map";

const getProcessSlider = () => {
  if (winWidth < 769) {
    Swiper.use([Navigation, Pagination]);
    const swiper = new Swiper(".process__swiper", {
      cssMode: true,
      spaceBetween: 30,
      pagination: {
        el: ".process__pagination",
        type: "bullets",
        bulletClass: "process__bullet",
      },
    });
  }
};

export default getProcessSlider;
