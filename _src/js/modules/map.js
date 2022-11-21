/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
import officesList from "./offices.js";

export const winWidth = window.innerWidth;

const getMap = () => {
  DG.then(function () {
    const widthPhone = 600;

    const city = document.getElementById("map").getAttribute("data-city");

    const markers = officesList.filter((item) => {
      return city ? item.value === city : item.value === "irkutsk";
    })[0].shops;

    const center = markers[0].coordinates;

    const map = DG.map("map", {
      center,
      zoom: 13,
    });

    for (const item of markers) {
      const myIcon = DG.icon({
        iconUrl: "./img/svg/marker.svg",
        iconSize: winWidth > widthPhone ? [48, 60] : [27, 34],
        iconAnchor: winWidth > widthPhone ? [24, 60] : [13, 34],
      });
      DG.marker(item.coordinates, { icon: myIcon }).addTo(map);
    }
  });
};

export default getMap;
