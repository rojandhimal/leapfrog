function Game(canvas, ctx) {
    console.log(canvas);
    canvas.width = 1280;
    canvas.height = 650;
    var that = this;

    var frames = 0;
    this.enemyArray = [];
    // this.maxYPos = -150;

    //load sprite image
    var sprite_bg = new Image();
    sprite_bg.src = 'images/bg_01.png';

    //background image setup
    this.sX = 0;
    this.sY = 0;
    this.width = 1280;
    this.height = 700;
    this.x = 0; // destination left position
    this.y = canvas.height - this.height; //destination top position

    //GAME STATE
    var state = {
        current: 0,
        getReady: 0,
        game: 1,
        over: 2
    };

    var score = 0;
    var best = score;

    // this.baseGround = new BaseGround(canvas.height);
    this.hero = new Hero(game1);
    this.map = new Maps(game1);
    this.map.init();

    this.gameLoop = function() {
        that.control();
        that.draw();
        that.update();
        // console.log(frames);
        
        frames++;
        requestAnimationFrame(that.gameLoop);
    }

    this.draw = function() {

        //bg color
        ctx.fillStyle = '#4ec0ca';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // background image draw
        ctx.drawImage(sprite_bg, this.sX, this.sY, this.width, this.height,
            this.x, this.y, this.width, this.height);

        // this.pipe.draw(ctx, this.pipeArray);
        // this.baseGround.draw(ctx);
        this.hero.draw(ctx);
        this.map.drawMap(ctx);


        if (state.current == state.getReady) {
            // ctx.drawImage(sprite, 0, 229, 173, 45,
            //     canvas.width / 2 - 173 / 2, 130, 173, 45);
            // ctx.strokeText("Tap to play", 100, 200);
        }

        //game over message
        if (state.current == state.over) {
            // ctx.drawImage(sprite, 175, 229, 225, 200,
            //     canvas.width / 2 - 225 / 2, 150, 225, 200);
        }
        // that.renderCurrentScore(ctx);

    }


    this.update = function() {
        // if (state.current == state.game) {
        //     that.bird.update();
        //     that.baseGround.update();
        //     that.checkGroundCollision();
        //     that.generatePipes();
        //     that.checkPipeCollision();
        // }
    }

    this.control = function() {

        canvas.addEventListener('click', function(event) {
            switch (state.current) {
                case state.getReady:
                    
                case state.game:
                   
                case state.over:
                   
                    break;
            }
        });
    }


  

}

var canvas1 = document.getElementById('gameCanvas');
var ctx1 = canvas1.getContext('2d');
var game1 = new Game(canvas1, ctx1).gameLoop();

// var canvas2 = document.getElementById('game-container2');
// var ctx2 = canvas2.getContext('2d');
// var game2 = new Game(canvas2, ctx2).gameLoop();