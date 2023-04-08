<<<<<<< HEAD
let quantCartas = prompt("Com quantas cartas deseja jogar?");

=======
// Solicita ao usuário o número de cartas a serem usadas no jogo
let quantCartas = prompt("Com quantas cartas deseja jogar?");

// Executa um loop até que o usuário insira um número válido de cartas (entre 4 e 14, e com quantidade par)
>>>>>>> 07c7513cba291fd6b3d49956de3f282aef1d01a7
while (quantCartas > 14 || quantCartas < 4 || quantCartas % 2 !== 0) {
  quantCartas = prompt("Com quantas cartas deseja jogar?");
}

<<<<<<< HEAD
const main = document.querySelector("main");
const cartaInicial = document.querySelector(".carta-jogo");

const imagens = [
  './imagens-uteis/bobrossparrot.gif',
  './imagens-uteis/explodyparrot.gif',
  './imagens-uteis/fiestaparrot.gif',
  './imagens-uteis/metalparrot.gif',
  './imagens-uteis/revertitparrot.gif',
  './imagens-uteis/tripletsparrot.gif',
  './imagens-uteis/unicornparrot.gif'
];

const imagensSelecionadas = imagens.slice(0, quantCartas / 2);

const todasAsImagens = imagensSelecionadas.concat(imagensSelecionadas);

todasAsImagens.sort(() => Math.random() - 0.5);

for (let i = 0; i < quantCartas; i++) {
  main.innerHTML += `
  <div  class ="carta-jogo" >
 <div class="front-face face">
     <img src="./imagens-uteis/back.png" alt="">
   </div>
   <div class="back-face face">
     <img src="${todasAsImagens[i]}" alt="">
 </div>
</div>`
}

const cartas = document.querySelectorAll(".carta-jogo");

let cont = 0;
let primeiraCartaVirada = '';
let segundaCartaVirada = '';
let contarPares = 0;

function checarPares(a, b) {
  if (a.querySelector('.back-face>img').src === b.querySelector('.back-face>img').src) {
    cont = 0;
    a = '';
    b = '';
    contarPares++;
  } else if (a.querySelector('.back-face>img').src !== b.querySelector('.back-face>img').src) {
    cont = 0;
    a.classList.remove('virada');
    b.classList.remove('virada');
    console.log(a);
    console.log(b);
    console.log(cont);
    a = '';
    b = '';
  }
  if(contarPares===quantCartas/2){
    alert (`Você ganhou em ${jogadas} jogadas!`);
  }
}

let jogadas = 0;

cartas.forEach((carta) => {
  carta.addEventListener("click", () => {
    if (!carta.classList.contains("virada") && cont < 1) {
      carta.classList.add("virada");
      cont++;
      primeiraCartaVirada = carta;
      jogadas++;
    } else if (!carta.classList.contains("virada") && cont < 2) {
      carta.classList.add("virada");
      cont++;
      segundaCartaVirada = carta;
      setTimeout(checarPares,1000,primeiraCartaVirada,segundaCartaVirada);
      jogadas++;
    }
  });
})

=======
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
>>>>>>> 07c7513cba291fd6b3d49956de3f282aef1d01a7
