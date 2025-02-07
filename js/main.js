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

function iftoken() {
  let thereistoken = localStorage.getItem("token");

  let iftokenElements = document.querySelectorAll(".iftoken");
  let ifNotokenElements = document.querySelectorAll(".ifNotoken");
  for (let i = 0; i < iftokenElements.length; i++) {
    iftokenElements[i].style.display = "none";
  }
  for (let i = 0; i < ifNotokenElements.length; i++) {
    ifNotokenElements[i].style.display = "none";
  }

  if (thereistoken != null && thereistoken != undefined) {
    for (let i = 0; i < iftokenElements.length; i++) {
      iftokenElements[i].style.display = "block";
    }
    for (let i = 0; i < ifNotokenElements.length; i++) {
      ifNotokenElements[i].style.display = "none";
    }
  } else {
    for (let i = 0; i < iftokenElements.length; i++) {
      iftokenElements[i].style.display = "none";
    }
    for (let i = 0; i < ifNotokenElements.length; i++) {
      ifNotokenElements[i].style.display = "block";
    }
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
