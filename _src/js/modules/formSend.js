import success from "./moduleSuccess";
// eslint-disable-next-line import/no-cycle
import { htmlInstance } from "./moduleConsultation";
import err from "./moduleErr";

export const form = document.querySelector(".consultation-form__inner");
export const preloader = document.querySelector(".preloader");
// test url
const url = "https://reqbin.com/echo/post/json";

const onSubmit = (event) => {
  event.preventDefault();

  const name = document.getElementById("consultation-name").value;
  const tel = document.getElementById("consultation-tel").value;

  const status = function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(response);
  };

  const json = function (response) {
    return response.json();
  };

  preloader.classList.add("preloader--visible");

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      tel,
    }),
  })
    .then(status)
    .then(json)
    .then(function () {
      preloader.classList.remove("preloader--visible");
      htmlInstance.close();
      form.reset();

      success.htmlInstanceSuccess.show(() => {
        success.successShowHandler();
      });
    })
    .catch(function () {
      preloader.classList.remove("preloader--visible");
      htmlInstance.close();
      form.reset();

      err.htmlInstanceErr.show(() => {
        err.errShowHandler();
      });
    });
};

export default onSubmit;
