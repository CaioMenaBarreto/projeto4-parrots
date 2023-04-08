let quantCartas = prompt("Com quantas cartas deseja jogar?");

while (quantCartas > 14 || quantCartas < 4 || quantCartas % 2 !== 0) {
  quantCartas = prompt("Com quantas cartas deseja jogar?");
}

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

