//variáveis ator

const yAtorInicial = 530;
const xAtorInicial = 100;

let xAtor = 100;
let yAtor = 530;
let hAtor = 70;
let wAtor = 30;
let colisao = false;
let movimento = false;

//Funções Ator

function mostraAtor() {
	if (movimento == false) {
		image(imgAtor, xAtor, yAtor, wAtor, hAtor);
	}
	if (movimento == true) {
		image(imgAtorMov, xAtor, yAtor, wAtor, hAtor);
		movimento = false;
	}
}

function moveAtor() {
	if (keyIsDown(UP_ARROW)) {
		yAtor -= 5;
		movimento = true;
	}
	if (keyIsDown(DOWN_ARROW) && yAtor < yAtorInicial) {
		yAtor += 5;
		movimento = true;
	}
	if (keyIsDown(LEFT_ARROW) && xAtor > 0) {
		xAtor -= 5;
		movimento = true;
	}
	if (keyIsDown(RIGHT_ARROW) && xAtor < 670) {
		xAtor += 5;
		movimento = true;
	}

}

function verificaColisao() {
	for (let i = 0; i < imgBolas.length; i++) {
		colisao = collideRectCircle(xAtor, yAtor, wAtor, hAtor, xBolas[i], yBolas[i], raioBola);
		if (colisao) {
			colidiu();
			vidas--;
			// if (maiorQueZero()) {
			//   ponto--;
			// }
		}
	}
}

function colidiu() {
	somStrike.play()
	voltaAtorProInicio();

}


function voltaAtorProInicio() {
	yAtor = yAtorInicial;
	xAtor = xAtorInicial;

}

