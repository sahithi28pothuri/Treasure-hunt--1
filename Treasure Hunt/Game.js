class Game{
    constructor(){
        this.playB = createButton('');
        this.okB = createButton('')

    }

    gameElements1(){
        this.playB.class('playButton');
        this.playB.position(500,500);
    }

    gameElements2(){
        this.okB.class('okButton');
        this.okB.position(500,500);
    }

    hide(){
        this.playB.hide();
        this.okB.hide();
    }

    serve(){
        image(bgImg,550,400);
        this.gameElements1();
        this.playB.mousePressed(()=>{
            this.wait();
        })
    }

    wait(){
        this.playB.hide();
        this.gameElements2();

        // playb.visible = false;
        bg.visible = false;
        
        textSize(80);
        fill("black");
        text("RULES:-",420,100);
        text("OBJECTIVES:-",300,370);
        textSize(50);
        fill("black");
        text("1)Use UP ARROW and DOWN ARROW to make the ship move UP and DOWN respectively",10,180);
        text("the ship move UP and DOWN respectively",50,240);
        text("1) Collect 25 coins as possible",20,440);
        text("2) Do not touch the stones",20,500);
        // ok.visible = true;
        water.visible = true;
        this.okB.mousePressed(()=>{
            this.okB.hide();
            gameState = PLAY;
        })  
    }

    play(){

        // water.visible = false;
        // ok.visible = false;

        drawSprites();
        this.spawnStone();
        this.spawnCoin();

        // playSound.loop(); 
        sea.visible = true;
        ship.visible = true;

        if (sea.x < 0) {
            sea.x = sea.width / 2;
        }

        if(ship.isTouching(coinG)){
            Score = Score+1;
            coinG.destroyEach();
        }
        if(ship.isTouching(stoneg)){
            Lives = Lives - 1;
            stoneg.destroyEach();
        }
        textSize(40);
        fill("black");
        text("Score ="+Score, 100,100);
        text("Lives ="+Lives,100,140);

        if (keyDown(UP_ARROW)){
            ship.y -= 5;
        }
        if (keyDown(DOWN_ARROW)){
            ship.y += 5;
        }

    }

    spawnStone() {
        if (frameCount % 200 === 0) {
          var stone = createSprite(1200,500,40,10);
          stone.y = Math.round(random(300,700));
          var rand = Math.round(random(1,3));
          switch(rand) {
            case 1: stone.addImage(stoneImg);
                    break;
            case 2: stone.addImage(stone2Img);
                    break;
            case 3: stone.addImage(stone3Img);
                    break;
          }
          stone.scale = 0.6;
          stone.velocityX = -6
          stone.lifetime = 1200;
          stoneg.add(stone);
        }
    }

    spawnCoin(){
        if (frameCount % 300 === 0) {
            var coin = createSprite(1200,500,40,10);
            coin.y = Math.round(random(300,700));
            coin.addImage("coins", coinImg)
            coin.scale = 0.2;
            coin.velocityX = -6
            coin.lifetime = 1200;
            coinG.add(coin);
          }
    }
    
}