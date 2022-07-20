let xBotao = 275;
let yBtnFacil = 380;
let hBtnFacil = 50;
let wBtnFacil = 150;
let yBtnMedio = 440;
let wBtnMedio = 150;
let hBtnMedio = 50;
let yBotaoDificil = 500;
let wBtnDificil = 150;
let hBtnDificil = 50;
let yBtnInicio = 500;
let wBtnInicio = 150;
let hBtnInicio = 50;
let wBotao = 150;
let hBotao = 50;

function mouseClicked() {
    if (tela === 1) {
        if (mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBtnFacil && mouseY < yBtnFacil + hBotao) {
            somClick.play();
            velocidadeBolas = velocidadeBolasFacil;
            tela = 2;
        }

        if (mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBtnMedio && mouseY < yBtnMedio + hBotao) {
            somClick.play();
            velocidadeBolas = velocidadeBolasMedio;
            tela = 2;
        }

        if (mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBotaoDificil && mouseY < yBotaoDificil + hBotao) {
            somClick.play();
            velocidadeBolas = velocidadeBolasDificil;
            tela = 2;

        }
    }
    if (tela === 3) {
        if (mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > (yBtnInicio - (hBtnFacil / 2)) && mouseY < yBtnInicio + hBotao) {
            somClick.play();
            tela = 1;
            vidas = 3;
            ponto = 0;
        }
    }
}

function mouseOver() {
    if (tela === 1) {
        if (mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBtnFacil && mouseY < yBtnFacil + hBtnFacil) {
            wBtnFacil = 195;
            hBtnFacil = 65;
        } else {
            wBtnFacil = 150;
            hBtnFacil = 50;

        }

        if (mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBtnMedio && mouseY < yBtnMedio + hBtnMedio) {
            wBtnMedio = 195;
            hBtnMedio = 65;
        } else {
            wBtnMedio = 150;
            hBtnMedio = 50;
        }

        if (mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBotaoDificil && mouseY < yBotaoDificil + hBtnDificil) {
            wBtnDificil = 195;
            hBtnDificil = 65;
        } else {
            wBtnDificil = 150;
            hBtnDificil = 50;
        }
    }
    if (tela === 3){
        if (mouseX > xBotao && mouseX < xBotao + wBtnInicio && mouseY > yBtnInicio && mouseY < yBtnInicio + hBtnInicio) {
            wBtnInicio = 195;
            hBtnInicio = 65;
        } else {
            wBtnInicio = 150;
            hBtnInicio = 50;
        }
    }

}