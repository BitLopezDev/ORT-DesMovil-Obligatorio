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

  for (let act of data.actividades) {
    document.getElementById(
      "activity"
    ).innerHTML += `<ion-select-option value="${act.id}">${act.nombre}</ion-select-option>`;
  }

  // data.actividades.forEach((act) => {
  //   document.getElementById(
  //     "actividades"
  //   ).innerHTML += `<ion-select-option value="${act.id}">${act.nombre}</ion-select-option>`;
  // });
}
