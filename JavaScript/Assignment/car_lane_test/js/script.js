function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}




var lane = document.getElementById('lane');

var speed = 20;

// var PName;

function GameStarter(parentElement) {
    this.parentElement = parentElement;
    this.playerName;
    this.input;

    this.resetGame = function () {
        this.playerName = '';
        this.score = '';
        console.log("hello");

    }


    this.init = function () {

        console.log("init called");

        this.startScreenElement = document.createElement('div');
        this.startScreenElement.style.position = 'relative';

        this.startScreenElement.style.width = '500px';
        this.startScreenElement.style.height = '200px';
        this.startScreenElement.id = 'welcomebox'
        this.startScreenElement.style.backgroundColor = 'gray';


        this.startScreenElement.style.borderRadius = '10%';
        this.startScreenElement.style.boxShadow = '0px 0px 20px grey';
        this.startScreenElement.style.margin = '0 auto';
        this.startScreenElement.style.padding = '50px';


        this.h1 = document.createElement('h1');
        this.h1.innerHTML = 'Welcome to the Race';
        this.h1.style.color = 'white';
        this.startScreenElement.appendChild(this.h1);

        // this.stertScreenElement.id='startScreen';

        this.input = document.createElement('input');
        this.input.setAttribute = 'required';
        this.input.id = 'username';
        this.input.placeholder = 'Your Name';
        // this.input.setAttribute('id','username');
        // this.input.setAttribute('placeholder','Enter your name');
        // this.input.style.position = 'absolute';
        this.input.style.top = '30px';
        this.input.style.left = '10px';
        this.input.style.borderRadius = '10px';
        this.input.style.height = '30px'
        this.input.style.width = '300px'

        this.startScreenElement.appendChild(this.input);

        var button = document.createElement('div');
        button.innerHTML = 'Start Game';
        button.style.color = 'white';
        button.style.width = '175px';
        button.style.textAlign = 'center';
        button.style.border = '0';
        button.style.paddingLeft = '10px';
        button.style.marginTop = '20px';
        // button.style.position = 'absolute';
        button.style.lineHeight = '44px';
        button.style.top = '100px';
        button.style.borderRadius = '10px';
        button.style.left = '10px';
        button.style.background = 'green';

        button.onmouseover = function () {
            button.style.cursor = 'pointer';
            button.style.background = '#5A8118';
        }
        button.onmouseout = function () {
            button.style.background = '#577425';
        }
        button.onclick = function () {
            this.playerName = this.input.value;
            console.log("logged in user", this.playerName);

            if (this.playerName != '' && this.playerName.length <= 10) {
                this.gameClass = new Game(parentElement, this.playerName, 500, 500, speed);
                parentElement.removeChild(this.startScreenElement);
                parentElement.appendChild(this.gameClass.init());


                // var l = parentElement.getElementById('lane')
                // setInterval(moveLane(l), 3);


            } else {
                window.alert('Please enter a name with character less than 10');
            }
        }.bind(this);
        this.startScreenElement.appendChild(button);
        this.parentElement.appendChild(this.startScreenElement)

        return this.startScreenElement;


    }

}

function Obstracles(parentElement,velocity) {
    this.uniqueId = Math.abs(Math.random() * 1000).toString();
    this.y = 0;
    this.dx = 0.001;
    this.parentElement = parentElement;
    this.element;
    this.x;
    this.carImageIndex = getRandomNumber(3, 5);
    this.pos;
    this.velocity=velocity;
    var that = this;

    this.Create = function () {
        var Obstacle = document.createElement("img");
        Obstacle.classList.add("obs");
        Obstacle.id = this.uniqueId;
        Obstacle.src = "./images/" + this.carImageIndex + ".png";
        this.parentElement.appendChild(Obstacle);
        Obstacle.style.position = 'absolute';
        // Obstacle.style.top = "10px";
        Obstacle.style.height = '100px';
        Obstacle.style.width = '50px';
        this.obsPos();
        console.log("obj pos left", this.x);
        console.log("obj pos", this.pos);


        Obstacle.style.left = this.x + "px";
        this.element = Obstacle;
        this.parentElement.appendChild(this.element);
    };



    this.move = function () {
       
        
            this.y = this.y + Math.exp(this.dx);
            this.dx = this.dx + 0.005;
            this.velocity=this.velocity+0.001;
            this.element.style.top = this.y + "px";
           
     
   
       
    };

   


    this.obsPos = function () {
        this.pos = getRandomNumber(0, 3);
        if (this.pos == 0) {
            this.x = 100;

        }
        if (this.pos == 1) {
            this.x = 230;
        }
        if (this.pos == 2) {
            this.x = 360;
        }

        return this.x;
    }

    this.checkCollision = function (Obstacle) {
        var a = this.x - PoliceCar.posx;
        var b = PoliceCar.posy - this.y;
        var dis = Math.sqrt(a * a + b * b);
        if (dis < 100) {
            return true;
        } else {
            return false;
        }
    };


}

// var x = new Obstracles(app);
// console.log("x", x.uniqueId);


// function Racer(){}



