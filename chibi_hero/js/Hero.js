function Hero(game) {
    this.game = game;
    console.log('hi hero is initialized');

    this.sX = 30;
    this.sY = 30;
    this.width = 70;
    this.height = 100;
    this.x = 50;
    this.y = 353;
    this.frame = 0; //for animation
    this.sprite_hero_1 = new Image();
    this.sprite_hero_1.src = 'images/chibihero01_idle.png'

    this.speed = 0;
    this.gravity = 0.25;
    this.jump = 4;

    this.movestate = 0;


    var that = this;

    // birds animation
    this.animation = [
        { sX: 30, sY: 30 }, //1st bird
        { sX: 30, sY: 30 }, //1st bird
        { sX: 30, sY: 30 }, //1st bird
        { sX: 30, sY: 30 }, //1st bird
        { sX: 30, sY: 30 }, //1st bird
        { sX: 30, sY: 30 }, //1st bird
        { sX: 30, sY: 30 }, //1st bird
        { sX: 30, sY: 30 }, //1st bird
        { sX: 30, sY: 30 }, //1st bird
        { sX: 30, sY: 30 }, //1st bird
        { sX: 30, sY: 30 }, //1st bird
        { sX: 30, sY: 30 }, //1st bird
        { sX: 160, sY: 30 }, // 2nd bird
        { sX: 160, sY: 30 }, // 2nd bird
        { sX: 160, sY: 30 }, // 2nd bird
        { sX: 160, sY: 30 }, // 2nd bird
        { sX: 160, sY: 30 }, // 2nd bird
        { sX: 160, sY: 30 }, // 2nd bird
        { sX: 160, sY: 30 }, // 2nd bird
        { sX: 160, sY: 30 }, // 2nd bird
        { sX: 290, sY: 30 }, //3rd bird
        { sX: 290, sY: 30 }, //3rd bird
        { sX: 290, sY: 30 }, //3rd bird
        { sX: 290, sY: 30 }, //3rd bird
        { sX: 290, sY: 30 }, //3rd bird
        { sX: 290, sY: 30 }, //3rd bird
        { sX: 290, sY: 30 }, //3rd bird
        { sX: 290, sY: 30 } //3rd bird
    ];


    this.update = function () {
        this.frame = ++this.frame % this.animation.length;
    }

    this.draw = (ctx) => {

        this.update();
        let hero = this.animation[this.frame];
        ctx.save();
        // ctx.translate(this.x, this.y);
        // ctx.rotate(this.rotation);
        ctx.drawImage(this.sprite_hero_1, hero.sX, hero.sY, this.width, this.height, this.x, this.y, this.width, this.height);

        ctx.restore();
    }

    this.moveLR = function (speed) {
        console.log('Moved');
        console.log("speed=>", speed, 'x=>', this.x);
        // tctx.translate(50, 10);
        this.speed = speed;
       
        if (this.x < 100) {
            this.x = 100;
        }
        else if (this.x >= 750) {
            this.x = 750;
        }
        else if (this.x < 0) {
            this.x = 0;
        }
        else{
            this.x = this.x + this.speed;
        }



    }
    this.moveUD = function (speed) {
        console.log('Moved');

        this.speed = speed
        console.log(this.y);

        this.y = this.y + this.speed;
    }



}