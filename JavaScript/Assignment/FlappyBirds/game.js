
// select canvas
const cvs = document.getElementById('mycanvas');
const ctx = cvs.getContext('2d');

// game variable and constant

let frames = 0;
const DEGREE = Math.PI / 180; //for degre to radian

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
    dx: 2,

    draw: function () {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);


    },
    update: function () {
        if (state.current == state.game) {
            this.x = (this.x - this.dx) % (this.w / 2);
        }
    },
}




// This is bird object
const bird = {
    animation: [
        { sX: 276, sY: 112 },
        { sX: 276, sY: 139 },
        { sX: 276, sY: 164 },
        { sX: 276, sY: 139 }
    ],
    x: 50,
    y: 150,
    w: 30,
    h: 26,

    frame: 0,

    gravity: 0.25,
    jump: 4.6,
    speed: 0,

    rotation: 0,

    draw: function () {
        let bird = this.animation[this.frame];
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, - this.w / 2, - this.h / 2, this.w, this.h);
        ctx.restore();

    },
    flap: function () {
        this.speed = - this.jump;

    },


    update: function () {
        // if the game state is ready state then the bird flap slow
        this.period = state.current == state.getReady ? 10 : 5
        // we increment the frame reate by 1 every period 
        this.frame += frames % this.period == 0 ? 1 : 0;
        // frame goes from 0 to 4 and goes back to 0
        this.frame = this.frame % this.animation.length;

        if (state.current == state.getReady) {
            this.y = 150; //reset position of bird after game over
            this.rotation = 0 * DEGREE;

        } else {
            this.speed += this.gravity;
            this.y += this.speed;

            if (this.y + this.h / 2 >= cvs.height - fg.h) {
                this.y = cvs.height - fg.h - this.h / 2;
                if (state.current == state.game) {
                    state.current = state.over;
                }
            }
            // if the speed is greater than jump meand bird fallung
            if (this.speed >= this.jump) {
                this.rotation = 90 * DEGREE;
                this.frame = 1;
            } else {
                this.rotation = - 25 * DEGREE;
            }

        }
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


//pipes 
const pipes = {
    position : [],
    top : {
        sX: 553,
        sY: 0
    },
    bottom : {
        sX : 502,
        sX : 0
    },
    w: 53,
    h: 400,
    gap: 85,
    maxYPos:-150,
    dx: 2,

    draw: function() {
        for (let i = 0; i < this.position.length; i++) {
            let p = this.position[i];

            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gap;


            // this is top pipes
            ctx.drawImage(sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, this.topYPos, this.w, this.h);

            //this is bottom pipes
            ctx.drawImage(sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, this.bottomYPos, this.w, this.h);

        }

    },

    update: function () {
        if (state.current !== state.game) return;

        if (frames%100 == 0) {
            this.position.push({
                x: cvs.width,
                y: this.maxYPos * (Math.random() + 1)
            });
        }
        for (let i = 0; i < this.position.length; i++) {
            let p = this.position[i];
            p.x -= this.dx;

        }
    }
}


// Draw
function draw() {
    ctx.fillStyle = '#70c5ce';
    ctx.fillRect(0, 0, cvs.width, cvs.height)


    bg.draw();
    pipes.draw();
    fg.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
}

// Update
function update() {
    bird.update();
    fg.update();
    pipes.update();

}


// loop
function loop() {
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}
loop();