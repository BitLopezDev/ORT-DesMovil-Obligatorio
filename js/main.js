const MENU = document.querySelector("#menu");
const ROUTER = document.querySelector("#routing");
const HOME = document.querySelector("#screen-home");
const LOGIN = document.querySelector("#screen-login");
const REGISTER = document.querySelector("#screen-register");
const PRODUCTS = document.querySelector("#screen-products");
const URL_BASE = "https://ort-tallermoviles.herokuapp.com/api/";

window.onload = function Start() {
  events();
  iftoken();
};

function hidethemall(selector) {
  try {
    let elements = document?.querySelectorAll(selector);

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  } catch (e) {
    throw new Error("Error en la función hidethemall");
  }
}

function showthemall(selector) {
  try {
    let elements = document?.querySelectorAll(selector);

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
  } catch (e) {
    throw new Error("Error en la función showthemall");
  }
}
function iftoken() {
  let thereistoken = localStorage.getItem("token");

  hidethemall(".iftoken");
  hidethemall(".ifNotoken");

  if (thereistoken != null && thereistoken != undefined) {
    showthemall(".iftoken");
    hidethemall(".ifNotoken");
  } else {
    showthemall(".ifNotoken");
    hidethemall(".iftoken");
  }
}

function events() {
  ROUTER.addEventListener("ionRouteDidChange", navigate);
  document
    .querySelector("#btnregister")
    .addEventListener("click", registerdata);
}

function registerdata() {
  let name = document.querySelector("#txtregisterNombre").value;
  let last = document.querySelector("#txtregisterApellido").value;
  let email = document.querySelector("#txtregisterEmail").value;
  let address = document.querySelector("#txtregisterDireccion").value;
  let password = document.querySelector("#txtregisterPassword").value;

  let user = new Object();
  usuario.nombre = name;
  usuario.apellido = last;
  usuario.email = email;
  usuario.direccion = address;
  usuario.password = password;

  fetch(`${URL_BASE}usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then(function (response) {
      console.log(response);

      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.error == "") {
        document.querySelector("#label-respuesta-register").innerHTML =
          "Alta Correcta";
      } else {
        document.querySelector("#label-respuesta-register").innerHTML =
          data.error;
      }
    });

  ///otra opción

  // fetch(`${URL_BASE}usuarios`, {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(usuario),
  // }).then(function (response) {
  //     console.log(response);

  //     if(!response.ok){

  //          return response.json();
  //     }else{
  //         document.querySelector("#label-respuesta-register").innerHTML = "alta correcta";

  //     }

  // }).then(function (data) {
  //     console.log(data);

  //         document.querySelector("#label-respuesta-register").innerHTML = data.error;

  // })
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
  }
}

function hidescreens() {
  HOME.style.display = "none";
  LOGIN.style.display = "none";
  REGISTER.style.display = "none";
  PRODUCTS.style.display = "none";
}

function closemenu() {
  MENU.close();
}
