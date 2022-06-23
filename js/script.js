// Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}
parametros.forEach(ativarProduto);

// Perguntas frequentes

const questions = document.querySelectorAll(".perguntas button");

function eventQuestions(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const response = document.getElementById(controls);
  response.classList.toggle("ativa");
  const active = response.classList.contains("ativa");
  question.setAttribute("aria-expanded", active);
}

function currentQuestions(question) {
  question.addEventListener("click", eventQuestions);
}

questions.forEach(currentQuestions);

// Galeria de Bicicletas

const galery = document.querySelectorAll(".bicicleta-imagens img");

const galeryContainer = document.querySelector(".bicicleta-imagens");

function exchargeGalery(event) {
  const img = event.currentTarget;
  const average = window.matchMedia("(min-width: 1000px)").matches;
  if (average) {
    galeryContainer.prepend(img);
  }
}

function eventsGalery(img) {
  img.addEventListener("click", exchargeGalery);
}

galery.forEach(eventsGalery);

// Animaçao

if (window.SimpleAnime) {
  new SimpleAnime();
}
