/**
 * @returns {void}
 */
window.onload = function Start() {
  events();
  iftoken();
  refresherall();
  loadCountries();
  updateDOMinfo();

  //loginThySelf();
};

/**
 * @returns {void}
 */
function loginSubmit() {
  let user = document.querySelector("#user-login").value;
  let password = document.querySelector("#password-login").value;
  let result = loginThySelf(user, password);
  console.log(result);
}

function registerSubmit() {
  let user = document.querySelector("#user-register").value;
  let password = document.querySelector("#password-register").value;
  let country = document.querySelector("#country-register").value;

  registerThySelf(user, password, country);
}

/**
 * returns opposite of boolean. if it returns True, it is safe to proceed
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

function sendactivitycheck() {
  document.querySelector("#add-exerciseresult").innerHTML = `Procesando...`;
  console.log("sending activity");
  let activity = document.querySelector("#activity").value;
  let datetimeactivity = document.querySelector("#datetime").value;
  let minutes = document.querySelector("#minutes").value;
  console.log(activity + datetimeactivity + minutes);
  if (
    activity == "" ||
    datetimeactivity == "" ||
    minutes == "" ||
    activity == null ||
    datetimeactivity == null ||
    minutes == null ||
    minutes < 1
  ) {
    document.querySelector(
      "#add-exerciseresult"
    ).innerHTML = `Complete los datos. Recuerde que el tiempo debe ser mayor o igual a 1 minuto, y la fecha no puede ser superior al dia de hoy`;
    return;
  }
  if (stringSecurity([activity, datetimeactivity, minutes])) {
    sendActivity(activity, datetimeactivity, minutes);
  } else {
    document.querySelector(
      "#add-exerciseresult"
    ).innerHTML ="SQL Injection detected";
    
  }
}
