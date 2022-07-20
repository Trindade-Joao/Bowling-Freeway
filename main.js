//Funçoes Principais
let tela = 1;


function setup() {
	createCanvas(700, 600);
	somInicial.loop();
}

function draw() {
	mouseOver();
	if (tela === 1) {
		paginaInicial();
	}

	if (tela === 2) {
		paginaPrincipal();
	}
	
	if (tela === 3) {
		paginaFinal();
	}
}