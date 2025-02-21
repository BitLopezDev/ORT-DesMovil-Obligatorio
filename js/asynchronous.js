/**
 *
 * @param {string} user
 * @param {string} password
 * @param {int} idCountry
 * @returns {string}
 */
async function registerThySelf(user, password, idCountry) {
  if (!stringSecurity([user, password, String(idCountry)])) {
    document.querySelector(
      "#registerresult"
    ).innerHTML = `Error logging in: SQL Injection detected`;
    return `Error logging in: SQL Injection detected`;
  }
  if (user.length < 4 || password.length < 4 || idCountry.length < 2) {
    document.querySelector(
      "#registerresult"
    ).innerHTML = `Error logging in: User and password must be at least 4 characters long and a country must be selected`;
    return;
  }
  document.querySelector("#registerresult").innerHTML = `Registering...`;
  localStorage.setItem("countrycode", idCountry);
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    usuario: user,
    password: password,
    idPais: idCountry,
  });

  let response = await fetch("https://movetrack.develotion.com/usuarios.php", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  // console.log(data);

  if (data.codigo == 200 || data.codigo == "200") {
    document.querySelector(
      "#registerresult"
    ).innerHTML = `Registering succesfull`;
    loginThySelf(user, password);
  } else {
    document.querySelector(
      "#registerresult"
    ).innerHTML = `Error registering: ${data.codigo} - ${data.mensaje}`;
  }
}

/**
 *
 * @param {string} user
 * @param {string} password
 * @returns {boolean}
 */
async function loginThySelf(user = "327146test1", password = "327146") {
  updateDOMinfo();

  if (!stringSecurity([user, password])) {
    document.querySelector(
      "#loginresult"
    ).innerHTML = `Error logging in: SQL Injection detected`;
    return false;
  }
  document.querySelector("#loginresult").innerHTML = `Registering...`;
  if (user.length < 4 || password.length < 4) {
    document.querySelector(
      "#loginresult"
    ).innerHTML = `Error logging in: User and password must be at least 4 characters long`;
    return;
  }
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    usuario: user,
    password: password,
  });

  let response = await fetch("https://movetrack.develotion.com/login.php", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();

  // console.log(data);

  if (data.codigo == 200 || data.codigo == "200") {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("iduser");

    localStorage.setItem("name", user);
    localStorage.setItem("token", data.apiKey);
    localStorage.setItem("iduser", data.id);
    loadActivities();
    loadList();

    document.querySelector("#loginresult").innerHTML = `Login succesfull`;
    return true;
  } else {
    document.querySelector(
      "#loginresult"
    ).innerHTML = `Error logging in: ${data.codigo} - ${data.mensaje}`;
  }
  return false;
}

async function loadCountries() {
  let response = await fetch("https://restcountries.com/v2/all", {
    method: "GET",
  });

  let data = await response.json();
  data.forEach((element) => {
    countriesarray.push([
      element.name,
      element.alpha3Code,
      element.callingCodes[0],
    ]);
  });
  // console.log(countriesarray);
  // console.log(data);
  let aux = `<div slot="label">Your country<ion-text color="danger">(Required)</ion-text></div>`;
  for (let country of data) {
    aux += `<ion-select-option value="${country.callingCodes}">${country.name} ${country.alpha3Code} ${country.callingCodes}</ion-select-option>>`;
  }
  document.querySelector("#country-register").innerHTML += aux;
}

/**
 *
 * @returns {void}
 */
