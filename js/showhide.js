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
/**
 * * Shows or hides DOM elements based on there being a token
 * @returns {void}
 */
function iftoken() {
  let thereistoken = localStorage.getItem("token");

  hidethemall(".iftoken");
  hidethemall(".ifNotoken");
  hidethemall(".iftokenflex");

  if (thereistoken != null && thereistoken != undefined) {
    showthemall(".iftoken");
    showthemall(".iftokenflex", "flex");
    hidethemall(".ifNotoken");
  } else {
    showthemall(".ifNotoken");
    hidethemall(".iftoken");
    hidethemall(".iftokenflex");
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
