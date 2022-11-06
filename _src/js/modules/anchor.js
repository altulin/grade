/* eslint-disable no-restricted-syntax */
const ancorHandle = function (e) {
  const id = this.href.split("#")[1];
  const anchorElem = document.getElementById(`${id}`);

  if (anchorElem) {
    e.preventDefault();
    anchorElem.scrollIntoView({ behavior: "smooth" });
  }
};

const makeAncor = () => {
  const list = Array.from(document.querySelectorAll(".nav__link"));
  for (const item of list) {
    item.addEventListener("click", ancorHandle);
  }
};

export default makeAncor;
