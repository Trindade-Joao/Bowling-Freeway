//variáveis de imagens

let imgAtor;
let imgAtorMov;
let imgPiso;
let imgBola1;
let imgBola2;
let imgBola3;
let imgBolas;


//variáveis de som
let somStrike;
let somPontos;
let somTrilha;
let bolaDeBoliche;


//Função de load das imagens e sons

function preload() {
  //load das imagens
  imgAtor = loadImage("imagens/pino-de-boliche.png");
  imgAtorMov = loadImage("imagens/pino-de-boliche.gif");
  imgPiso = loadImage("Imagens/piso_boliche.png");
  imgBola1 = loadImage("Imagens/azul.gif");
  imgBola2 = loadImage("Imagens/rosa.gif");
  imgBola3 = loadImage("Imagens/verde.gif");



  //criação da lista com as imagens dos carros

  imgBolas = [imgBola1, imgBola2, imgBola3, imgBola1, imgBola2, imgBola3];

  //load dos sons

  somStrike = loadSound("Sons/strike.wav");
  somPontos = loadSound("Sons/pontos.wav");
  somTrilha = loadSound("Sons/trilha.wav");
  bolaDeBoliche = loadSound("Sons/bola_de_boliche.wav");

}



