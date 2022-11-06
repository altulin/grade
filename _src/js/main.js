/* eslint-disable object-shorthand */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import Sticky from "sticky-js";
// import Tabby from "tabbyjs";
// import Accordion from "accordion-js";
// import Swiper, { Navigation, Pagination } from "swiper";
import HcOffcanvasNav from "hc-offcanvas-nav";
// import { gsap } from "gsap";
// import GLightbox from "glightbox";
// import makeListenerConsult from "./modules/moduleConsultation";
// import createlawSlider from "./modules/lawSlider";
// import createAccordionFaq from "./modules/faqAccordion";
import getTabs from "./modules/tabs";
import getMap from "./modules/map";
import makeSelectGeo from "./modules/geo";
import makeSelectCity from "./modules/city";
import { winWidth } from "./modules/map";
import makeAncor from "./modules/anchor";

const nav = ".nav";

const createMobileMenu = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const menu = new HcOffcanvasNav(nav, {
      disableAt: 1000,
      customToggle: ".header__burger",
      width: "100%",
    });
  });
};

// const createTabs = () => {
//   const tabs = new Tabby("[data-tabs]");
// };

const createStickyHeader = () => {
  const sticky = new Sticky(".header");
};

// const createSliders = () => {
//   Swiper.use([Navigation, Pagination]);
//   const swiper = new Swiper(".diploma__swiper", {
//     modules: [Navigation, Pagination],
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//     },
//   });
// };

// const createAnimation = (unit) => {
//   const button = unit.querySelectorAll("button");
//   const img = unit.querySelectorAll(".unit__img-wrap");
//   const box = unit.querySelector(".unit-box");
//   const diploma = unit.querySelector(".diploma");
//   const timeline = gsap.timeline();

//   timeline
//     .to(box, { opacity: 0, duration: 0 })
//     .to(button, { backgroundColor: "transparent", duration: 0 })
//     .to(img, { width: "355px", ease: "none", duration: 0.3 })
//     .to(button, { padding: 0, duration: 0.3 }, "<")
//     .fromTo(box, { x: 50 }, { opacity: 1, x: 0, duration: 0.5 })
//     .fromTo(
//       diploma,
//       { x: 50 },
//       { autoAlpha: 1, position: "relative", x: 0, duration: 0.5 },
//       "<"
//     );
// };

// const createAnimationReverse = (unit) => {
//   const button = unit.querySelectorAll("button");
//   const img = unit.querySelectorAll(".unit__img-wrap");
//   const diploma = unit.querySelector(".diploma");
//   const timeline = gsap.timeline();

//   timeline
//     .to(diploma, { autoAlpha: 0, position: "absolute", duration: 0 })
//     .to(img, { width: "8%", ease: "none", duration: 0.3 })
//     .to(
//       button,
//       { padding: 24, backgroundColor: "#ffffff", duration: 0.3 },
//       "<"
//     );
// };

// const createAccordion = () => {
//   const acc = new Accordion(".team__list", {
//     beforeOpen: (element) => {
//       createAnimation(element);
//     },
//     beforeClose: (element) => {
//       createAnimationReverse(element);
//     },
//   });
// };

// const createLightbox = () => {
//   const lightbox = GLightbox({
//     touchNavigation: true,
//     loop: true,
//     openEffect: "none",
//     preload: false,
//   });
// };

createMobileMenu();

window.addEventListener("DOMContentLoaded", function () {
  makeAncor();
  // getTabs();
  createStickyHeader();
  // createTabs();
  makeSelectGeo();
  // createAccordion();
  // createSliders();
  // createLightbox();
  // makeListenerConsult();
  // createlawSlider();
  // createAccordionFaq();
  makeSelectCity();
  getMap();
});
