//variáveis de imagens

let imgAtor;
let imgAtorMov;
let imgPiso;
let imgBola1;
let imgBola2;
let imgBola3;
let imgBolas;
let imgPlacar;
let imgVida;
let imgPerdeuVida;
let imgFacil;
let imgMedio;
let imgDificil;
let imgInicio;
let imgGameOver;
let imgBg;
let imgPinoInicio;
let imgBolaInicio;



//variáveis de som
let somStrike;
let somPontos;
let somTrilha1;
let somTrilha;
let bolaDeBoliche;
let somClick;
let somInicial;
let somDerrota;


//Função de load das imagens e sons

function preload() {
  //load das imagens
  imgAtor = loadImage("imagens/pino-de-boliche.png");
  imgAtorMov = loadImage("imagens/pino-de-boliche.gif");
  imgPiso = loadImage("Imagens/piso_boliche.png");
  imgBola1 = loadImage("Imagens/azul.gif");
  imgBola2 = loadImage("Imagens/rosa.gif");
  imgBola3 = loadImage("Imagens/verde.gif");
  imgPlacar = loadImage("Imagens/placar.png");
  imgVida = loadImage("Imagens/vida-1.png");
  imgPerdeuVida = loadImage("Imagens/vida-2.png");
  imgFacil = loadImage("Imagens/facil.png");
  imgDificil = loadImage("Imagens/dificil.png");
  imgMedio = loadImage("Imagens/medio.png");
  imgInicio = loadImage("Imagens/inicio.png");
  imgGameOver = loadImage("Imagens/GameOver.gif");
  imgBg = loadImage("Imagens/img-bg.png");
  imgBolaInicio = loadImage("Imagens/bola-boliche.gif");
  imgPinoInicio = loadImage("Imagens/pino-boliche.gif");


  //criação da lista com as imagens dos carros

  imgBolas = [imgBola1, imgBola2, imgBola3, imgBola1, imgBola2, imgBola3];

  //load dos sons

  somStrike = loadSound("Sons/strike.wav");
  somPontos = loadSound("Sons/pontos.wav");
  somTrilha = loadSound("Sons/trilha.wav");
  bolaDeBoliche = loadSound("Sons/bola_de_boliche.wav");
  somClick = loadSound("Sons/click.wav");
  somInicial = loadSound("Sons/inicial.wav");
  somDerrota = loadSound("Sons/derrota.wav");
  
  
}



