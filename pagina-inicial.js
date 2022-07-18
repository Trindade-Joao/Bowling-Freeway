let xBotao1 = 275;
let yBotao1 = 300;
let wBotao = 150;
let hBotao = 50;

function paginaInicial(){
    background(255, 26, 30);
    botao(xBotao1, yBotao1, "Fácil" );
    
    

}

function botao(x, y, texto){
    rect(x, y, wBotao, hBotao, 30);
    textSize(25)
    textAlign(CENTER)
    text(texto , x + 75, y + 30);
    
}


function mouseClicked(){
    if(mouseX >= xBotao1 && mouseX <= (xBotao1 + wBotao) && mouseY >= yBotao1 && mouseY <= (yBotao1 + hBotao)){
        if(pagina === 1){
            pagina = 2;            
        }
    }
}
