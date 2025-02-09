const URL_BASE = "https://movetrack.develotion.com/";
const IMG_BASE = "https://movetrack.develotion.com/imgs/";

async function registerThySelf(user, password = "327146", idCountry = 235) {
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
    return "exito en el registro";
  } else {
    return `Error en el registro: ${data.codigo} - ${data.mensaje}`;
  }
}

async function loginThySelf(user = "327146test1", password = "327146") {
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
  console.log(data);

  // console.log(data);

  if (data.codigo == 200 || data.codigo == "200") {
    localStorage.clear();
    localStorage.setItem("token", data.apiKey);

    document.querySelector("#loginresult").innerHTML = `Login succesfull`;
    return true;
  } else {
    document.querySelector(
      "#loginresult"
    ).innerHTML = `Error logging in: ${data.codigo} - ${data.mensaje}`;
    return false;
  }
}
