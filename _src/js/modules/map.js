/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import officesList from "./offices";

export const winWidth = window.innerWidth;
// eslint-disable-next-line import/no-mutable-exports
export let myMap;
// eslint-disable-next-line import/no-mutable-exports
export let placemarkCollections;

const getMap = () => {
  placemarkCollections = {};
  const placemarkList = {};

  // Список городов и офисов в них

  // eslint-disable-next-line no-use-before-define
  ymaps.ready(init);

  function init() {
    // Создаем карту
    myMap = new ymaps.Map("map", {
      center: officesList[0].shops[0].coordinates,
      zoom: 17,
      controls: [],
      zoomMargin: [20],
    });

    // $('select#cities').append('<option value="' + i + '">' + officesList[i].cityName + '</option>');

    for (let i = 0; i < officesList.length; i++) {
      const cityCollection = new ymaps.GeoObjectCollection();
      for (let c = 0; c < officesList[i].shops.length; c++) {
        const shopInfo = officesList[i].shops[c];
        const shopPlacemark = new ymaps.Placemark(
          shopInfo.coordinates,
          {
            hintContent: shopInfo.name,
            balloonContent: shopInfo.name,
          },
          {
            iconLayout: "default#image",
            iconImageHref: "./img/svg/marker.svg",
            iconImageSize: winWidth > 601 ? [48, 60] : [27, 34],
          }
        );
        if (!placemarkList[i]) placemarkList[i] = {};
        placemarkList[i][c] = shopPlacemark;
        // Добавляем метку в коллекцию
        cityCollection.add(shopPlacemark);
      }
      placemarkCollections[i] = cityCollection;
      // Добавляем коллекцию на карту
      myMap.geoObjects.add(cityCollection);
    }

    // $("select#cities").trigger("change");
  }

  // console.log(placemarkCollections[0]);

  // Переключение города
  // $(document).on("change", $("select#city"), function () {
  //   const cityId = $("select#cities").val();

  //   // Масштабируем и выравниваем карту так, чтобы были видны метки для выбранного города
  //   myMap
  //     .setBounds(placemarkCollections[cityId].getBounds(), {
  //       checkZoomRange: true,
  //     })
  //     .then(function () {
  //       if (myMap.getZoom() > 15) myMap.setZoom(15); // Если значение zoom превышает 15, то устанавливаем 15.
  //     });

  //   $("#shops").html("");
  //   for (const c = 0; c < officesList[cityId].shops.length; c++) {
  //     $("#shops").append(
  //       '<li value="' + c + '">' + officesList[cityId].shops[c].name + "</li>"
  //     );
  //   }
  // });

  // Клик на адрес
  // $(document).on("click", "#shops li", function () {
  //   const cityId = $("select#cities").val();
  //   const shopId = $(this).val();

  //   placemarkList[cityId][shopId].events.fire("click");
  // });
};

export default getMap;
