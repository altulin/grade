import customSelect from "custom-select";
import officesList from "./offices";
// eslint-disable-next-line import/no-cycle
import { changeValueCity } from "./city";

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
  });
};

export default makeSelectGeo;
