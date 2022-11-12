/* eslint-disable no-unused-vars */
import Swiper, { Pagination } from "swiper";
import { winWidth } from "./map";

const getReviewsSlider = () => {
  if (winWidth < 601) {
    Swiper.use([Pagination]);
    const swiper = new Swiper(".reviews__swiper", {
      cssMode: true,
      spaceBetween: 0,
      pagination: {
        el: ".reviews__pagination",
        type: "bullets",
        bulletClass: "reviews__bullet",
        bulletActiveClass: "reviews__bullet--active",
      },
    });
  }
};

export default getReviewsSlider;
