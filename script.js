// VARIÁVEIS GLOBAIS
var lista = ["Red Dead Redemption 2", "Hollow Knight", "Elden Ring"];

var USUARIO_CORRETO = "aluno";
var SENHA_CORRETA = "fiap2025";

// AUTENTICAÇÃO
function handleLogin() {
  var usuario = document.getElementById("username").value;
  var senha = document.getElementById("password").value;
  var erroEl = document.getElementById("login-error");

  if (usuario.trim() === "" || senha.trim() === "") {
    mostrarErro(erroEl, "⚠ Preencha todos os campos antes de entrar.");
    return;
  }

  if (usuario === USUARIO_CORRETO && senha === SENHA_CORRETA) {
    esconderErro(erroEl);
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("app-screen").classList.remove("hidden");
    renderizarLista();
  } else {
    mostrarErro(erroEl, "⚠ Usuário ou senha incorretos.");
  }
}

function handleLogout() {
  document.getElementById("app-screen").classList.add("hidden");
  document.getElementById("login-screen").classList.remove("hidden");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  esconderErro(document.getElementById("login-error"));
}

// UTILITÁRIOS
function mostrarErro(el, mensagem) {
  el.textContent = mensagem;
  el.classList.remove("hidden");
}

function esconderErro(el) {
  el.classList.add("hidden");
  el.textContent = "";
}