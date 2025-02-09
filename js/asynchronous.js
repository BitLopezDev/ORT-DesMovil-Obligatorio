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
