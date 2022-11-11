/* eslint-disable no-restricted-syntax */
import customSelect from "custom-select";
import officesList from "./offices";
// eslint-disable-next-line import/no-cycle
import { changeValueGeo } from "./geo";
import { myMap, placemarkCollections } from "./map";
import changeCity from "./changeCity";

const selectCity = customSelect(".city__select")[0];
const data = document.querySelector(".data");

export const changeValueCity = (elem) => {
  if (data) {
    const itemAddr = data.querySelector(".data__item--addr");
    const linkTel = data.querySelector(".data__link--tel");
    const linkMail = data.querySelector(".data__link--mail");

    linkTel.href = `tel:${elem.link}`;
    linkTel.textContent = elem.tel;
    linkMail.href = `mailto:${elem.mail}`;
    linkMail.textContent = elem.mail;
    selectCity.value = elem.value;

    while (itemAddr.firstChild) {
      itemAddr.removeChild(itemAddr.firstChild);
    }

    for (const item of elem.shops) {
      const text = document.createElement("p");
      text.textContent = item.name;
      text.className = "data__addr";
      itemAddr.append(text);
    }
  }
};

const makeSelectCity = () => {
  for (const item of officesList) {
    const option = document.createElement("option");
    option.text = item.cityName;
    option.value = item.value;
    selectCity.append(option);
  }
  selectCity.value = officesList[0].value;
  changeValueCity(officesList[0]);
  selectCity.select.addEventListener("change", (e) => {
    const item = officesList.filter((elem) => {
      return elem.value === e.target.value;
    })[0];
    changeCity(item.in);
    changeValueCity(item);
    changeValueGeo(item);

    myMap
      .setBounds(placemarkCollections[officesList.indexOf(item)].getBounds(), {
        checkZoomRange: true,
      })
      .then(function () {
        if (myMap.getZoom() > 15) myMap.setZoom(15);
      });
  });
};

export default makeSelectCity;