async function loadActivities() {
  if (!iftoken()) {
    navigate(null, "/login");
    return;
  }
  let thereistoken = localStorage.getItem("token");
  let thereisid = localStorage.getItem("iduser");
  let headersList = {
    apikey: thereistoken,
    iduser: thereisid,
  };

  let response = await fetch(
    "https://movetrack.develotion.com/actividades.php",
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.json();
  activitiesarray = [...data.actividades];
  for (let act of data.actividades) {
    document.getElementById(
      "activity"
    ).innerHTML += `<ion-select-option value="${act.id}">${act.nombre}</ion-select-option>`;
  }
}
async function loadList() {
  if (!iftoken()) {
    navigate(null, "/login");
    return;
  }
  if (activitiesarray.length == 0) {
    await loadActivities();
  }
  let thereistoken = localStorage.getItem("token");
  let thereisid = localStorage.getItem("iduser");
  let headersList = {
    apikey: thereistoken,
    iduser: thereisid,
  };

  let response = await fetch(
    `https://movetrack.develotion.com/registros.php?idUsuario=${thereisid}`,
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.json();
  listarray = [...data.registros];

  console.log(data);
  for (let i in data.registros) {
    let aux = activityById(data.registros[i].idActividad);
    document.getElementById("listactivities").innerHTML += `
    <ion-item>

    <ion-card>
  <img alt="Activity" src="${aux[2]}" />
  <ion-card-header>
    <ion-card-title>${aux[1]}</ion-card-title>
    <ion-card-subtitle>Ejercicio hecho</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
   Usted ha hecho ${aux[1]} el día : ${data.registros[i].fecha} por ${data.registros[i].tiempo} minutos
   <h1><ion-icon name="trash-outline" onclick="deleteregistered(${data.registros[i].id})"></ion-icon></h1>
  </ion-card-content>
</ion-card>


    
</ion-item>
    `;
  }
  //document.getElementById("prelist").innerHTML = data;
  document.getElementById("listactivities").innerHTML +=
    "<br /><br /><br /><br /><br /><br />";
}

/**
 *
 * @param {*} id
 * @returns {Array}
 * * ID, Name, Image *
 */
function activityById(id) {
  if (activitiesarray.length == 0) {
    return [0, "Error", "Error"];
  }

  for (let i in activitiesarray) {
    if (activitiesarray[i].id == id) {
      return [
        activitiesarray[i].id,
        activitiesarray[i].nombre,
        `${IMG_BASE}${activitiesarray[i].imagen}.png`,
      ];
    }
  }

  return [0, "Error 1", "Error 1"];
}

async function sendActivity(activity, datetimeactivity, minutes) {
  if (!iftoken()) {
    navigate(null, "/login");
    return;
  }
  let thereistoken = localStorage.getItem("token");
  let thereisid = localStorage.getItem("iduser");
  let headersList = {
    apikey: thereistoken,
    iduser: thereisid,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    idActividad: activity,
    idUsuario: thereisid,
    tiempo: minutes,
    fecha: datetimeactivity,
  });

  let response = await fetch("https://movetrack.develotion.com/registros.php", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  console.log(data);
  if (data.codigo == "200" || data.codigo == 200) {
    document.querySelector(
      "#add-exerciseresult"
    ).innerHTML = `Actividad cargada exitosamente`;
    // loadList();
  } else {
    document.querySelector(
      "#add-exerciseresult"
    ).innerHTML = `Error cargando actividad: ${data.codigo}, ${data.mensaje}`;
  }
}

async function deleteregistered(id) {
  if (!iftoken()) {
    navigate(null, "/login");
    return;
  }
  let thereistoken = localStorage.getItem("token");
  let thereisid = localStorage.getItem("iduser");
  let headersList = {
    apikey: thereistoken,
    iduser: thereisid,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    idActividad: id,
  });

  let response = await fetch(
    `https://movetrack.develotion.com/registros.php?idRegistro=${id}`,
    {
      method: "DELETE",
      headers: headersList,
    }
  );

  let data = await response.json();

  if (data.codigo == "200" || data.codigo == 200) {
    document.querySelector(
      "#listactivitiesresult"
    ).innerHTML = `Actividad eliminada exitosamente`;
    location.reload(true);
  } else {
    document.querySelector(
      "#listactivitiesresult"
    ).innerHTML = `Error eliminando actividad: ${data.codigo}, ${data.mensaje}`;
  }
}
