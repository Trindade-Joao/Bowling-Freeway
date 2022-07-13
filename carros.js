//variáveis dos carros

let compCarro = 70;
let altCarro = 40;

//listas dos carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 262, 317];
let veloCarros = [2, 2.5, 3.2, 5, 3.3, 2.2];


//Funções carros
function mostraCarro(){ 
    for(let i = 0; i < imgCarros.length; i++){
        image(imgCarros[i], xCarros[i], yCarros[i], compCarro, altCarro);    
    }

}
  
function moveCarro(){
    for(let i = 0; i < imgCarros.length; i++){
        xCarros[i] -= veloCarros[i];
    }
}

function fimDaTela(xCarro){
    return xCarro < -50;
}

function reiniciarCarros(){
  
    for(let i = 0; i < imgCarros.length; i ++){
        if(fimDaTela(xCarros[i])){
            xCarros[i] = 600;
        }
    }    
}