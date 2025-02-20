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
