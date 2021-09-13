var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var gameOver,gameOverpng;





//Game States.
var PLAY=1;
var END=0;
var gameState=1;





//loading images before use.
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  gameOverpng =loadImage("gameOver.png");
}



//creating objects.
function setup(){
  
  createCanvas(400,600);
// Moving background.
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running.
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
 
gameOver = createSprite(200,300)
gameOver.addImage(gameOverpng)
gameOver.scale = 0.9;


cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}



function draw() {
   
  




  //if condition for play state.
  if(gameState===PLAY){
    



  //making game over sprite invisible.
  gameOver.visible = false;
 


  //adding background.
   background(0);




  //making boy move with mouse.
  boy.x = World.mouseX;
  



  //making boy collide with walls.
  edges= createEdgeSprites();
  boy.collide(edges);
  


  //code to reset the background.
  if(path.y > 400 ){
    path.y = height/2;
  }
  


  //executing functions.
    createCash();
    createDiamonds();
    createJwellery();
    createSword();



  //if condition for  when boy touches something.
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+200;
      
    }else{
      if(swordGroup.isTouching(boy)) {
         gameState=END;
      

    }
  }
  


  //if condition for end state.
  if (gameState===END) {
     

    //making game over appear at end.
    gameOver.visible = true;


    //making everything stop moving.
    swordGroup.setVelocityYEach(0);
       swordGroup.setLifetimeEach(-1);
       
       jwelleryG.setVelocityYEach(0);
       jwelleryG.setLifetimeEach(-1);
       
       diamondsG.setVelocityYEach(0);
       diamondsG.setLifetimeEach(-1);
        
       cashG.setVelocityYEach(0);
       cashG.setLifetimeEach(-1);

       path.velocityY=0;
       


  }



  //making sprite actually appear.
  drawSprites();
   


  //making treasure counter.
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,20,30);


  }

}




//function for making cash
function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}


//function for making diamonds
function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}


//function for making jewelery
function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 200;
  jwelleryG.add(jwellery);
  }
}


//function for making swords 
function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}


//end of code