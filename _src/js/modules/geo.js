import customSelect from "custom-select";
import officesList from "./offices";
// eslint-disable-next-line import/no-cycle
import { changeValueCity } from "./city";
import { myMap, placemarkCollections } from "./map";
import changeCity from "./changeCity";

const linkTel = document.querySelector(".icon-box__link--consultation");
const selectGeo = customSelect(".geo__select")[0];

export const changeValueGeo = (elem) => {
  if (linkTel) {
    const linkTelText = linkTel.querySelector(".icon-box__text");

    linkTelText.textContent = elem.tel;
  }

  selectGeo.value = elem.value;
  linkTel.href = `tel:${elem.link}`;
};

const makeSelectGeo = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const item of officesList) {
    const option = document.createElement("option");
    option.text = item.cityName;
    option.value = item.value;
    selectGeo.append(option);
  }
  changeValueGeo(officesList[0]);
  selectGeo.select.addEventListener("change", (e) => {
    const item = officesList.filter((elem) => {
      return elem.value === e.target.value;
    })[0];
    changeValueGeo(item);
    changeValueCity(item);
    changeCity(item.in);

    myMap
      .setBounds(placemarkCollections[officesList.indexOf(item)].getBounds(), {
        checkZoomRange: true,
      })
      .then(function () {
        if (myMap.getZoom() > 15) myMap.setZoom(15);
      });
  });
};

export default makeSelectGeo;
