
// select canvas
const cvs = document.getElementById('mycanvas');
const ctx = cvs.getContext('2d');

// game variable and constant

let frames = 0;

// load sprite image
const sprite = new Image();
sprite.src = 'images/sprite.png';
const bg2 = new Image();
bg2.src = 'images/bg.png';

// game state
const state = {
    current: 0,
    getReady: 0,
    game: 1,
    over: 2
}


//game control
document.addEventListener('click', function (evt) {
    switch (state.current) {
        case state.getReady:
            state.current = state.game;
            break;
        case state.game:
            bird.flap();
            break;
        case state.over:
            state.current = state.getReady;
            break;

    }
})


// console.log(sprite);
// console.log(cvs.height - 226);

// This is background
const bg = {
    sX: 0,
    sY: 0,
    w: 275,
    h: 226,
    x: 0,
    y: cvs.height - 226,

    draw: function () {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);

        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
}

// this is foreground
const fg = {
    sX: 276,
    sY: 0,
    w: 224,
    h: 122,
    x: 0,
    y: cvs.height - 112,

    draw: function () {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);


    }
}


// This is bird object
const bird = {
    animation: [
        {sX: 276, sY : 112},
        {sX: 276, sY : 139},
        {sX: 276, sY : 164},
        {sX: 276, sY : 139}
    ],
    x: 50,
    y: 150,
    w: 30,
    h: 26,
    frame: 0,
    draw: function () {
        let bird = this.animation[this.frame];

        ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);

    },
    flap: function () {

    },


    update : function () {
        // if the game state is ready state then the bird flap slow
        this.period = state.current == state.getReady ? 10 : 5
        // we increment the frame reate by 1 every period 
        this.frame += frames%this.period == 0 ? 1 : 0;
        // frame goes from 0 to 4 and goes back to 0
        this.frame = this.frame % this.animation.length;
    },
}



// get ready message 
const getReady = {
    sX: 0,
    sY: 228,
    w: 173,
    h: 152,
    x: cvs.width / 2 - 173 / 2,
    y: 80,

    draw: function () {
        if (state.current == state.getReady) {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }


    }
}


// game over message 
const gameOver = {
    sX: 175,
    sY: 228,
    w: 255,
    h: 202,
    x: cvs.width / 2 - 255 / 2,
    y: 90,

    draw: function () {
        if (state.current == state.over) {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }


    }
}


// Draw
function draw() {
    ctx.fillStyle = '#70c5ce';
    ctx.fillRect(0, 0, cvs.width, cvs.height)


    bg.draw();
    fg.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
}

// Update
function update() {
    bird.update();

}


// loop
function loop() {
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}
loop();