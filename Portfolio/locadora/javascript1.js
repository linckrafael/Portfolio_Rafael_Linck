function validaForm() {
  let validaCod = document.forms["cadastrar"]["codigo"].value;
  let validaDat = document.forms["cadastrar"]["titulo"].value;
  let validaTit = document.forms["cadastrar"]["data"].value;
  let validaDir = document.forms["cadastrar"]["diretor"].value;
  let validaAto = document.forms["cadastrar"]["ator"].value;
  let validaNot = document.forms["cadastrar"]["nota"].value;
  let validaRad = document.forms["cadastrar"]["radio"].value;

  if (validaCod == "") {
    alert("O código deve ser preenchido!");
    return false;
  }

  if (validaDat == "") {
    alert("O data deve ser preenchido!");
    return false;
  }

  if (validaTit == "") {
    alert("O titulo deve ser preenchido!");
    return false;
  }

  if (validaDir == "") {
    alert("O diretor deve ser preenchido!");
    return false;
  }

  if (validaAto == "") {
    alert("O ator/atriz deve ser preenchido!");
    return false;
  }

  if (validaNot == "") {
    alert("O nota deve ser preenchido!");
    return false;
  }

  if (validaRad == "") {
    alert("O genero deve ser marcado!");
    return false;
  }
}

function insere() {
  let Codi = document.forms["cadastrar"]["codigo"].value;
  let Data = document.forms["cadastrar"]["data"].value;
  let Titu = document.forms["cadastrar"]["titulo"].value;
  let Dire = document.forms["cadastrar"]["diretor"].value;
  let Ator = document.forms["cadastrar"]["ator"].value;
  let Nota = document.forms["cadastrar"]["nota"].value;
  let Radi = document.forms["cadastrar"]["radio"].value;

  let inserir = window.document.getElementById("inserirTabela");
  inserir.innerHTML = `<th scope="row">${Codi}</th>`;
  inserir.innerHTML += `<td>${Titu}</td>`;
  inserir.innerHTML += `<td>${Dire}</td>`;
  inserir.innerHTML += `<td>${Data}</td>`;
  inserir.innerHTML += `<td>${Radi}</td>`;
  inserir.innerHTML += `<td>${Ator}</td>`;
  inserir.innerHTML += `<td>${Nota}/10</td>`;
}
