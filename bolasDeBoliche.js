//variáveis das bolas

let diametroBola = 50;
let raioBola = 25;

let velocidadeBolas = [];
let velocidadeBolasFacil = [2, 2.5, 3.2, 5, 3.3, 2.2];
let velocidadeBolasMedio = [4, 4.5, 5.2, 7, 5.3, 4.2];
let velocidadeBolasDificil = [6, 6.5, 7.2, 9, 7.3, 6.2];

//listas das bolas

let xBolas = [600, 600, 600, 600, 600, 600];
let yBolas = [45, 130, 225, 310, 395, 480];



//Funções bolas
function mostraBolaDeBoliche() {
    for (let i = 0; i < imgBolas.length; i++) {
        image(imgBolas[i], xBolas[i], yBolas[i], diametroBola,);
    }
}

function moveBolaDeBoliche() {
    for (let i = 0; i < imgBolas.length; i++) {
        xBolas[i] -= velocidadeBolas[i];
    }
}

function fimDaTela(xBolas) {
    return xBolas < -50;
}

function reiniciarBolasDeBoliche() {
    for (let i = 0; i < imgBolas.length; i++) {
        if (fimDaTela(xBolas[i])) {
            xBolas[i] = 780;
            if (i % 2 == 1) {
                bolaDeBoliche.play();
            }
        }
    }
}