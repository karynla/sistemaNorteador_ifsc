document.addEventListener("DOMContentLoaded", function () {
  let objFormulario = document.getElementById("formCliente");
  let objCaixaNome = document.getElementById("nome");
  let objSaudacao = document.getElementById("saudacao");
  let objMensagem = document.getElementById("mensagem");

  function exibirSaudacao() {
    let nome = objCaixaNome.value.trim();
    if (nome.length > 0) {
      objSaudacao.innerHTML =
        "Seja bem-vindo(a), " +
        nome +
        "! Preencha os dados abaixo para continuar.";
    } else {
      objSaudacao.innerHTML = "";
    }
  }

  function validarEmail(email) {
    // Verifica formato nome@dominio.extensao
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function emailJaCadastrado(email) {
    let clienteSalvo = localStorage.getItem("cliente");
    if (clienteSalvo) {
      let cliente = JSON.parse(clienteSalvo);
      return cliente.email === email;
    }
    return false;
  }

  function cadastrarCliente(evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let endereco = document.getElementById("endereco").value.trim();
    let email = document.getElementById("email").value.trim();
    let usuario = document.getElementById("usuario").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let celular = document.getElementById("celular").value.trim();

    // Campos vazios
    if (
      nome === "" ||
      endereco === "" ||
      email === "" ||
      usuario === "" ||
      senha === "" ||
      celular === ""
    ) {
      objMensagem.style.color = "red";
      objMensagem.innerHTML = "Preencha todos os campos antes de cadastrar.";
      return;
    }

    // Formato do e-mail
    if (!validarEmail(email)) {
      objMensagem.style.color = "red";
      objMensagem.innerHTML = "Informe um e-mail válido. Ex: nome@email.com";
      return;
    }

    // E-mail já cadastrado
    if (emailJaCadastrado(email)) {
      objMensagem.style.color = "red";
      objMensagem.innerHTML = "Este e-mail já está cadastrado no sistema.";
      return;
    }

    // Usuário sem espaços
    if (usuario.includes(" ")) {
      objMensagem.style.color = "red";
      objMensagem.innerHTML = "O nome de usuário não pode conter espaços.";
      return;
    }

    // Senha mínimo 6 caracteres
    if (senha.length < 6) {
      objMensagem.style.color = "red";
      objMensagem.innerHTML = "A senha deve ter no mínimo 6 caracteres.";
      return;
    }

    // Celular só com números
    if (!/^\d+$/.test(celular)) {
      objMensagem.style.color = "red";
      objMensagem.innerHTML =
        "O celular deve conter apenas números, sem traços ou espaços.";
      return;
    }

    let cliente = { nome, endereco, email, usuario, senha, celular };
    localStorage.setItem("cliente", JSON.stringify(cliente));

    objMensagem.style.color = "green";
    objMensagem.innerHTML =
      "Cliente <strong>" + nome + "</strong> cadastrado com sucesso!";
  }

  objCaixaNome.addEventListener("blur", exibirSaudacao);
  objFormulario.addEventListener("submit", cadastrarCliente);
});
