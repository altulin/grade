const changeCity = (val) => {
  const elem = document.querySelector(".promo__city");

  if (elem) {
    elem.textContent = val;
  }
};

export default changeCity;
