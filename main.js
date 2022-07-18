//Funçoes Principais
let pagina = 3;


function setup() {
  createCanvas(700, 600);
  //somTrilha.loop()
}

function draw() {
	if(pagina === 1){
		paginaInicial();
	}
	if(pagina === 2){
		paginaPrincipal();
	}
	if(pagina === 3){
		paginaFinal();
	}
}