(function () {

    function Box(parentElement, dx, dy) {
        this.parentElement = parentElement;
        this.width = 25;
        this.height = 25;
        this.dx = dx || 1;
        this.dy = dy || 1;
        this.x;
        this.y;
        // this.speed = 1;
        // this.x=5;
        // var that=this;

        this.init = function () {
            var box = document.createElement('div');
            box.style.height = this.height + 'px';
            box.style.width = this.width + 'px';
            box.classList.add('box');
            this.parentElement.appendChild(box);
            this.element = box;       //this shows box is element
            // this.element.onclick = this.boxClicked.bind(this);
            this.draw();
            return this;

        }

        this.setPostion = function (x, y) {
            this.x = x;
            this.y = y;
        }
        // this.checkOverlap = function(){
            
        // }

        this.draw = function () {             //draw box at x y cordinate
            this.element.style.left = this.x + 'px';
            this.element.style.top = this.y + 'px'
        }

        


        this.move = function () {
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
            // if ((this.x + this.width) >= 500 || this.x <= 0 || (this.y + this.width) >= 500 || this.y <= 0) {
            //     this.dx = -this.dx;
            //     this.dy = -this.dy;
            // }


            if (this.x <= 0) {
                this.dx = -this.dx;
            } else if (this.x >= 475) {
                this.dx = -this.dx;
                // this.x = 475;
            } else if (this.y <= 0) {
                this.dy = -this.dy;
            } else if (this.y >= 475) {
                this.dy = -this.dy;
                // this.y = 475; 
            }
        }

        this.checkCollision = function (boxes) {
            for (var i = 0; i < boxes.length; i++) {
                if (!(this == boxes[i])) {
                    if ((this.x < boxes[i].x + boxes[i].width)
                        && (this.x + this.width > boxes[i].x) &&
                        (this.y < boxes[i].y + boxes[i].height) &&
                        (this.y + this.height > boxes[i].y)) {
                        this.dx = -this.dx;
                        this.dy = -this.dy;
                        console.log("collision");

                    }
                } else {
                    console.log("no col");
                }
            }
        }

        this.boxClicked = function () {
            console.log("Box clicked");
        }

    } //This is end of Box class

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    // function rand(min, max, interval) {
    //     if (typeof (interval) === 'undefined') interval = 1;
    //     var r = Math.floor(Math.random() * (max - min + interval) / interval);
    //     return r * interval + min;
    // }


    function genPosition(count){
        var genx = getRandomArbitrary(0, MAX_WIDTH - 27);
        var geny = getRandomArbitrary(0, MAX_WIDTH - 27);
        if(isInArray(xlist,x)==true && isInArray(ylist,y)==true){
            genx = getRandomArbitrary(0, MAX_WIDTH - 27);
            geny = getRandomArbitrary(0, MAX_WIDTH - 27);
        }
        isOverlaped(genx,geny);
    }


    var xlist= [];
    var ylist = [];
    function isOverlaped(x,y){
        
    }

    function isInArray(lis,x){
        for(var i=0;i<lis.length;i++){
            if(x==li[i]){
                return true;
            }
            
        }
    }

    var parentElement = document.getElementById('box-container');

    // var box = new Box(parentElement,50,50,2,2);
    // box.init();

    function Game(parentElement, boxCount) {
        var boxes = [];
        var MAX_WIDTH = 500;
        var MAX_HEIGHT = 500;
        this.parentElement = parentElement;
        this.boxCount = boxCount || 10;


        this.startGame = function () {
            for (var i = 0; i < this.boxCount; i++) {
                var dx = getRandomArbitrary(-5, 5);
                var dy = getRandomArbitrary(-5, 5);
                var box = new Box(parentElement, dx, dy).init();
                // box.classList.add('box'+i);
                var genx = getRandomArbitrary(0, MAX_WIDTH - 27);
                var geny = getRandomArbitrary(0, MAX_WIDTH - 27);

                // var genxy = genPosition(boxCount);

                box.setPostion(
                    getRandomArbitrary(0, MAX_WIDTH - 27),
                    getRandomArbitrary(0, MAX_HEIGHT - 27)
                )

                box.draw();
                boxes.push(box);
            }

            setInterval(this.moveBoxes.bind(this), 100)
        }

        this.moveBoxes = function () {
            for (var i = 0; i < this.boxCount; i++) {
                boxes[i].move();
                boxes[i].checkCollision(boxes)
            }
        }

    }  //This is end of Game Class
    new Game(parentElement).startGame();
}


)();