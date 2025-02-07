const ROUTING = true;
const MENU = document.querySelector("#menu");
const ROUTER = document.querySelector("#routing");
const HOME = document.querySelector("#screen-home");
const LOGIN = document.querySelector("#screen-login");
const REGISTER = document.querySelector("#screen-register");
const PRODUCTS = document.querySelector("#screen-products");
const LOGOUT = document.querySelector("#screen-logout");
const ALLSECTIONS = new Array(ROUTER, HOME, LOGIN, REGISTER, PRODUCTS, LOGOUT);
function events() {
    ROUTER.addEventListener("ionRouteDidChange", navigate);
    document
      .querySelector("#btnregister")
      .addEventListener("click", registerdata);
    HOME.style.display = "block";
  }

function navigate(evt) {
    hidescreens();
  
    let ruta = evt.detail.to;
  
    if (ruta == "/") {
      HOME.style.display = "block";
    } else if (ruta == "/login") {
      LOGIN.style.display = "block";
    } else if (ruta == "/register") {
      REGISTER.style.display = "block";
    } else if (ruta == "/products") {
      PRODUCTS.style.display = "block";
    } else if (ruta == "/logout") {
      LOGOUT.style.display = "block";
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