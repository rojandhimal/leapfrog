
var canvas1 = document.getElementById('gameCanvas');
var ctx = canvas1.getContext('2d');
canvas1.height=500;
canvas1.width=500;



function Hero(game) {
    this.game = game;
    console.log('hi hero is initialized');

    this.sX = 30;
    this.sY = 30;
    this.width = 70;
    this.height = 100;
    this.x = 50;
    this.y = 150;
    this.frame = 0; //for animation
    this.sprite_hero_1 = new Image();
    this.sprite_hero_1.src = 'images/chibihero01_idle.png'

    this.speed = 0;
    this.gravity = 0.25;
    this.jump = 4;
    var that = this;

    // birds animation
    this.animation = [
        { sX: 30, sY: 30 }, //1st bird
        { sX: 160, sY: 30 }, // 2nd bird
        { sX: 290, sY: 30 }, //3rd bird
        { sX: 30, sY: 60 }, //1st bird
        { sX: 160, sY: 60 }, // 2nd bird
        { sX: 290, sY: 60 }, //3rd bird
        { sX: 30, sY: 90 }, //1st bird
        { sX: 160, sY: 90 }, // 2nd bird
        { sX: 290, sY: 90 }, //3rd bird

      
    ];


    this.update = function(){
        this.frame = ++this.frame % this.animation.length;
    }

    this.draw = function() {

        this.update();
        let hero = this.animation[this.frame];
        ctx.save();
        ctx.translate(this.x, this.y);
        // ctx.rotate(this.rotation);
        ctx.drawImage(this.sprite_hero_1, hero.sX, hero.sY, this.width, this.height, this.x, this.y, this.width, this.height);

        ctx.restore();
    }

    
}


var hero= new Hero().draw();
