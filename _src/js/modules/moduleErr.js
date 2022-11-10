import * as basicLightbox from "basiclightbox";

const htmlInstanceErr = basicLightbox.create(document.querySelector(".err"));

const escapeHandler = (e) => {
  if (e.key === "Escape" && htmlInstanceErr.visible()) {
    document.removeEventListener("keydown", escapeHandler);
    // eslint-disable-next-line no-use-before-define
    closeForm();
  }
};

const closeForm = () => {
  htmlInstanceErr.close();
};

const closeHandler = (e) => {
  e.preventDefault();
  closeForm();
};

const errShowHandler = () => {
  const btnClose = document.querySelector(".err__close");
  // console.log(btnClose);
  btnClose.addEventListener("click", closeHandler);
  document.addEventListener("keydown", escapeHandler);
};

export default { errShowHandler, htmlInstanceErr };
