let resizeTimeout;

const actualResizeHandler = () => {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

const resizeThrottler = () => {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function () {
      resizeTimeout = null;
      actualResizeHandler();
    }, 2000);
  }
};

const addEventResize = () => {
  return window.addEventListener("resize", resizeThrottler, false);
};

export default addEventResize;
