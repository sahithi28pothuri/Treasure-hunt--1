var ship, shipMoving;
var bg, bgImg;
var playb, playImg;

var ok, okImg;

var SERVE = 0;
var WAIT = 1;
var PLAY = 2;
var END = 3;
var gameState = SERVE;

var startSound;
var playSound;
var press;

var sea,seaImg;

var water, waterImg;

var stone, stoneImg, stone2Img, stone3Img;
var stoneg;

var coin, coinImg, coinG;

var Score = 0;
var Lives = 3;

var game;

function preload(){
    bgImg = loadImage("Images/bgg.png");
    playImg = loadImage("Images/play.png");
    okImg = loadImage("Images/okb.png");
    waterImg = loadImage("Images/water.png");
    seaImg = loadImage("Images/sea21.jpg");
    shipMoving = loadAnimation("Images/ship1.png","Images/ship2.png");
    startSound = loadSound ("serve.mp3");
    playSound = loadSound("legb.mp3");
    press = loadSound("press.mp3");
    stoneImg = loadImage("Images/stone1.png");
    stone2Img = loadImage("Images/Stone 2.png");
    stone3Img = loadImage("Images/Stone3.png");
    coinImg = loadImage("Images/coin1.png")
}

function setup(){
    createCanvas(1100,800);

    bg = createSprite(500,400);
    bg.addImage("bg",bgImg);
    bg.visible=true;
    bg.scale=1.42;

    water = createSprite(550,400);
    water.addImage("water",waterImg);
    water.visible=false;
    water.scale= 2.8;

    sea = createSprite(550,400);
    sea.addImage("sea",seaImg);
    sea.visible=false;
    sea.scale=6;
    sea.velocityX = -6;

    ship = createSprite(200,500,100,400);
    ship.addAnimation("Ship", shipMoving);
    ship.scale=0.3;
    ship.visible = false;

    stoneg=new Group();
    coinG=new Group();

    game = new Game();
    game.serve();
}

function draw(){

    background(bgImg);

    if(gameState === PLAY){
        game.play();
    }



    // drawSprites();

    // if (gameState === PLAY){
    //     //playSound.play(); 
    //     sea.visible = true;
    //     ship.visible = true;
    //     if (sea.x < 0) {
    //         sea.x = sea.width / 2;
    //     }
    //     spawnStone();
    //     spawnCoin();

    //     if(ship.isTouching(coinG)){
    //         Score = Score+1;
    //         coinG.destroyEach();
    //     }
    //     if(ship.isTouching(stoneg)){
    //         Lives = Lives - 1;
    //         stoneg.destroyEach();
    //     }
    //     textSize(40);
    //     fill("black");
    //     text("Score ="+Score, 100,100);
    //     text("Lives ="+Lives,100,140);

    //     if (keyDown(UP_ARROW)){
    //         ship.y -= 5;
    //     }
    //     if (keyDown(DOWN_ARROW)){
    //         ship.y += 5;
    //     }
    // }

    
}



