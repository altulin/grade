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
import makeListenerConsult from "./modules/moduleConsultation.js";
import createlawSlider from "./modules/lawSlider.js";
import createAccordionFaq from "./modules/faqAccordion.js";
import getMap from "./modules/map.js";
import makeAncor from "./modules/anchor.js";
import getProcessSlider from "./modules/processSlider.js";
import actualYear from "./modules/actualYear.js";
import politikListener from "./modules/moduleDoc.js";
import getReviewsSlider from "./modules/reviewsSlider.js";
import changeLocation from "./modules/location.js";

const nav = ".nav";
const headerSelect = document.querySelector(".geo-js");
const contactSelect = document.querySelector(".hookup-js");

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
    beforeOpen: (element) => {},
    beforeClose: (element) => {},
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
  changeLocation(headerSelect);
  changeLocation(contactSelect);
  makeAncor();
  createStickyHeader();
  createTabs();
  getProcessSlider();
  createAccordion();
  createSliders();
  createLightbox();
  makeListenerConsult();
  createlawSlider();
  createAccordionFaq();
  getMap();
  actualYear();
  politikListener();
  getReviewsSlider();
});
