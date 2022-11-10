import * as basicLightbox from "basiclightbox";

const body = document.querySelector(".page-body");

const htmlInstanceDoc = basicLightbox.create(
  document.querySelector(".doc__modal"),
  {
    className: "doc",
    onShow: () => {
      body.classList.add("stop-scrolling");
    },
    onClose: () => {
      body.classList.remove("stop-scrolling");
    },
  }
);

const closeForm = () => {
  htmlInstanceDoc.close();
};

const escapeHandler = (e) => {
  if (e.key === "Escape" && htmlInstanceDoc.visible()) {
    document.removeEventListener("keydown", escapeHandler);
    closeForm();
  }
};

const closeHandler = (e) => {
  e.preventDefault();
  closeForm();
};

const docShowHandler = () => {
  const btnClose = document.querySelector(".doc__close");
  btnClose.addEventListener("click", closeHandler);
  document.addEventListener("keydown", escapeHandler);
};

const politikHandle = (e) => {
  e.preventDefault();
  htmlInstanceDoc.show(() => {
    docShowHandler();
  });
};

const politikListener = () => {
  const btnPlitik = document.querySelector(".main-footer__politic");

  if (btnPlitik) btnPlitik.addEventListener("click", politikHandle);
};

export default politikListener;
