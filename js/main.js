/**
 * * Sends values to loginThySelf
 * @returns {void}
 */
function loginSubmit() {
  let user = document.querySelector("#user-login").value;
  let password = document.querySelector("#password-login").value;
  let result = loginThySelf(user, password);
}

/**
 * * Sends values to registerThySelf
 * @returns {void}
 */
function registerSubmit() {
  let user = document.querySelector("#user-register").value;
  let password = document.querySelector("#password-register").value;
  let country = document.querySelector("#country-register").value;

  registerThySelf(user, password, country);
}

/**
 * * Returns bool on safety
 * * if (bool) => safe to proceed
 * @param {String[]} strArray
 * @returns {bool}
 */
function stringSecurity(strArray) {
  for (let element of strArray) {
    let is = SQLI.some((sqlWord) => element.toLowerCase().includes(sqlWord));
    if (is) {
      return false;
    }
  }
  return true;
}

/**
 * * Checks info to send to sendActivity()
 * * Updates DOM @ #add-exerciseresult
 * * SQL Security
 * * calls dateworking()
 * @returns {void}
 */
function sendactivitycheck() {
  document.querySelector("#add-exerciseresult").innerHTML = `Procesando...`;
  console.log("sending activity");
  let activity = document.querySelector("#activity").value;
  let datetimeactivity = document.querySelector("#datetime").value;
  let minutes = document.querySelector("#minutes").value;
  //alert(datetimeactivity);
  //2025-02-05T12:49:00
  //alert(datetimeactivity.substring(0, 10));
  if (
    activity == "" ||
    datetimeactivity == "" ||
    minutes == "" ||
    activity == null ||
    datetimeactivity == null ||
    minutes == null ||
    minutes < 1 ||
    !dateworking(datetimeactivity)
  ) {
    document.querySelector(
      "#add-exerciseresult"
    ).innerHTML = `Complete los datos. Recuerde que el tiempo debe ser mayor o igual a 1 minuto, y la fecha no puede ser superior al dia de hoy`;
    return;
  }
  if (stringSecurity([activity, datetimeactivity, minutes])) {
    sendActivity(activity, datetimeactivity, minutes);
  } else {
    document.querySelector("#add-exerciseresult").innerHTML =
      "SQL Injection detected";
  }
}

/**
 * * if (bool) => dateparam <= now
 * @param {string} dateparam
 * @returns {boolean}
 */
function dateworking(dateparam) {
  let now = new Date();
  //2025-02-05T12:49:00
  /*let dateYear = date.substring(0, 4);
  let dateMonth = date.substring(5, 7);
  let dateDay = date.substring(8, 10);*/
  let date2 = new Date(dateparam);
  if (date2 > now) {
    return false;
  }
  return true;
}

/**
 * *Checks if the date is today
 * @param {string} d1
 * @returns {bool}
 */
function sameDay(d1) {
  let now = new Date();
  let today = now.getDay();
  if (d1.getDay() == today) {
    return true;
  }
  return false;
}

/**
 * * Prints points on map
 * @param {string} name 
 * @param {int} amount 
 * @param {float} lat 
 * @param {float} long 
 * @returns {void}
 */
function showPoint(name, amount, lat, long) {
  // console.log(`${name} ${amount} ${lat} ${long}`);
  let point = L.marker([lat, long])
    .addTo(map)
    .bindPopup(`${name} - ${amount} usuarios registrados`);
}
/**
 * * works with dates
 * @param {StringDate} date
 * @returns {int}
 * * 0: TODAY
 * * 1: THIS WEEK
 * * 2: THIS MONTH
 * * 3: OLDER
 */
function DateCalculon(date) {
  const today = new Date();

  const paramdate = new Date(date);

  const timediff = today - paramdate;
  const daydiff = timediff / (1000 * 3600 * 24);

  if (daydiff <= 1) {
    return 0;
  } else if (daydiff <= 7) {
    return 1;
  } else if (
    today.toISOString().substring(5, 7) ==
    paramdate.toISOString().substring(5, 7)
  ) {
    return 2;
  } else {
    return 3;
  }
}
/**
 * * Calculates time of activity
 * * Login check
 * *Updates DOM @ (#totaltime, #dailytime)
 * @returns {void}
 */
function loadTimes() {
  if (!iftoken()) {
    navigate(null, "/login");
    return;
  }
  let aux = 0;
  let auxDay = 0;
  listarray.forEach((element) => {
    aux += element.tiempo;
    if (DateCalculon(element.fecha) == 0) {
      console.log(auxDay);
      auxDay += element.tiempo;
    }
  });
  document.querySelector(
    "#totaltime"
  ).innerHTML = `Total de tiempo: ${aux} minutos`;
  document.querySelector(
    "#dailytime"
  ).innerHTML = `Total de tiempo del dia: ${auxDay} minutos`;
}

// ! /!\ DO NOT CODE BELLOW THIS LINE /!\ ! 

/**
 * * RUNS on load
 * @returns {void}
 */
window.onload = function Start() {
  events();
  iftoken();
  if (iftoken()) {
    LoadMap();
    usersByCountry();
    loadList();

    //loadMapPoints1(); called by previous function
  }
  refresherall();
  loadCountries();
  updateDOMinfo();

  //loginThySelf();
};
