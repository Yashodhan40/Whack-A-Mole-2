var mole;
var circle1,circle2,circle3,circle4,circle5,circle6;
var circle7,circle8,circle8,circle9,circle10,circle11,circle12;
var hammer;
var hammerIMg,moleIMG;
var gameState=0;
function preload(){
      moleIMG=loadImage("download22.jpg");
      hammerIMg = loadImage("download24.jpg");
}
function setup(){
      createCanvas(400,300);
      mole = createSprite(-20,-20,10,10);
      mole.shapeColor="red";
      mole.addImage(moleIMG);
      mole.scale=0.1;
      circle1 = new Circle(60,60);
      circle2 = new Circle(110,60);
      circle3 = new Circle(160,60);
      circle4 = new Circle(210,60);
      circle5 = new Circle(260,60);
      circle6 = new Circle(310,60);
      
      circle7 = new Circle(60,120);
      circle8 = new Circle(110,120);
      circle9 = new Circle(160,120);
      circle10 = new Circle(210,120);
      circle11 = new Circle(260,120);
      circle12 = new Circle(310,120);

      hammer = createSprite(200,200,20,20);
      hammer.shapeColor="gold";
      hammer.addImage(hammerIMg);
      hammer.scale=0.2;
      
}
function draw(){
      background(255);
      if (gameState===0){
            fill(140,90,200);
            textSize(20);
            text("U have to hit the mole with the hammer",30,200);
            text("Press 'Space' to play",100,230);
                  if (keyCode===32){
                        gameState=1;
                  }
      }
      if (gameState===1){
             hammer.x=mouseX;
             hammer.y=mouseY;
               
       if (frameCount%15===0){
            var rand = Math.round(random(1,12));
            switch(rand){
            case 1:mole.y=61,mole.x=60;
            break;
            case 2:mole.y=61,mole.x=110;
            break;
            case 3:mole.y=61,mole.x=160;
            break;
            case 4:mole.y=61,mole.x=210;
            break;
            case 5:mole.y=61,mole.x=260;
            break;
            case 6:mole.y=61,mole.x=310;
            break;
            case 7:mole.y=121,mole.x=60;
            break;
            case 8:mole.y=121,mole.x=110;
            break;
            case 9:mole.y=121,mole.x=160;
            break;
            case 10:mole.y=121,mole.x=210;
            break;
            case 11:mole.y=121,mole.x=260;
            break;
            case 12:mole.y=121,mole.x=310;
            break;
            default:break;
       }

      }
      if (mousePressedOver(mole)){
             gameState=2;
      }
      }
      if (gameState===2){
            textSize(20);
            fill(30,200,90);
            text("You Win",160,180);
            text("Press R to restart",100,220);
             if (keyCode===114){
                     gameState=3;
             }
            }
      if (gameState===3){
             gameState=0;
      }

      
      circle1.display();
      circle2.display();
      circle3.display();
      circle4.display();
      circle5.display();
      circle6.display();
      circle7.display();
      circle8.display();
      circle9.display();
      circle10.display();
      circle11.display();
      circle12.display();
     
      
      drawSprites();
}