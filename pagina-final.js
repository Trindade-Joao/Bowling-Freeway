let yBotaoInicio = 500

function paginaFinal(){
    background(0);
    image(imgGameOver, 20, 10, 650, 400)
    image(imgInicio, xBotao, yBotaoInicio, wBotao, hBotao);
    pontuacaoMaxima()
    somTrilha = somDerrota;
}

function pontuacaoMaxima(){
    textSize(30);
    fill(255);
    textAlign(CENTER);
    text("Sua pontuação foi:", width / 2, 350)
    text(ponto, width / 2, 400)
}

