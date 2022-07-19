//Todas as funções relacionadas a pontuação e vidas

let ponto = 0;
let hVida = 35;
let wVida = 30;
let vidas = 3;
let xVidas = [670, 640, 610];

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
  textSize(28);
  fill(255, 255, 20);
  text(ponto, 350, 30);
}
function mostraPlacar() {
  image(imgPlacar, 300, -8, 100, 60);
}

function mostraVida() {
  for (let i = 0; i < vidas; i++) {
    image(imgVida, xVidas[i], 3, wVida, hVida);
  }
  for (let i = 3; i >= vidas; i--){
    image(imgPerdeuVida, xVidas[i], 3, wVida, hVida);
  }
}
function fimDeJogo(){
  if (vidas < 0 ){
    tela = 3;
  }
}