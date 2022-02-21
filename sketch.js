var cat;
var bgImg;
var mouse
function preload() {
    //carregue as imagens aqui
  
  bgImg= loadImage("images/garden.png");
  catimg1 = loadImage("images/cat1.png");
  mouseimg1 = loadAnimation("images/mouse1.png");
  catimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
  catimg3 = loadImage("images/cat4.png");
  mouseimg2= loadAnimation("images/mouse2.png", "images/mouse3.png");
  mouseimg3= loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
   cat = createSprite(870,630);
   cat.addAnimation("gatoAndando", catimg2);
   cat.addAnimation("gatoSentado", catimg3);
   cat.scale= 0.2

   mouse = createSprite(200,630);
   mouse.addAnimation("ratoQuieto", mouseimg1);
   mouse.addAnimation("ratoProvoca",mouseimg2);
   mouse.addAnimation("ratoFeliz",mouseimg3)
   mouse.scale= 0.2
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
   
    drawSprites();
    if(cat.x = mouse.x <(cat.width = mouse.width)/2){
      cat.velocityX=0;
      cat.changeAnimation("gatoSentado", catimg3);
      cat.changeAnimation(catimg3);
      cat.x = 370
      cat.scale = 0.2;
      mouse.velocityX=0;
      mouse.changeAnimation("ratoFeliz", catimg3);
      mouse.changeAnimation(mouseimg3);
      mouse.x = 280
      }

}
function KeyPressed(){ 
  if (KeyCode===LEFT_ARROW){
  mouse.addAnimation("ratoProvoca", mouseimg2);
  mouse.changeAnimation("ratoProvoca");
  mouse.frameDelay = 25
  cat.velocityX= -5
 
  }
}

