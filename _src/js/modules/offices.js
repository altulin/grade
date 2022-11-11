// Список городов и офисов в них
const officesList = [
  {
    cityName: "Красноярск",
    in: "Красноярске",
    tel: "8 3912 347778",
    link: "+73912347778",
    value: "krasnoyarsk",
    mail: "krs.ocenka@mail.ru",
    shops: [
      {
        coordinates: [55.975622, 92.854988],
        name: "переулок Афонтовский, д.7 оф.215",
      },
      {
        coordinates: [56.032408, 92.87962],
        name: "улица Линейная, д.89 оф.ц2-05",
      },
    ],
  },
  {
    cityName: "Иркутск",
    in: "Иркутске",
    tel: "8 3952 435001",
    link: "+73952435001",
    value: "irkutsk",
    mail: "irk.ocenka@mail.ru",
    shops: [
      {
        coordinates: [52.268099, 104.34445],
        name: "улица Ширямова, д.22 оф.302",
      },
    ],
  },
  {
    cityName: "Братск",
    in: "Братске",
    tel: "8 9025 432294",
    link: "+79025432294",
    value: "bratsk",
    mail: "brt.ocenka@mail.ru",
    shops: [
      {
        coordinates: [56.147114, 101.617425],
        name: "улица Южная, д.33а оф.8",
      },
    ],
  },
];

export default officesList;
