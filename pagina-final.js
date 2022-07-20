

function paginaFinal() {
    background(0);
    image(imgGameOver, 10, 50, 680, 300)
    image(imgInicio, width / 2 - (wBtnInicio / 2), yBtnInicio - (hBtnInicio / 5), wBtnInicio, hBtnInicio);
    pontuacaoMaxima()
    somTrilha = somDerrota;
}

function pontuacaoMaxima() {
    textSize(30);
    fill(255);
    textAlign(CENTER);
    text("Sua pontuação foi:", width / 2, 350)
    text(ponto, width / 2, 400)
}

