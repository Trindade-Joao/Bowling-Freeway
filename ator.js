//variáveis ator

const yAtorInicial = 530;

let xAtor = 100;
let yAtor = 530;
let hAtor = 70;
let wAtor = 30;
let ponto = 0;
let colisao = false;
let movimento = false;

//Funções Ator

function mostraAtor() {
  if (movimento == false) {
    image(imgAtor, xAtor, yAtor, wAtor, hAtor);
  }
  if (movimento == true) {
    image(imgAtorMov, xAtor, yAtor, wAtor, hAtor);
    movimento = false;
  }
}

function moveAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 5;
    movimento = true;
  }
  if (keyIsDown(DOWN_ARROW) && yAtor < yAtorInicial) {
    yAtor += 5;
    movimento = true;
  }

}

function verificaColisao() {
  for (let i = 0; i < imgBolas.length; i++) {
    colisao = collideRectCircle(xAtor, yAtor, wAtor, hAtor, xBolas[i], yBolas[i], raioBola);
    if (colisao) {
      colidiu();
      if (maiorQueZero()) {
        ponto--;
      }
    }
  }
}

function colidiu() {
  somStrike.play()
  voltaAtorProInicio();

}

function marcaPonto() {
  if (yAtor < 15) {
    somPontos.play()
    ponto++;
    voltaAtorProInicio();

  }

}

function maiorQueZero() {
  return ponto > 0;
}
function mostraPontos() {
  textAlign(CENTER);
  textSize(20);
  fill(245, 7, 241);
  text(ponto, 270, 25,);
}

function voltaAtorProInicio() {
  yAtor = yAtorInicial;
  

}

