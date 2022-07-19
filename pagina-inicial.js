let xBotao = 275;
let yBotaoFacil = 380;
let yBotaoMedio = 440;
let yBotaoDificil = 500;
let wBotao = 150;
let hBotao = 50;






function paginaInicial(){
    background(0);
    image(imgFacil, xBotao, yBotaoFacil, wBotao, hBotao);
    image(imgMedio, xBotao, yBotaoMedio, wBotao, hBotao);
    image(imgDificil, xBotao, yBotaoDificil, wBotao, hBotao); 
    
}

function mouseClicked(){
    if (tela === 1){
        if(mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBotaoFacil && mouseY < yBotaoFacil + hBotao){
            somClick.play();
            velocidadeBolas = velocidadeBolasFacil;
            tela = 2;
        }
 
        if(mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBotaoMedio && mouseY < yBotaoMedio + hBotao){
            somClick.play();
            velocidadeBolas = velocidadeBolasMedio;
            tela = 2;
        }
  
        if(mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBotaoDificil && mouseY < yBotaoDificil + hBotao){
            somClick.play();
            velocidadeBolas = velocidadeBolasDificil;
            tela = 2;

        }
    }
    if (tela === 3){
        if(mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBotaoInicio && mouseY < yBotaoInicio + hBotao){
            somClick.play();
            tela = 1;
            vidas = 3;
            ponto = 0;
        }
    }
}
// function mouseOver(){    
//     if (tela === 1){
//         if(mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBotaoFacil && mouseY < yBotaoFacil + hBotao){
           
//         }
//     }
//     if (tela === 1){
//         if(mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBotaoMedio && mouseY < yBotaoMedio + hBotao){
//             g = random(0, 255);
//         }
//     }
//     if (tela === 1){
//         if(mouseX > xBotao && mouseX < xBotao + wBotao && mouseY > yBotaoDificil && mouseY < yBotaoDificil + hBotao){
//             g = random(0, 255);
//         }
//     }
   
// }

