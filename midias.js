//variáveis de imagens

let imgAtor;
let imgEstrada;
let imgCarro1;
let imgCarro2;
let imgCarro3;
let imgPolicia;
let imgCarros;


//variáveis de som
let somColidiu;
let somPontos;
let somTrilha;


//Função de load das imagens e sons

function preload(){
  //load das imagens
  imgAtor = loadImage("Imagens/ator-1.png");
  imgEstrada = loadImage("Imagens/estrada.png");
  imgCarro1 = loadImage("Imagens/carro-1.png");
  imgCarro2 = loadImage("Imagens/carro-2.png");
  imgCarro3 = loadImage("Imagens/carro-3.png");
    
  
  //criação da lista com as imagens dos carros
  
  imgCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro1, imgCarro2, imgCarro3];
  
  //load dos sons

  somColidiu = loadSound("Sons/colisao.wav");
  somPontos = loadSound("Sons/pontos.wav");
  somTrilha = loadSound("Sons/trilha.wav");
  
}

  
  
