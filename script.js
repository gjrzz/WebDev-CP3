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

// ADICIONAR
function adicionarAoFinal() {
  var valor = document.getElementById("new-item").value.trim();
  var erroEl = document.getElementById("add-error");

  if (valor === "") {
    mostrarErro(erroEl, "⚠ O campo não pode estar vazio.");
    return;
  }

  esconderErro(erroEl);
  lista.push(valor);
  document.getElementById("new-item").value = "";
  renderizarLista();
}

function adicionarAoInicio() {
  var valor = document.getElementById("new-item").value.trim();
  var erroEl = document.getElementById("add-error");

  if (valor === "") {
    mostrarErro(erroEl, "⚠ O campo não pode estar vazio.");
    return;
  }

  esconderErro(erroEl);
  lista.unshift(valor);
  document.getElementById("new-item").value = "";
  renderizarLista();
}

// REMOVER
function removerItem(indice) {
  lista.splice(indice, 1);
  renderizarLista();
}

// EDITAR
function editarItem(indice) {
  var novoValor = prompt("Editar jogo:", lista[indice]);

  if (novoValor === null || novoValor.trim() === "") {
    return;
  }

  lista[indice] = novoValor.trim();
  renderizarLista();
}

// RENDERIZAÇÃO
function renderizarLista() {
  var ul = document.getElementById("game-list");
  var counter = document.getElementById("counter");

  ul.innerHTML = "";

  counter.textContent = lista.length + (lista.length === 1 ? " jogo" : " jogos");

  for (var i = 0; i < lista.length; i++) {
    var li = criarItemLista(i);
    ul.appendChild(li);
  }
}

function criarItemLista(indice) {
  var li = document.createElement("li");
  li.classList.add("game-item");

  var numSpan = document.createElement("span");
  numSpan.classList.add("item-num");
  numSpan.textContent = String(indice + 1).padStart(2, "0");

  var nomeSpan = document.createElement("span");
  nomeSpan.classList.add("item-nome");
  nomeSpan.textContent = lista[indice];

  var acoes = document.createElement("div");
  acoes.classList.add("item-acoes");

  var btnEditar = document.createElement("button");
  btnEditar.classList.add("btn-editar");
  btnEditar.textContent = "Editar";
  btnEditar.setAttribute("data-index", indice);
  btnEditar.onclick = function() {
    editarItem(parseInt(this.getAttribute("data-index")));
  };

  var btnRemover = document.createElement("button");
  btnRemover.classList.add("btn-remover");
  btnRemover.textContent = "✕";
  btnRemover.setAttribute("data-index", indice);
  btnRemover.onclick = function() {
    removerItem(parseInt(this.getAttribute("data-index")));
  };

  acoes.appendChild(btnEditar);
  acoes.appendChild(btnRemover);
  li.appendChild(numSpan);
  li.appendChild(nomeSpan);
  li.appendChild(acoes);

  return li;
}

// EVENTOS DE TECLADO
document.getElementById("username").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    handleLogin();
  }
});

document.getElementById("password").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    handleLogin();
  }
});

document.getElementById("new-item").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    adicionarAoFinal();
  }
});

// INICIALIZAÇÃO
renderizarLista();

// UTILITÁRIOS
function mostrarErro(el, mensagem) {
  el.textContent = mensagem;
  el.classList.remove("hidden");
}

function esconderErro(el) {
  el.classList.add("hidden");
  el.textContent = "";
}