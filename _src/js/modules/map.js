/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import DG from "2gis-maps";
import officesList from "./offices";

export const winWidth = window.innerWidth;

const getMap = () => {
  const widthPhone = 600;
  const city = window.location.href.split("/").pop().split(".")[0];

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
};

export default getMap;