function Game(parentElement, userName, height, width, speed) {
    var that = this;
    this.userName = userName;
    this.height = height || 500;
    this.width = width || 500;
    this.parentElement = parentElement;
    this.speed = speed;
    this.track;
    this.trackState;
    this.left = 100;
    // console.log(speed);


    var gameElement;
    this.objectArr = [];
    this.obj1;
    this.pedestrainsDelay = 10;
    this.pedestrainsDistance = 60;
    this.gameBackgroundElement;
    this.racerElement;
    this.scoreElement;
    var gelement = this.gameBackgroundElement;

    this.init = function () {
        gameElement = document.createElement('div');

        gameElement.style.height = height;
        gameElement.style.width = width;
        gameElement.id = 'game';
        gameElement.overflow = 'hidden';

        this.startGame();
        return gameElement;
    }

    this.startGame = function () {
        this.initBackground();
        this.initRacer();
        this.setScore();
        this.setObstracle();

        // this.initControlDir();
        // this.initPedestrains();
    }

    this.initBackground = function () {
        // this.backgroundClass = new GameBackground(this.height, this.width, this);

        this.gameBackgroundElement = document.createElement('div');
        this.gameBackgroundElement.id = 'lane';
        this.gameBackgroundElement.style.height = '550px';
        this.gameBackgroundElement.style.overflow = 'hidden';
        // this.gameBackgroundElement.class='lane';
        gameElement.appendChild(this.gameBackgroundElement);
        //    this.speed =  this.incSpeed()
        // this.speed+=1;
        //   console.log("speed",this.speed);

        // this.gameBackgroundElement.style.backgroundPositionY=this.speed+'px';

    }

    setInterval(function () {

        this.speed += 4;
        // console.log("from interval ", this.speed);
        that.gameBackgroundElement.style.backgroundPositionY = this.speed + 'px';


    }, 10)

    this.initRacer = function () {
        this.racerElement = document.createElement('div');
        this.racerElement.id = 'racer';
        this.racerElement.style.position = 'absolute';
        this.racerElement.style.width = '50px';
        this.racerElement.style.height = '100px';
        this.racerElement.zIndex = '30';
        // this.racerElement.style.backgroundColor = "red";
        // this.racerElement.style.backgroundImage='url("../images/1.png")';
        this.racerElement.style.top = "400px";
        this.racerElement.style.left = this.left + 'px';
        gameElement.appendChild(this.racerElement);


        this.track = getRandomNumber(0, 3);
        console.log("tracek value", this.track);
        if (this.track == 0) {
            this.left = 100;
            this.trackState = 'left';

            this.racerElement.style.left = this.left + 'px';
            console.log("tracek value in left", this.track);

        }
        if (this.track == 1) {
            this.left = 230;
            this.racerElement.style.left = this.left + 'px';
            console.log("tracek value in mid", this.track);
            this.trackState = 'mid';

        }
        if (this.track == 2) {
            this.left = 360;
            this.racerElement.style.left = this.left + 'px';
            console.log("track value in right", this.track);
            this.trackState = 'right';
        }


        window.addEventListener('keypress', checkKeyPress, false);


        function checkKeyPress(key) {
            if (key.keyCode == '97') {
                console.log("go left");
                console.log("current track", that.track);
                if (that.track == 2 || that.track == 1) {
                    console.log("go left");
                    that.track -= 1;
                    that.left -= 130;
                    that.racerElement.style.left = that.left + 'px';

                }


            }
            if (key.keyCode == '100') {
                console.log("go Right");
                console.log("current track", that.track);
                if (that.track == 0 || that.track == 1) {
                    that.track += 1;
                    that.left += 130;
                    that.racerElement.style.left = that.left + 'px';
                }

            }
        }


    }

    this.setScore = function () {
        this.scoreElement = document.createElement('div');
        this.scoreElement.style.width = '150px';
        this.scoreElement.style.height = '50px';
        this.scoreElement.style.backgroundColor = 'red';
        this.scoreElement.style.borderRadius = '10px';
        this.scoreElement.style.position = 'absolute';
        this.scoreElement.style.top = '10px';
        this.scoreElement.style.left = '-35%';
        this.scoreElement.style.padding = '20px';
        gameElement.appendChild(this.scoreElement);
        this.scoreName = document.createElement('div');
        this.scoreElement.appendChild(this.scoreName);
        this.scoreName.innerHTML = this.userName;
        this.scoreName.style.color = 'white';
        this.scoreName.style.textTransform = 'uppercase';
        this.scoreName.style.fontStyle = 'bold';

        this.highScore = document.createElement('div');
        this.scoreElement.appendChild(this.highScore);
        this.highScore.innerHTML = 'High score =' + '<span id="hscore">500</span>';
        this.highScore.style.color = 'white';


        this.currentScore = document.createElement('div');
        this.scoreElement.appendChild(this.currentScore);
        this.currentScore.innerHTML = 'Current Score=' + '<span id="cscore" >0</span>';
        this.currentScore.style.color = 'white';



    }


    this.setObstracle = function () {
        this.obj1 = new Obstracles(gameElement,0.001);
        this.objectArr.push(this.obj1);
        this.obj1.Create();
        this.obj1.move();  
    }


    // this.pedestrains = function () {
    //     this.pedestrainId = getRandomNumber

    // }



}  //end of game class




var app = document.getElementById('game-container');

// var app = this.document.getElementsByClassName('app');

var x = new GameStarter(app);

x.resetGame();
x.init();

