

const Player = function (x, y) {
    this.x = x;
    this.y = y;

};

Player.prototype = {
    moveTo: function (x, y) {
       /* Gradually moves the player closer to x, y every time moveTo is called. */
       this.x += (x - this.x - scaled_size * 0.5) * 0.05;
       this.y += (y - this.y - scaled_size * 0.5) * 0.05;
    }
};

const Viewport = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
};

Viewport.prototype = {
    scrollTo: function (x, y) {
        this.x = x - width * 0.5;
        this.y = y - width * 0.5;
    }
};






var sprite_size = 64;
var scaled_size = 32;// The size I want my sprites to be;
var sprite_h = 130;// The actual size of sprites / tiles in the tile_sheet image
var sprite_w = 70;
var columns = 24;// columns and rows in map below
var rows = 24;
var msX = 0;
var msY = 0;
var map = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 2, 1, 1, 0, 0, 3, 3, 3, 2, 1, 0, 3, 0, 0, 0, 3, 0, 0, 1, 2, 2, 2, 3,
    3, 1, 1, 0, 0, 0, 3, 3, 3, 1, 0, 0, 3, 0, 2, 0, 3, 0, 1, 1, 2, 1, 1, 3,
    3, 0, 0, 0, 0, 0, 3, 3, 2, 0, 0, 0, 3, 0, 0, 0, 3, 1, 2, 2, 2, 1, 1, 3,
    3, 1, 1, 0, 0, 0, 3, 1, 1, 0, 0, 0, 3, 3, 3, 0, 1, 1, 2, 2, 1, 0, 0, 3,
    3, 0, 0, 1, 2, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 3,
    3, 0, 1, 2, 2, 1, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 3,
    3, 0, 0, 1, 1, 1, 3, 1, 1, 1, 0, 1, 0, 0, 0, 3, 0, 0, 3, 3, 3, 0, 0, 3,
    3, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3,
    3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 3, 0, 0, 3, 3, 3, 2, 1, 3,
    3, 3, 1, 0, 0, 1, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 3,
    3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 1, 2, 2, 1, 0, 0, 3,
    3, 3, 3, 3, 0, 1, 0, 0, 3, 3, 1, 0, 0, 1, 1, 2, 1, 2, 0, 1, 2, 1, 0, 3,
    3, 2, 3, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 2, 1, 2, 2, 1, 2, 1, 1, 3,
    3, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 2, 1, 1, 1, 2, 0, 1, 3,
    3, 1, 1, 1, 1, 1, 0, 1, 3, 3, 1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 1, 2, 3,
    3, 0, 0, 0, 1, 0, 1, 1, 3, 3, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 3,
    3, 1, 1, 0, 0, 0, 0, 3, 3, 3, 1, 1, 2, 2, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 0, 1, 0, 1, 0, 1, 3, 3, 3, 3, 2, 2, 2, 2, 1, 3, 1, 0, 0, 0, 0, 1, 3,
    3, 1, 0, 0, 0, 1, 3, 3, 3, 2, 1, 0, 1, 2, 0, 1, 0, 0, 0, 1, 1, 0, 0, 3,
    3, 2, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 0, 1, 1, 0, 3, 0, 1, 2, 2, 1, 0, 3,
    3, 3, 1, 0, 1, 1, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 3,
    3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 1, 0, 1, 2, 3, 1, 0, 0, 0, 0, 1, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];


var ctx = document.getElementById('gameCanvas').getContext('2d');

var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;

var player = new Player(50, 100);
var viewport = new Viewport(100, 0, 1280, 650);

var pointer = {
    x: 0,
    y: 0
}

//load image
var tile_sheet = new Image();
var hero_sheet = new Image();


tile_sheet.src = "images/tileset1.png";

hero_sheet.src = 'images/chibihero01_idle.png';



ctx.canvas.addEventListener("click", (event) => {
    pointer.x = event.pageX + viewport.x - width * 0.5 + viewport.w * 0.5;
    pointer.y = event.pageY + viewport.y - height * 0.5 + viewport.h * 0.5;
});


// tile_sheet.addEventListener("load",function(e){
//     loop();
// })


function load_img(x) {
    x.addEventListener("load", function (e) {
        loop();
    });
};

load_img(tile_sheet);
load_img(hero_sheet);





function loop() {
    window.requestAnimationFrame(loop);

    // viewport.x++;

    var height = document.documentElement.clientHeight;
    var width = document.documentElement.clientWidth;

    ctx.canvas.height = height;
    ctx.canvas.width = width;

    ctx.imageSmoothingEnabled = false;


    var x_min = Math.floor(viewport.x / scaled_size);
    var y_min = Math.floor(viewport.y / scaled_size);
    var x_max = Math.ceil((viewport.x + viewport.w) / scaled_size);
    var y_max = Math.ceil((viewport.y + viewport.h) / scaled_size);

    player.moveTo(pointer.x, pointer.y);   //move player to pointed x y

    scrollTo(player.x, player.y);  //scrollacording to player position

    for (let x = x_min; x < x_max; x++) {
        for (let y = y_min; y < y_max; y++) {
            let value = map[y * columns + x];// Tile value
            let tile_x = x * scaled_size - viewport.x + width * 0.5 - viewport.w * 0.5;
            let tile_y = y * scaled_size - viewport.y + height * 0.5 - viewport.h * 0.5;
            if (value == 1) {
                msX = 0;
                msY = 0;
                ctx.drawImage(tile_sheet, msX, msY, sprite_size, sprite_size, tile_x, tile_y, scaled_size, scaled_size);
            }
            else if (value == 2) {
                msX = 0;
                msY = 64;
                ctx.drawImage(tile_sheet, msX, msY, sprite_size, sprite_size, tile_x, tile_y, scaled_size, scaled_size);
            }
            else if (value == 3) {
                msX = 192;
                msY = 257;
                ctx.drawImage(tile_sheet, msX, msY, sprite_size, sprite_size, tile_x, tile_y, scaled_size, scaled_size);
            }

            // Draw tile from tile_sheet
            ctx.drawImage(tile_sheet, value * sprite_size, 0, sprite_size, sprite_size, tile_x, tile_y, scaled_size, scaled_size);
        }
    }

    // ctx.fillStyle ="#008000";
    // ctx.fillRect(0,0,width,height);

    ctx.drawImage(hero_sheet, 30, 0, sprite_w, sprite_h, Math.round(player.x - viewport.x + width * 0.5 - viewport.w * 0.5), Math.round(player.y - viewport.y + height * 0.5 - viewport.h * 0.5), 64, 100);

}

loop();





