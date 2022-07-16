//Todas as funções relacionadas a pontuação e vidas

let ponto = 0;

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
    text(ponto, 350, 30,);
  }
  function mostraPlacar(){
    image(imgPlacar, 300, -8, 100, 60);
  }
  
