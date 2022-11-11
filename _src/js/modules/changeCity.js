const changeCity = (val) => {
  const elem = document.querySelector(".promo__city");
  const elemNav = document.querySelector(".nav__city");

  if (elem) {
    elem.textContent = val;
  }

  if (elemNav) {
    elemNav.textContent = val;
  }
};

export default changeCity;
