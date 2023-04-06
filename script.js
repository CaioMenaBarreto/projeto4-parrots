let quantCartas = prompt("Com quantas cartas deseja jogar?");

while(quantCartas>14 || quantCartas<4 || quantCartas%2 !== 0){
    quantCartas = prompt("Com quantas cartas deseja jogar?");
}

const main = document.querySelector("main");
const cartaInicial = document.querySelector(".carta-jogo");
cartaInicial.remove();


for (let i = 0; i < quantCartas; i++) {
    const novaCarta = document.createElement("div");
    novaCarta.className = "carta-jogo";
    novaCarta.innerHTML =
      '<img class="papagaio" src="./projeto__parrots__imagens (1)/imagens-uteis/back.png" alt="">';
    main.appendChild(novaCarta);
  }