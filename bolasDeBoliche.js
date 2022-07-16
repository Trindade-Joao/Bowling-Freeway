//variáveis dos carros

let diametroBola = 50;
let raioBola = 25

//listas dos carros

let xBolas = [600, 600, 600, 600, 600, 600];
let yBolas = [45, 130, 225, 310, 395, 480];
let velocidadeBolas = [2, 2.5, 3.2, 5, 3.3, 2.2];


//Funções carros
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
                //bolaDeBoliche.play()
            }
        }
    }
}