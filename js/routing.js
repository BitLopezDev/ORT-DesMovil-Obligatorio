/**
 * * Events: Event listener for ROUTER
 * @returns {void}
 */
function events() {
  ROUTER.addEventListener("ionRouteDidChange", navigate);
  // document
  //   .querySelector("#btnregister")
  //   .addEventListener("click", registerdata);
  // navigate(null, "/");
}

/**
 * Navigating to routes
 * @param {Event} evt
 * @param {string} altroute
 * @returns {void}
 */
function navigate(evt, altroute = null) {
  hidescreens();
  iftoken();
  let route = evt ? evt.detail.to : altroute;

  if (route == "/") {
    HOME.style.display = "block";
  } else if (route == "/login") {
    //* Login
    LOGIN.style.display = "block";

    // localStorage.setItem("token", "Lady");
    iftoken();
  } else if (route == "/register") {
    //* register
    // localStorage.setItem("token", "Lady");

    iftoken();
    REGISTER.style.display = "block";
  } else if (route == "/logout") {
    //* logout
    iftoken();
    LOGOUT.style.display = "block";
    localStorage.removeItem("token");
  } else if (route == "/add-exercise") {
    loadActivities();
    ADD_EXERCISE.style.display = "block";
  } else if (route == "/list") {
    loadList();
    LIST.style.display = "block";
  } else if (route == "/filter") {
    loadList();
    FILTER.style.display = "block";
  } else if (route == "/time") {
    TIME.style.display = "block";
  } else if (route == "/map") {
    MAP.style.display = "block";
  }
}

/**
 * * Hides all sections
 * @returns {void}
 */
function hidescreens() {
  ALLSECTIONS.forEach((element) => {
    element.style.display = "none";
  });
}

/**
 * * Closes menu
 * @returns {void}
 */
function closemenu() {
  MENU.close();
}
