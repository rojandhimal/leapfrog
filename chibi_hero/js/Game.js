

function Game(canvas, ctx) {
    // console.log(canvas);
    canvas.width = 1200;
    canvas.height = 650;
    var that = this;

    var frames = 0;
    this.enemyArray = [];
    // this.maxYPos = -150;

    //load sprite image
    var sprite_bg = new Image();
    sprite_bg.src = 'images/bg_01.png';

    this.sprite_hero_1 = new Image();
    this.sprite_hero_1.src = 'images/chibihero01_idle.png';
    this.goRightSprite = new Image();
    this.goRightSprite.src = 'images/chibichar_sheet1.png';
    this.goLeftSprite = new Image();
    this.goLeftSprite.src = 'images/chibichar_sheet3.png';

    this.sprite_enemy_1 = new Image();
    this.sprite_enemy_1.src = 'images/enemy01_sheet0.png';
    this.surikenSprite = new Image();
    this.surikenSprite.src = 'images/shuriken_item_sheet0.png';

    this.initialScreen = new Image();
    this.initialScreen.src = 'images/initialscreen_sheet0.png';


    this.overScreen = new Image();
    this.overScreen.src = 'images/game_over_screen_sheet0.png';

    this.winScreenSprite=new Image();
    this.winScreenSprite.src='images/winscreen_sheet0.png';

    this.startBtn = new Image();
    this.startBtn.src = 'images/btn_yes_sheet0.png';

    this.yesBtn = new Image();
    this.yesBtn.src = 'images/btn_yes_newgame_sheet0.png';

    this.noBtn = new Image();
    this.noBtn.src = 'images/btnno_sheet0.png';

    this.priofileSprite = new Image();
    this.priofileSprite.src = 'images/lifeiconchar_sheet0.png';


    // LOAD SOUNDS
    const coin_audio = new Audio();
    coin_audio.src = "audio/coin.mp3";




    this.currentAnimation = this.sprite_hero_1;
    this.checkCollision;
    //background image setup
    this.sX = 0;
    this.sY = 0;
    this.width = 1280;
    this.height = 700;
    this.x = 0; // destination left position
    this.y = canvas.height - this.height; //destination top position

    this.setviewportX = 0;
    this.setviewportY = 0;



    this.gravity = 3;
    this.hold = 1;        //hold has two value true orfalse if true hero is hold in tile else fall

    //GAME STATE
    var state = {
        current: 0,
        getReady: 0,
        game: 1,
        over: 2,
        win: 2
    };



    // GET READY MESSAGE

    this.drawInitialScreen = function () {
        if (state.current == state.getReady) {
            ctx.drawImage(this.initialScreen, 0, 0, 1280, 720, 0, 0, 1280, 720);
            ctx.font = "40px Georgia";
            ctx.fillText("Start Game", 520, 500);
            ctx.fillStyle = '#296d98';
            canvas1.style.cursor = 'pointer';

        }
        canvas1.addEventListener('click', (e) => {
            const mousePos = {
                x: e.clientX - canvas.offsetLeft,
                y: e.clientY - canvas.offsetTop
            };
            // console.log("clicked");
            console.log('x', mousePos.x, 'y', mousePos.y);


            if (mousePos.x >= 525 && mousePos.x < 720 && mousePos.y >= 470 && mousePos.y < 500) {
                // console.log("Start btn clicked");
                // console.log('x',mousePos.x,'y',mousePos.y);
                state.current = state.game;

            }

        });
    }

    



    this.drawScore = function () {
        ctx.drawImage(this.priofileSprite, 0, 0, 100, 100, 10, 10, 100, 100);
        ctx.font = "40px Georgia";
        ctx.fillText("Score :" + score, 130, 50);
        // ctx.fillText("Score :" + bestScore, 130, 40);
        ctx.fillStyle = 'Red';


    }




    // GAME OVER MESSAGE
    this.drawOverScreen = function () {
        if (state.current == state.over) {
            ctx.drawImage(that.overScreen, 0, 0, 808, 555, 200, 100, 808, 555);
            ctx.drawImage(this.yesBtn, 0, 0, 128, 128, 440, 350, 128, 128);
            ctx.drawImage(this.noBtn, 0, 0, 128, 128, 640, 350, 128, 128);
            canvas1.style.cursor = 'pointer';

            canvas1.addEventListener('click', (e) => {
                const mousePos = {
                    x: e.clientX - canvas.offsetLeft,
                    y: e.clientY - canvas.offsetTop
                };
                // console.log("clicked");
                // console.log('x', mousePos.x, 'y', mousePos.y);


                if (mousePos.x >= 440 && mousePos.x < 570 && mousePos.y >= 350 && mousePos.y < 480) {
                    console.log("yes btn clicked");
                    console.log('x', mousePos.x, 'y', mousePos.y);
                    state.current = state.game;
                    console.log(state.current);


                }

                if (mousePos.x >= 640 && mousePos.x < 770 && mousePos.y >= 350 && mousePos.y < 480) {
                    console.log("no btn clicked");
                    console.log('x', mousePos.x, 'y', mousePos.y);
                    state.current = state.getReady;
                    console.log(state.current);


                }

            });

        }
    }


     // win MESSAGE
     this.winScreen = function () {
        if (state.current == state.win) {
            ctx.drawImage(this.winScreenSprite, 0, 0, 808, 555, 200, 100, 808, 555);
            ctx.font = "80px Georgia";
            ctx.fillText(score,700,450)
           

        }
    }



    var score = 0;
    var bestScore = score;

    // this.baseGround = new BaseGround(canvas.height);

    this.map = new Maps(game1);
    this.hero = new Hero(game1, this.map);
    this.bot = new Bot(game1, this.map);
    this.map.init();

    this.fireMode = 0;
    this.weapon = new weapon(ctx, this.hero);

    this.gameLoop = function () {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        that.control();
        that.draw();
        that.update();
        // console.log(frames);

        frames++;
        requestAnimationFrame(that.gameLoop);
    }

    this.draw = function () {

        //bg color
        // ctx.fillStyle = '#4ec0ca';

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // background image draw
        ctx.drawImage(sprite_bg, this.sX, this.sY, this.width, this.height,
            this.x, this.y, this.width, this.height);

        ;
        this.map.drawMap(ctx);
        this.hero.draw(ctx, this.currentAnimation);
        this.bot.draw(ctx);

        this.drawScore();

        // this.createBullet(this.fireMode);
        if (this.fireMode == 1) {
            this.weapon.draw(this.fireMode);
            // console.log("fire mode");
        }

        if(this.hero.x_old>2600){
            state.current=state.win;
            // console.log("win screen");
            
        }

      




    }


    this.update = function () {
        // if (state.current == state.game) {
        //     that.bird.update();
        //     that.baseGround.update();
        //     that.checkGroundCollision();
        //     that.generatePipes();
        //     that.checkPipeCollision();
        // }


        if (state.current == state.getReady) {
            this.drawInitialScreen();

        }

        //game over message
        if (state.current == state.over) {
            this.drawOverScreen();
            // ctx.drawImage(sprite, 175, 229, 225, 200,
            //     canvas.width / 2 - 225 / 2, 150, 225, 200);
        }

        if(state.current==state.win){
            this.winScreen();
        }

        // console.log("state",state.current);


        //falling hero
        if (this.hero.y > 50) {
            this.checkDownTile();
        }

        // this.updateBullet();

    }
    var x = this.hero.x;
    // console.log('fromgame hero x',x);

    this.bulletx = this.hero.x;
    this.bullety = this.hero.y;


    this.createBullet = function (fireMode) {
        this.fireMode = fireMode;
        // this.updateBullet();
        if (this.fireMode == 1) {
            console.log("bullet hit");

            ctx.drawImage(this.surikenSprite, 100, 100, 34, 34, this.bulletx, this.bullety + 50, 20, 20);
        }


    }
    this.updateBullet = function () {

        this.bulletx = this.bulletx + this.bulletSpeed * 1;
        this.bulletSpeed++;

    }

    // setInterval(this.updateBullet(),30);

    this.checkCollision = function () {

        let i = Math.floor((this.hero.y + 50) / 50);
        let j = Math.floor((this.hero.x_old) / 50);
        console.log('hero value old x', this.hero.x_old);
        console.log('hero value this x', this.hero.x);
        console.log(' i', i, 'j', j);

        // console.log(x);

        if (this.map.map1[i][j] == 1 || this.map.map1[i][j] == 2) {

            console.log('collision detected at i', i, 'j', j);

        }
        if (this.map.map1[i][j] == 4) {
            this.map.map1[i][j] = 0;
            // coin_audio.play();
            this.playAudio(coin_audio);
            if (this.map.map1[i - 1][j] == 4) {
                score = score + 100;
                coin_audio.play();

                this.map.map1[i - 1][j] = 0;
            }

            score = score + 100;
            // coin_audio.play();
            console.log("score", score);

        }

    }

    this.playAudio=function(audioName){
        this.audioName=audioName;
        this.audioName.play();
    }


    this.checkDownTile = function () {
        let i = Math.floor((this.hero.y + 100) / 50); //one step down than current y
        let j = Math.floor((this.hero.x_old / 50)); //current y position
        if (i < 13 && j < 60) {
            if (this.map.map1[i][j] == 1) {
                // this.state.current=this.state.over; 
                this.hold = 0;   //hold flag true means hold flag set to hold the player in the tile  
                // console.log('collision detected at i', i, 'j', j);

            }
            else {
                this.hero.y = this.hero.y + this.gravity * 1;
                if (this.hero.y > 500) {
                    state.current = state.over;
                }

            }
        }

    }

    console.log('map cordinate', this.map.map1[10][10]);



    this.control = function () {

        window.onkeydown = function (e) {
            var key = e.keyCode ? e.keyCode : e.which;
            var x;
            if (key == 37) {
                console.log("left");

                x = -50;
                this.currentAnimation = that.goLeftSprite;
                that.hero.moveLR(x);


                console.log(that.hero.x);
                console.log('view port x', that.setviewportX);


                if (that.setviewportX <= 0) {
                    this.setviewportX = 600;
                }
                else {
                    that.setviewportX = that.setviewportX - 50;
                }
                that.map.updateViewPortX(that.setviewportX);





            } else if (key == 39) {
                console.log("right");
                x = 50;
                that.currentAnimation = that.goRightSprite;

                that.hero.moveLR(x);
                // that.bot.x=that.bot.x-x;
                // ctx.translate(-10, 20);
                // that.hero.movestate = 2;
                that.checkCollision();
                console.log(that.hero.x);
                console.log("viewport x", that.setviewportX);
                if (that.hero.x_old > 600) {
                    that.setviewportX = that.setviewportX + 50;
                    if (that.setviewportX >= 1700) {
                        that.setviewportX = 1700;
                    }

                    that.map.updateViewPortX(that.setviewportX);
                }


            }

            else if (key == 38 || key == 32) {
                console.log("up");
                y = -50;

                this.setTimeout(that.hero.moveUD(y), 3000);
                // this.setTimeout(that.hero.moveUD(y),3000);
                // this.setTimeout(that.hero.moveUD(y),3000);
                //this is for updating map
                // if (that.hero.x > canvas.width / 2) {
                //     that.setviewportX = that.setviewportX + 50;
                //     if (that.setviewportX >= 1700) {
                //         that.setviewportX = 1700;
                //     }
                //     that.map.updateViewPortX(that.setviewportX);
                // }
            }
            else if (key == 40) {
                console.log("down");
                y = 150;
                that.hero.moveUD(y);
                that.checkDownTile();

            }

            else if (key == 88) {
                this.setTimeout(
                    this.fireMode = 1, 500);
                console.log("fire");
                that.createBullet(this.fireMode);
                this.fireMode = 0;
                console.log('firemode =>', this.fireMode);





            }
        };
    }
    window.onkeyup = function (e) {
        var key = e.keyCode ? e.keyCode : e.which;
        var x;
        if (key == 37) {
            console.log(" key up left");



        } else if (key == 39) {
            console.log("right");
            x = 50;
            that.currentAnimation = that.sprite_hero_1;



        }

        else if (key == 38) {
            console.log("up");
            y = -50;
            that.hero.moveUD(y);
            // this.setTimeout(that.hero.moveUD(y), 3);
            // this.setTimeout(that.hero.moveUD(y),3000);
            // this.setTimeout(that.hero.moveUD(y),3000);
            //this is for updating map
            // if (that.hero.x > canvas.width / 2) {
            //     that.setviewportX = that.setviewportX + 50;
            //     if (that.setviewportX >= 1700) {
            //         that.setviewportX = 1700;
            //     }
            //     that.map.updateViewPortX(that.setviewportX);
            // }
        }
        else if (key == 40) {
            console.log("down");
            y = 150;
            that.hero.moveUD(y);
            that.checkDownTile();

        }

        else if (key == 88) {
            console.log("fire");




        }
    };
}




var canvas1 = document.getElementById('gameCanvas');
// canvas1.style.backgroundImage="red";
var ctx1 = canvas1.getContext('2d');
var ctx = canvas1.getContext('2d');
var game1 = new Game(canvas1, ctx1).gameLoop();


// var canvas2 = document.getElementById('game-container2');
// var ctx2 = canvas2.getContext('2d');
// var game2 = new Game(canvas2, ctx2).gameLoop();


