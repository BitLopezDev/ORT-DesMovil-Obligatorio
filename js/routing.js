const ROUTING = true;
const MENU = document.querySelector("#menu");
const ROUTER = document.querySelector("#routing");
const HOME = document.querySelector("#screen-home");
const LOGIN = document.querySelector("#screen-login");
const REGISTER = document.querySelector("#screen-register");
const PRODUCTS = document.querySelector("#screen-products");
const LOGOUT = document.querySelector("#screen-logout");
const ADD_EXERCISE = document.querySelector("#screen-add-exercise");
const LIST = document.querySelector("#screen-list");
// const FILTER = document.querySelector("#screen-filter");

const ALLSECTIONS = new Array(
  ROUTER,
  HOME,
  LOGIN,
  REGISTER,
  PRODUCTS,
  LOGOUT,
  ADD_EXERCISE,
  LIST
);
function events() {
  ROUTER.addEventListener("ionRouteDidChange", navigate);
  document
    .querySelector("#btnregister")
    .addEventListener("click", registerdata);
  navigate(null, "/");
}

function navigate(evt, altroute = null) {
  hidescreens();
  iftoken();
  let route = evt ? evt.detail.to : altroute;

  if (route == "/") {
    HOME.style.display = "block";
  } else if (route == "/login") {
    LOGIN.style.display = "block";
    localStorage.setItem("token", "Lady");
    iftoken();
  } else if (route == "/register") {
    localStorage.setItem("token", "Lady");
    iftoken();
    REGISTER.style.display = "block";
  } else if (route == "/products") {
    PRODUCTS.style.display = "block";
  } else if (route == "/logout") {
    iftoken();
    LOGOUT.style.display = "block";
    localStorage.removeItem("token");
  } else if (route == "/add-exercise") {
    ADD_EXERCISE.style.display = "block";
  } else if (route == "/list") {
    LIST.style.display = "block";
  } else if (route == "/filter") {
    FILTER.style.display = "block";
  }
}

function hidescreens() {
  ALLSECTIONS.forEach((element) => {
    element.style.display = "none";
  });
}

function closemenu() {
  MENU.close();
}
