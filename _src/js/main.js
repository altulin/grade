/* eslint-disable object-shorthand */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import Sticky from "sticky-js";
import Tabby from "tabbyjs";
import Accordion from "accordion-js";
import Swiper, { Pagination } from "swiper";
import HcOffcanvasNav from "hc-offcanvas-nav";
import GLightbox from "glightbox";
import makeListenerConsult from "./modules/moduleConsultation";
import createlawSlider from "./modules/lawSlider";
import createAccordionFaq from "./modules/faqAccordion";
import makeSelectGeo from "./modules/geo";
import makeSelectCity from "./modules/city";
import getMap, { winWidth } from "./modules/map";
import makeAncor from "./modules/anchor";
import getProcessSlider from "./modules/processSlider";
import actualYear from "./modules/actualYear";
import politikListener from "./modules/moduleDoc";
import officesList from "./modules/offices";
import changeCity from "./modules/changeCity";
import getReviewsSlider from "./modules/reviewsSlider";

const nav = ".nav";

const createMobileMenu = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const menu = new HcOffcanvasNav(nav, {
      disableAt: 1001,
      customToggle: ".header__burger",
      width: "100%",
    });
  });
};

const createTabs = () => {
  const tabs = new Tabby("[data-tabs]");
};

const createStickyHeader = () => {
  const sticky = new Sticky(".header");
};

const createSliders = () => {
  Swiper.use([Pagination]);
  const swiper = new Swiper(".diploma__swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      bulletClass: "diploma__bullet",
      bulletActiveClass: "diploma__bullet--active",
    },
    breakpoints: {
      769: { cssMode: false },
      320: { cssMode: true },
    },
  });
};

const createAccordion = () => {
  const acc = new Accordion(".team__list", {
    beforeOpen: (element) => {
      // createAnimation(element);
    },
    beforeClose: (element) => {
      // createAnimationReverse(element);
    },
  });
};

const createLightbox = () => {
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    openEffect: "none",
    preload: false,
  });
};

createMobileMenu();

window.addEventListener("DOMContentLoaded", function () {
  changeCity(officesList[0].in);
  makeAncor();
  createStickyHeader();
  createTabs();
  makeSelectGeo();
  getProcessSlider();
  createAccordion();
  createSliders();
  createLightbox();
  makeListenerConsult();
  createlawSlider();
  createAccordionFaq();
  makeSelectCity();
  getMap();
  actualYear();
  politikListener();
  getReviewsSlider();
});
