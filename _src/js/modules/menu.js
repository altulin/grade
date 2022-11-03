import HcOffcanvasNav from "hc-offcanvas-nav";

const nav = ".nav";

const createMobileMenu = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // eslint-disable-next-line no-unused-vars
    const menu = new HcOffcanvasNav(nav, {
      disableAt: 1000,
      customToggle: ".header__burger",
      width: "100%",
    });
  });
};

export default createMobileMenu;
