//variáveis ator

let xAtor = 100;
let yAtor = 366;
let diaAtor = 30;
let ponto = 0;
let colisao = false;

//Funções Ator

function mostraAtor(){
  image(imgAtor, xAtor, yAtor, diaAtor, diaAtor);
   
}

function moveAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 5;
    }
    if(keyIsDown(DOWN_ARROW) && yAtor < 368){
        yAtor += 5;
    }  
}

function verificaColisao(){
    for (let i = 0; i < imgCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], compCarro, altCarro, xAtor, yAtor, 15);
      if(colisao){
        colidiu();
        if (maiorQueZero()){
          ponto--;
        }
      } 
   }    
}

function colidiu(){
  somColidiu.play()
  voltaAtorProInicio();

}

function marcaPonto(){
    if(yAtor < 15){
      somPontos.play()
      ponto++;
      voltaAtorProInicio();
    }
  
}

function maiorQueZero(){
  return ponto > 0;
}
function mostraPontos(){
  textAlign(CENTER);  
  textSize(20);
  fill(245, 7, 241);
  text(ponto, 270, 25,);
}
  
function voltaAtorProInicio(){
    yAtor = 366;
}