document.addEventListener("DOMContentLoaded", function () {
  let objFormulario = document.getElementById("formVeiculo");
  let objMensagem = document.getElementById("mensagem");

  function validarPlacaMercosul(placa) {
    let regex = /^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$/;
    return regex.test(placa);
  }

  function placaJaCadastrada(placa) {
    let veiculoSalvo = localStorage.getItem("veiculo");
    if (veiculoSalvo) {
      let veiculo = JSON.parse(veiculoSalvo);
      return veiculo.placa === placa.toUpperCase();
    }
    return false;
  }

  function cadastrarVeiculo(evento) {
    evento.preventDefault();

    let marca = document.getElementById("marca").value.trim();
    let modelo = document.getElementById("modelo").value.trim();
    let placa = document.getElementById("placa").value.trim();

    // Campos vazios
    if (marca === "" || modelo === "" || placa === "") {
      objMensagem.style.color = "red";
      objMensagem.innerHTML = "Preencha todos os campos antes de cadastrar.";
      return;
    }

    // Formato da placa Mercosul
    if (!validarPlacaMercosul(placa)) {
      objMensagem.style.color = "red";
      objMensagem.innerHTML =
        "Placa inválida. Use o formato Mercosul: ABC1D23.";
      return;
    }

    // Placa já cadastrada
    if (placaJaCadastrada(placa)) {
      objMensagem.style.color = "red";
      objMensagem.innerHTML = "Esta placa já está cadastrada no sistema.";
      return;
    }

    let veiculo = { marca, modelo, placa: placa.toUpperCase() };
    localStorage.setItem("veiculo", JSON.stringify(veiculo));

    objMensagem.style.color = "green";
    objMensagem.innerHTML =
      "Veículo <strong>" +
      placa.toUpperCase() +
      "</strong> cadastrado com sucesso!";
  }

  objFormulario.addEventListener("submit", cadastrarVeiculo);
});
