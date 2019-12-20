/* The player is just a simple 2d point with a moveTo function. */
const Player = function (x, y) {
    this.   x = x; this.y = y;
};
Player.prototype = {
    moveTo: function (x, y) {
        /* Gradually moves the player closer to x, y every time moveTo is called. */
        this.x += (x - this.x - scaled_size * 0.5) * 0.05;
        this.y += (y - this.y - scaled_size * 0.5) * 0.05;
    }
};
/* The viewport (camera) is a rectangular region that defines the visible
area of the map to be drawn. It's x, y coordinates are relative to the map
itself, but you can easily draw its contents in a stationary location on screen,
thus giving the effect of scrolling. */
const Viewport = function (x, y, w, h) {
    this.x = x; this.y = y; this.w = w; this.h = h;
};
Viewport.prototype = {
    scrollTo: function (x, y) {
        this.x = x - this.w * 0.5;// Rigid scrolling
        this.y = y - this.w * 0.5;
        // Smooth scrolling 
        // this.x += (x - this.x - this.w * 0.5) * 0.05;
        // this.y += (y - this.y - this.h * 0.5) * 0.05;
    }
};
var scaled_size = 50;// The size I want my sprites to be;
var sprite_size = 60;// The actual size of sprites / tiles in the tile_sheet image
var columns = 60;// columns and rows in map below
var rows = 13;
var map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    3, 0, 0, 1, 2, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 0, 1, 2, 2, 1, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 0, 0, 1, 1, 1, 3, 1, 1, 1, 0, 1, 0, 0, 0, 3, 0, 0, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 3, 0, 0, 3, 3, 3, 2, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 3, 1, 0, 0, 1, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 1, 2, 2, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 3, 3, 3, 0, 1, 0, 0, 3, 3, 1, 0, 0, 1, 1, 2, 1, 2, 0, 1, 2, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 2, 3, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 2, 1, 2, 2, 1, 2, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 2, 1, 1, 1, 2, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 1, 1, 1, 1, 1, 0, 1, 3, 3, 1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 0, 0, 0, 1, 0, 1, 1, 3, 3, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 1, 1, 0, 0, 0, 0, 3, 3, 3, 1, 1, 2, 2, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 0, 1, 0, 1, 0, 1, 3, 3, 3, 3, 2, 2, 2, 2, 1, 3, 1, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 1, 0, 0, 0, 1, 3, 3, 3, 2, 1, 0, 1, 2, 0, 1, 0, 0, 0, 1, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 2, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 0, 1, 1, 0, 3, 0, 1, 2, 2, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 3, 1, 0, 1, 1, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 1, 0, 1, 2, 3, 1, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

// var map = [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//     3, 2, 2, 3, 2, 2, 3, 3, 2, 2, 2, 0, 0, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2,
//     3, 2, 2, 3, 2, 2, 3, 3, 3, 2, 2, 0, 0, 2, 3, 3, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2,
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];



/* The drawing ctx of the on screen canvas */
var ctx = document.querySelector("canvas").getContext('2d');
/* The width and height of the inside of the browser window */
var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;
var player = new Player(100, 100);
var viewport = new Viewport(0, 0, 1200, 650);
var pointer = { x: 1280, y: 650 };// The adjusted mouse position
function loop() {// The game loop
    window.requestAnimationFrame(loop);
    var height = document.documentElement.clientHeight;
    var width = document.documentElement.clientWidth;
    /* Resize canvas on every frame */
    ctx.canvas.height = height;
    ctx.canvas.width = width;
    ctx.imageSmoothingEnabled = false;// prevent antialiasing of drawn image
    player.moveTo(pointer.x, pointer.y);
    viewport.scrollTo(player.x, player.y);
    /* Get the min and max column and row in the map to draw. For the min
    column and row (x and y) we use floor to round down and for the max we
    use ceil to round up. We want to get the rows and columns under the borders
    of the viewport rectangle. This is visualized by the white square in the example. */
    var x_min = Math.floor(viewport.x / scaled_size);
    var y_min = Math.floor(viewport.y / scaled_size);
    var x_max = Math.ceil((viewport.x + viewport.w) / scaled_size);
    var y_max = Math.ceil((viewport.y + viewport.h) / scaled_size);
    /* the min and max column and row values cannot go beyond the boundaries
    of the map. Those values are 0 and the number of columns and rows in the map. */
    if (x_min < 0) x_min = 0;
    if (y_min < 0) y_min = 0;
    if (x_max > columns) x_max = columns;
    if (y_max > rows) y_max = rows;
    /* Now we loop through the tiles in the map, but only between the min
    and max columns and rows that the viewport is over. To do this we use two
    for loops, one for the columns (x) and one for the rows (y) of the map. */
    for (let x = x_min; x < x_max; x++) {
        for (let y = y_min; y < y_max; y++) {
            let value = map[y * columns + x];// Tile value
            let tile_x = Math.floor(x * scaled_size - viewport.x + width * 0.5 - viewport.w * 0.5);// Tile x destination for drawing
            let tile_y = Math.floor(y * scaled_size - viewport.y + height * 0.5 - viewport.h * 0.5);// Tile y destination for drawing
            // Draw tile from tile_sheet


            // if (value == 0) {
            //     msX = 0;
            //     msY = 0;
            //     ctx.drawImage(tile_sheet, msX, msY, sprite_size, sprite_size, tile_x, tile_y, scaled_size, scaled_size);
            // }

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

        }
    }
    /* This bit of code gets the player's position in the world in terms of
    columns and rows and converts it to an index in the map array */
    let player_index = Math.floor((player.y + scaled_size * 0.5) / scaled_size) * columns + Math.floor((player.x + scaled_size * 0.5) / scaled_size);
    /* If the player is standing on a grass tile, make it a short grass tile */
    // if (map[player_index] == 2) map[player_index] = 1;
    /* Draw the player. Remember to offset by the viewport position and
    center screen position. */


    //   ctx.drawImage(hero_sheet, 64, 0, sprite_size, sprite_size, Math.round(player.x - viewport.x + width * 0.5 - viewport.w * 0.5), Math.round(player.y - viewport.y + height * 0.5 - viewport.h * 0.5), scaled_size, scaled_size);

    ctx.drawImage(hero_sheet, 30, 0, 70, 130, Math.round(player.x - viewport.x + width * 0.5 - viewport.w * 0.5), Math.round(player.y - viewport.y + height * 0.5 - viewport.h * 0.5), 64, 100);
    /* Draw the viewport rectangle. */
    ctx.strokeStyle = "#111111";
    ctx.rect(width * 0.5 - viewport.w * 0.5, height * 0.5 - viewport.h * 0.5, viewport.w, viewport.h);
    ctx.stroke();
}
var tile_sheet = new Image();
tile_sheet.addEventListener("load", (event) => { loop(); });
tile_sheet.src = "images/tileset1.png";


// ctx.canvas.addEventListener("click", (event) => {
//     pointer.x = event.pageX + viewport.x - width * 0.5 + viewport.w * 0.5;
//     pointer.y = event.pageY + viewport.y - height * 0.5 + viewport.h * 0.5;
// });

var hero_sheet = new Image();
hero_sheet.src = 'images/chibihero01_idle.png';
