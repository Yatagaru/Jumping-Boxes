var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, bordas;
var musica;

function preload(){
   
    // carregue o som aqui
    // Professora, eu escrevo o codigo de som normalmente, mas por algum motivo ele
    //não funciona e o jogo fica parado na tela branca
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(bloco1.x+295,580,200,30);
    bloco2.shapeColor = "orange";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(510,580,200,30);
    bloco3.shapeColor = "purple";
    
    bloco4 = createSprite(715,580,170,30);
    bloco4.shapeColor = "red";
    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 5;
    bola.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    bordas=createEdgeSprites();
    bola.bounceOff(bordas);

    
    //escreva o código para a bola quicar no bloco1
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        bola.velocityX = 15
        bola.velocityY = -15
        
    }


    if(bloco2.isTouching(bola) && bola.bounceOff(bloco2)){
        bola.shapeColor = "orange";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.velocityX = 8;
        bola.velocityY = -8;
        
    }
     //escreva o código para a bola quicar no bloco
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
       bola.shapeColor = "purple";
       bola.velocityX = 3;
       bola.velocityY = -3;
    }
    //escreva o código para a bola quicar no bloco4
    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
     bola.shapeColor = "red";
     bola.velocityX = 12;
     bola.velocityY = -12;

    
    } 

    drawSprites();
}