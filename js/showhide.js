const SHOWHIDE = true;
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
  
  function showthemall(selector) {
    try {
      let elements = document?.querySelectorAll(selector);
  
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
    } catch (e) {
      throw new Error("Error en la función showthemall");
    }
  }
  function iftoken() {
    let thereistoken = localStorage.getItem("token");
  
    hidethemall(".iftoken");
    hidethemall(".ifNotoken");
  
    if (thereistoken != null && thereistoken != undefined) {
      showthemall(".iftoken");
      hidethemall(".ifNotoken");
    } else {
      showthemall(".ifNotoken");
      hidethemall(".iftoken");
    }
  }