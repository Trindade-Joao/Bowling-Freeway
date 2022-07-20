//Funçoes Principais
let tela = 1;


function setup() {
  createCanvas(700, 600);
//   if(tela === 1){
	somInicial.loop();
//   }
//   if(tela === 2){
// 	somTrilha.loop();
//   }
//   if(tela === 3){
// 	somDerrota.loop();
//   }
  
}

function draw() {
	mouseOver();
	if(tela === 1){
		paginaInicial();
	}
	if(tela === 2){
		paginaPrincipal();
	}
	if(tela === 3){
		paginaFinal();
	}
	
}