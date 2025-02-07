
const URL_BASE = "https://ort-tallermoviles.herokuapp.com/api/";

window.onload = function Start() {
  events();
  iftoken();
};





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




