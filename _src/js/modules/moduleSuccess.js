import * as basicLightbox from "basiclightbox";

const htmlInstanceSuccess = basicLightbox.create(
  document.querySelector(".success")
);

const escapeHandler = (e) => {
  if (e.key === "Escape" && htmlInstanceSuccess.visible()) {
    document.removeEventListener("keydown", escapeHandler);
    // eslint-disable-next-line no-use-before-define
    closeForm();
  }
};

const closeForm = () => {
  htmlInstanceSuccess.close();
};

const closeHandler = (e) => {
  e.preventDefault();
  closeForm();
};

const successShowHandler = () => {
  const btnClose = document.querySelector(".success__close");
  btnClose.addEventListener("click", closeHandler);
  document.addEventListener("keydown", escapeHandler);
};

export default { htmlInstanceSuccess, successShowHandler };
