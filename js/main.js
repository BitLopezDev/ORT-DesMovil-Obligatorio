function listeners() {}
window.onload = function Start() {
  events();
  iftoken();
  refresherall();
  listeners();
  //loginThySelf();
};

function loginSubmit() {
  let user = document.querySelector("#user-login").value;
  let password = document.querySelector("#password-login").value;
  let result = loginThySelf(user, password);
  console.log(result);
 
}
