// Solicita ao usuário o número de cartas a serem usadas no jogo
let quantCartas = prompt("Com quantas cartas deseja jogar?");

// Executa um loop até que o usuário insira um número válido de cartas (entre 4 e 14, e com quantidade par)
while (quantCartas > 14 || quantCartas < 4 || quantCartas % 2 !== 0) {
  quantCartas = prompt("Com quantas cartas deseja jogar?");
}

// Seleciona o elemento <main> do documento HTML e a carta de jogo inicial (que será removida)
const main = document.querySelector("main");
const cartaInicial = document.querySelector(".carta-jogo");
cartaInicial.remove();

// Cria um array com as URLs das imagens dos papagaios que serão usados no jogo
const imagens = [
    '././projeto__parrots__imagens (1)/imagens-uteis/bobrossparrot.gif',
    './projeto__parrots__imagens (1)/imagens-uteis/explodyparrot.gif',
    './projeto__parrots__imagens (1)/imagens-uteis/fiestaparrot.gif',
    './projeto__parrots__imagens (1)/imagens-uteis/metalparrot.gif',
    './projeto__parrots__imagens (1)/imagens-uteis/revertitparrot.gif',
    './projeto__parrots__imagens (1)/imagens-uteis/tripletsparrot.gif',
    './projeto__parrots__imagens (1)/imagens-uteis/unicornparrot.gif'
];

// Seleciona a metade das imagens de papagaios que serão usadas no jogo (de acordo com o número de cartas)
const imagensSelecionadas = imagens.slice(0, quantCartas / 2);

// Cria um novo array com as imagens selecionadas, duplicando-as para que haja pares de cartas
const todasAsImagens = imagensSelecionadas.concat(imagensSelecionadas);

// Embaralha o array de imagens aleatoriamente
todasAsImagens.sort(() => Math.random() - 0.5);

// Cria as cartas do jogo, adicionando uma imagem de papagaio de costas a cada uma delas
for (let i = 0; i < quantCartas; i++) {
  const novaCarta = document.createElement("div");
  novaCarta.className = "carta-jogo";
  novaCarta.innerHTML =
    '<img class="papagaio" src="./projeto__parrots__imagens (1)/imagens-uteis/back.png" alt="">';
  novaCarta.setAttribute("data-image", todasAsImagens[i]);
  main.appendChild(novaCarta);
}

// Seleciona todas as cartas do jogo e adiciona um evento de clique a cada uma delas
const cartas = document.querySelectorAll(".carta-jogo");

cartas.forEach((carta) => {
  carta.addEventListener("click", () => {
    if (!carta.classList.contains("virada")) {
      carta.classList.add("virada");
      const imagem = carta.getAttribute("data-image");
      const papagaio = carta.querySelector(".papagaio");
      papagaio.setAttribute("src", imagem);
    }
  });
});



/*let primeiraCartaVirada = null;
let segundaCartaVirada = null;

function verificarIguais() {
  if (
    primeiraCartaVirada !== null &&
    segundaCartaVirada !== null &&
    primeiraCartaVirada.getAttribute('data-image') === segundaCartaVirada.getAttribute('data-image')
  ) {
    primeiraCartaVirada.removeEventListener('click', clicarCarta);
    segundaCartaVirada.removeEventListener('click', clicarCarta);
    primeiraCartaVirada = null;
    segundaCartaVirada = null;
  } else if (primeiraCartaVirada !== null && segundaCartaVirada !== null) {
    setTimeout(() => {
      primeiraCartaVirada.classList.remove('virada');
      segundaCartaVirada.classList.remove('virada');
      primeiraCartaVirada = null;
      segundaCartaVirada = null;
    }, 1000);
  }
}

function clicarCarta() {
  if (!this.classList.contains('virada')) {

    if (primeiraCartaVirada === null) {
      primeiraCartaVirada = this;
    } else {
      segundaCartaVirada = this;
      verificarIguais();
    }

    this.classList.add('virada');

  }
}

cartas.forEach(carta => carta.addEventListener('click', clicarCarta));*/