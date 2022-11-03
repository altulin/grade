import IMask from "imask";

const getInputMask = () => {
  // eslint-disable-next-line no-unused-vars
  const phoneMask = IMask(document.getElementById("consultation-tel"), {
    mask: "+{7} (000) 000-00-00",
  });
};

export default getInputMask;
