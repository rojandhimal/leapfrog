function Hero(game,map) {
    this.game = game;
    console.log('hi hero is initialized');
    this.map=map;
    
    
    this.sX = 30;
    this.sY = 30;
    this.width = 70;
    this.height = 100;
    this.x = 50;
    this.y = 353;   //7th row from top 
    this.x_old=50;
    this.y_old=353;
    this.frame = 0; //for animation
    this.sprite_hero_1 = new Image();
    this.sprite_hero_1.src = 'images/chibihero01_idle.png'

    this.speed = 0;
    this.gravity = 0.25;
    this.jump = 4;

    this.movestate = 0;


    var that = this;
    console.log("map from hero",this.map.gameMapHeight);

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
        ctx.drawImage(this.sprite_hero_1, hero.sX, hero.sY, this.width, this.height, this.x, this.y, 50, 100);

        ctx.restore();
    }

    
    

    this.moveLR = function (speed) {
        console.log('Moved');
        console.log("speed=>", speed, 'x=>', this.x);
        // tctx.translate(50, 10);
        this.speed = speed;
        // console.log(this.map);
        
        if(this.x_old<3000){
        this.x_old =  this.x_old + this.speed;
        }
        if (this.x_old < 100) {
            // this.x_old =  this.x + this.speed;
            this.x = 100;
        }
        // else if (this.x >= 750 ) {
        //     // this.x_old = this.x + this.speed;
        //     this.x = 750;
        // }

         else if (this.x_old >= 600 && that.x_old<2300) {
            // this.x_old = this.x + this.speed;
            this.x = 600;
        }
        else if(this.x_old>=2300 && this.x_old<3000){
            this.x = this.x + this.speed;
        }
    


        // // else if(){}
        // else if (this.x < 0) {
        //     // this.x_old =  this.x + this.speed;
        //     this.x = 0;
        // }
        else{
            this.x_old = this.x + this.speed;
            this.x = this.x + this.speed;
        }
        console.log("old x",this.x_old);
        



    }
    this.moveUD = function (speed) {
        console.log('Moved');

        this.speed = speed
        console.log(this.y);

        this.y = this.y + this.speed;
    }



}