const MENU = document.querySelector("#menu");
const ROUTER = document.querySelector("#routing");
const HOME = document.querySelector("#screen-home");
const LOGIN = document.querySelector("#screen-login");
const REGISTER = document.querySelector("#screen-register");
const LOGOUT = document.querySelector("#screen-logout");
const ADD_EXERCISE = document.querySelector("#screen-add-exercise");
const LIST = document.querySelector("#screen-list");
const FILTER = document.querySelector("#screen-filter");
const TIME = document.querySelector("#screen-time");
const MAP = document.querySelector("#screen-map");
/**
 * * All sections
 */
const ALLSECTIONS = new Array(
  ROUTER,
  HOME,
  LOGIN,
  REGISTER,
  LOGOUT,
  ADD_EXERCISE,
  LIST,
  FILTER,
  TIME,
  MAP
);
/**
 * * Events: Event listener for ROUTER
 * @returns {void}
 */
function events() {
  ROUTER.addEventListener("ionRouteDidChange", navigate);
  // document
  //   .querySelector("#btnregister")
  //   .addEventListener("click", registerdata);
  // navigate(null, "/");
}

/**
 * Navigating to routes
 * @param {Event} evt 
 * @param {string} altroute 
 * @returns {void}
 */
function navigate(evt, altroute = null) {
  hidescreens();
  iftoken();
  let route = evt ? evt.detail.to : altroute;

  if (route == "/") {
    HOME.style.display = "block";
  } else if (route == "/login") {
    //* Login
    LOGIN.style.display = "block";
    loginThySelf();
    // localStorage.setItem("token", "Lady");
    iftoken();
  } else if (route == "/register") {
    //* register
    // localStorage.setItem("token", "Lady");
    iftoken();
    REGISTER.style.display = "block";
  } else if (route == "/logout") {
    //* logout
    iftoken();
    LOGOUT.style.display = "block";
    localStorage.removeItem("token");
  } else if (route == "/add-exercise") {
    ADD_EXERCISE.style.display = "block";
  } else if (route == "/list") {
    LIST.style.display = "block";
  } else if (route == "/filter") {
    FILTER.style.display = "block";
  } else if (route == "/time") {
    TIME.style.display = "block";
  } else if (route == "/map") {
    MAP.style.display = "block";
  }
}

/**
 * * Hides all sections
 * @returns {void}
 */
function hidescreens() {
  ALLSECTIONS.forEach((element) => {
    element.style.display = "none";
  });
}

/**
 * * Closes menu
 * @returns {void}
 */
function closemenu() {
  MENU.close();
}
