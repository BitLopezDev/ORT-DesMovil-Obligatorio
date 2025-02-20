//TODO: Document functions
/**
 * * showhide.js
 * * Hides DOM Elements as per request
 * @param {string} selector
 * @returns {void}
 */
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
/**
 * * show DOM Elements as per request
 * @param {string} selector
 * @param {string} display
 */
function showthemall(selector, display = "block") {
  try {
    let elements = document?.querySelectorAll(selector);

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = display;
    }
  } catch (e) {
    throw new Error("Error en la función showthemall");
  }
}
function isloggedint() {}
/**
 * * Shows or hides DOM elements based on there being a token
 * @returns {boolean}
 */
function iftoken() {
  let thereistoken = localStorage.getItem("token");
  let thereisid = localStorage.getItem("iduser");

  hidethemall(".iftoken");
  hidethemall(".ifNotoken");
  hidethemall(".iftokenflex");

  if (thereistoken != null && thereistoken != undefined && thereisid != null && thereisid != undefined ) {
    //
    showthemall(".iftoken");
    showthemall(".iftokenflex", "flex");
    hidethemall(".ifNotoken");
    return true;
  } else {
    showthemall(".ifNotoken");
    hidethemall(".iftoken");
    hidethemall(".iftokenflex");
    return false;
  }
}

/**
 * * refreshers
 * @returns {void}
 */

function refresherall() {
  let elements = document?.querySelectorAll(".refresher");

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("ionRefresh", () => {
      setTimeout(() => {
        // Any calls to load data go here
        elements[i].complete();

        location.reload(true);
      }, 500);
    });
  }
}

function updateDOMinfo() {
  document.querySelector("#nameMenu").innerHTML =
    localStorage.getItem("name") || "Error finding name";
  /*let countrycode = localStorage.getItem("countrycode");
  console.log(countrycode);
  for (const element of countriesarray) {
    if (String(element[2]) == countrycode) {
      document.querySelector("#countryname").innerHTML = element[0];
      console.log(element[0]);
      document.querySelector("#countrycode").innerHTML = element[1];
    }
}*/
  /*
  document.querySelector("#countrycode").innerHTML = countrycode;
  document.querySelector("#countryname").innerHTML = countrycode;
*/
}
