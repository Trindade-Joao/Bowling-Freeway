//Funçoes Principais


function setup() {
    createCanvas(500, 400);
    somTrilha.loop()
  }
  
  function draw() {
    background(imgEstrada);
    mostraAtor();
    moveAtor();
    mostraCarro();
    moveCarro();
    reiniciarCarros();
    marcaPonto();
    mostraPontos();
    verificaColisao();
    
  
  }