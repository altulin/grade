/* eslint-disable no-unused-vars */
import Swiper, { Pagination } from "swiper";
import { winWidth } from "./map.js";

const getProcessSlider = () => {
  if (winWidth < 769) {
    Swiper.use([Pagination]);
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
