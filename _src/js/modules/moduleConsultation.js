/* eslint-disable no-restricted-syntax */

import * as basicLightbox from "basiclightbox";
import getInputMask from "./inputMask.js";
// eslint-disable-next-line import/no-cycle
import onSubmit, { form } from "./formSend.js";

export const htmlInstance = basicLightbox.create(
  document.querySelector(".consultation")
);

const escapeHandlerConsult = (e) => {
  if (e.key === "Escape" && htmlInstance.visible()) {
    // eslint-disable-next-line no-use-before-define
    closeForm();
  }
};

const closeForm = () => {
  form.removeEventListener("submit", onSubmit);
  form.reset();
  document.removeEventListener("keydown", escapeHandlerConsult);
  htmlInstance.close();
};

const closeHandler = (e) => {
  e.preventDefault();
  closeForm();
};

const consultationHandler = (e) => {
  e.preventDefault();
  htmlInstance.show(() => {
    const btnClose = document.querySelector(".consultation__close");

    btnClose.addEventListener("click", closeHandler);
    document.addEventListener("keydown", escapeHandlerConsult);
    getInputMask();
    form.addEventListener("submit", onSubmit);
  });
};

const makeListenerConsult = () => {
  const listBtn = Array.from(document.querySelectorAll(".consultation-btn"));

  for (const item of listBtn) {
    item.addEventListener("click", consultationHandler);
  }
};

export default makeListenerConsult;
