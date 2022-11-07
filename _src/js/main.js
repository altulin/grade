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
import { gsap } from "gsap";
import GLightbox from "glightbox";
import makeListenerConsult from "./modules/moduleConsultation";
import createlawSlider from "./modules/lawSlider";
import createAccordionFaq from "./modules/faqAccordion";
import getMap from "./modules/map";
import makeSelectGeo from "./modules/geo";
import makeSelectCity from "./modules/city";
import { winWidth } from "./modules/map";
import makeAncor from "./modules/anchor";
import getProcessSlider from "./modules/processSlider";

const nav = ".nav";
const tablet = winWidth < 769;
const imgWidth = winWidth < 600 ? "80px" : "109px";

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
    },
    breakpoints: {
      769: { cssMode: false },
      320: { cssMode: true },
    },
  });
};

const createAnimation = (unit) => {
  const button = unit.querySelectorAll("button");
  const img = unit.querySelectorAll(".unit__img-wrap");
  const box = unit.querySelector(".unit-box");
  const diploma = unit.querySelector(".diploma");
  const timeline = gsap.timeline();

  timeline
    .to(box, { opacity: !tablet ? 0 : 1, duration: 0 })
    .to(button, { backgroundColor: "transparent", duration: 0 })
    .to(img, { width: !tablet ? "38%" : imgWidth, ease: "none", duration: 0.3 })
    .to(button, { padding: 0, duration: 0.3 }, "<")
    .to(box, { opacity: 1, duration: !tablet ? 0.5 : 0 })
    .to(diploma, { autoAlpha: 1, position: "relative", duration: 0.5 }, "<");
};

const createAnimationReverse = (unit) => {
  const button = unit.querySelectorAll("button");
  const img = unit.querySelectorAll(".unit__img-wrap");
  const diploma = unit.querySelector(".diploma");
  const timeline = gsap.timeline();

  timeline
    .to(diploma, { autoAlpha: 0, position: "absolute", duration: 0 })
    .to(img, { width: imgWidth, ease: "none", duration: 0.3 })
    .to(
      button,
      {
        padding: !tablet ? 24 : 0,
        backgroundColor: !tablet ? "#ffffff" : "transparent",
        duration: 0.3,
      },
      "<"
    );
};

const createAccordion = () => {
  const acc = new Accordion(".team__list", {
    beforeOpen: (element) => {
      createAnimation(element);
    },
    beforeClose: (element) => {
      createAnimationReverse(element);
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
});
