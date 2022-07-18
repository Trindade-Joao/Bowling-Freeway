//Funçoes Principais


function setup() {
  createCanvas(700, 600);
  //somTrilha.loop()
}

function draw() {
  background(imgPiso);
  mostraPlacar();
  mostraVida();
  mostraBolaDeBoliche();
  moveBolaDeBoliche();
  moveAtor();
  mostraAtor();
  reiniciarBolasDeBoliche();
  marcaPonto();
  mostraPontos();
  verificaColisao();


}