//Todas as funções para criação dos botões, animação dos botões e funcionamento do mouse

let xBotao = 275; //usado em todos os botões

let yBtnFacil = 380;
let hBtnFacil = 50;
let wBtnFacil = 150;

let yBtnMedio = 440;
let wBtnMedio = 150;
let hBtnMedio = 50;

let yBtnDificil = 500;
let wBtnDificil = 150;
let hBtnDificil = 50;

let yBtnInicio = 500;
let wBtnInicio = 150;
let hBtnInicio = 50;


function mouseClicked() {
    if (tela === 1) {
        if (mouseX > xBotao && mouseX < xBotao + wBtnFacil && mouseY > yBtnFacil && mouseY < yBtnFacil + hBtnFacil) {
            somClick.play();
            velocidadeBolas = velocidadeBolasFacil;
            tela = 2;
        }

        if (mouseX > xBotao && mouseX < xBotao + wBtnMedio && mouseY > yBtnMedio && mouseY < yBtnMedio + hBtnMedio) {
            somClick.play();
            velocidadeBolas = velocidadeBolasMedio;
            tela = 2;
        }

        if (mouseX > xBotao && mouseX < xBotao + wBtnDificil && mouseY > yBtnDificil && mouseY < yBtnDificil + hBtnDificil) {
            somClick.play();
            velocidadeBolas = velocidadeBolasDificil;
            tela = 2;
        }
    }

    if (tela === 3) {
        if (mouseX > xBotao && mouseX < xBotao + wBtnInicio && mouseY > (yBtnInicio - (hBtnFacil / 2)) && mouseY < yBtnInicio + hBtnInicio) {
            somClick.play();
            tela = 1;
            vidas = 3;
            ponto = 0;
        }
    }
}

function mouseOver() {
    if (tela === 1) {
        if (mouseX > xBotao && mouseX < xBotao + wBtnFacil && mouseY > yBtnFacil && mouseY < yBtnFacil + hBtnFacil) {
            wBtnFacil = 195;
            hBtnFacil = 65;
        } else {
            wBtnFacil = 150;
            hBtnFacil = 50;
        }

        if (mouseX > xBotao && mouseX < xBotao + wBtnMedio && mouseY > yBtnMedio && mouseY < yBtnMedio + hBtnMedio) {
            wBtnMedio = 195;
            hBtnMedio = 65;
        } else {
            wBtnMedio = 150;
            hBtnMedio = 50;
        }

        if (mouseX > xBotao && mouseX < xBotao + wBtnDificil && mouseY > yBtnDificil && mouseY < yBtnDificil + hBtnDificil) {
            wBtnDificil = 195;
            hBtnDificil = 65;
        } else {
            wBtnDificil = 150;
            hBtnDificil = 50;
        }
    }
    
    if (tela === 3) {
        if (mouseX > xBotao && mouseX < xBotao + wBtnInicio && mouseY > yBtnInicio && mouseY < yBtnInicio + hBtnInicio) {
            wBtnInicio = 195;
            hBtnInicio = 65;
        } else {
            wBtnInicio = 150;
            hBtnInicio = 50;
        }
    }

}