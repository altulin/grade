const changeLocation = (parent) => {
  if (parent) {
    const list = parent.querySelector(".location-js");
    const title = parent.querySelector(".location__title-js");

    if (list) {
      parent.addEventListener("mouseenter", function () {
        list.classList.add("location-visible");

        if (title) {
          title.classList.add("location__title--active");
        }
      });

      parent.addEventListener("mouseleave", function () {
        list.classList.remove("location-visible");

        if (title) {
          title.classList.remove("location__title--active");
        }
      });
    }
  }
};

export default changeLocation;
