(function () {

    var SPEED = 20;
    var refreshRate = 80;
    function PlayerCar(height, width, parentElement) {
        this.height = height;
        this.width = width;
        this.parentElement = parentElement;
        this.element = null;
        this.possibleDirection = 2;
        this.bullet = null;
        var that = this;
        this.eventListener;
        var key = 0;


        this.drawCar = function () {
            var car = document.createElement('div');
            car.style.width = this.width + 'px';
            car.style.height = this.height + 'px';
            car.style.bottom = '0px';
            car.style.left = '270px';
            car.style.transition = 'all 0.2s ease';

            car.classList.add('car');

            this.parentElement.appendChild(car);
            this.element = car;
            this.fireBullet = false;


            return this;

        }

        this.moveCar = function (e) {

            document.addEventListener('keydown', this.eventListener = function (e) {
                key = e.keyCode;

            });


            var position = parseInt(that.element.style.left.replace("px", "").trim());


            if (key === 37 && position === 270 && that.possibleDirection === 2) {
                that.element.style.left = '70px';
                position = parseInt(that.element.style.left.replace("px", "").trim());
                that.possibleDirection = 1;
                document.removeEventListener('keydown', this.eventListener);
                key = '';



            }
            else if (key === 37 && position === 470 && that.possibleDirection === 1) {
                that.element.style.left = '270px';
                position = parseInt(that.element.style.left.replace("px", "").trim());
                that.possibleDirection = 2;
                document.removeEventListener('keydown', this.eventListener);
                key = '';


            }

            else if (key === 39 && position === 270 && that.possibleDirection === 2) {
                that.element.style.left = '470px';
                position = parseInt(that.element.style.left.replace("px", "").trim());
                that.possibleDirection = 1;
                document.removeEventListener('keydown', this.eventListener);
                key = '';


            }
            else if (key === 39 && position === 70 && that.possibleDirection === 1) {
                that.element.style.left = '270px';
                position = parseInt(that.element.style.left.replace("px", "").trim());
                that.possibleDirection = 2;
                document.removeEventListener('keydown', this.eventListener);
                key = '';


            }


            if (key === 38 || key === 32) {
                this.fireBullet = true;
                document.removeEventListener('keydown', this.eventListener);
                key = '';
            }

        }



    }

    function Obstacle(height, width, parentElement, position) {
        this.height = height;
        this.width = width;
        this.position = position;
        this.element = null;
        this.parentElement = parentElement;
        var that = this;
        this.distance = undefined;

        function randomObstacle() {
            var randomNumber = Math.floor(Math.random() * (3) + 1);

            if (randomNumber === 1) {
                return 'url("images/car2.png")';
            }
            else if (randomNumber === 2) {
                return 'url("images/car3.png")';


            } else {
                return 'url("images/car4.png")';
            }
        }

        this.drawObstacle = function () {
            var obstacle = document.createElement('div');
            obstacle.style.width = this.width + 'px';
            obstacle.style.height = this.height + 'px';
            obstacle.style.top = '-200px';
            obstacle.style.left = this.position + 'px';
            obstacle.style.backgroundImage = randomObstacle();
            obstacle.classList.add('obstacle');
            this.parentElement.appendChild(obstacle);
            this.element = obstacle;
            return this;
        }

        this.destroyObstacle = function () {
            this.parentElement.removeChild(this.element);
        }

        this.updateObstacle = function () {

            that.element.style.top = that.distance + 'px';
            that.distance = parseInt(that.element.style.top.replace('px', '').trim());

            that.distance += SPEED


        }

    }

    function Bullet(positionX, positionY, parentElement) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.parentElement = parentElement;
        this.bulletElement = null;
        var that = this;



        this.createBullet = function () {
            var bullet = document.createElement('div');
            bullet.style.width = 30 + 'px';
            bullet.style.height = 30 + 'px';
            bullet.id='bullet';
            bullet.style.backgroundColor = "transparent";
            // bullet.style.backgroundImage = "url('images/b.png')";
            bullet.style.position = "absolute";
            bullet.style.borderRadius = "25px"
            bullet.style.left = this.positionX + 'px';
            bullet.style.bottom = this.positionY + 'px';
            this.parentElement.appendChild(bullet);
            this.bulletElement = bullet;
        }

        this.setBulletPosition = function () {
            this.bulletElement.style.left = this.positionX + 'px';
            this.bulletElement.style.bottom = this.positionY + 'px';
        }

        this.updateBullet = function () {
            this.bulletElement.style.backgroundColor = "#44a5ea";
            // this.bulletElement.style.backgroundImage='url("Images/b.png")';

            this.positionY += 10;
            this.setBulletPosition();

        }



    }

    function Game(heightPlayer, widthPlayer, heightObs, widthObs, parentElement) {
        var obstacles = [];
        this.heightPlayer = heightPlayer;
        this.widthPlayer = widthPlayer;
        this.parentElement = parentElement;
        this.heightObs = heightObs;
        this.widthObs = widthObs;
        var totalDistance = 0;
        var pos = 0;
        var obstacleCount = 0;
        this.playerName;
        var that = this;
        var lane = {
            'first': 70,
            'second': 270,
            'third': 470
        }
        var play;
        var score = 0;
        var highScore = 0;

        this.randomLane = function () {
            return Math.floor(Math.random() * 59 + 1);
        }

        this.generateObstacles = function () {

            if (this.randomLane() >= 0 && this.randomLane() < 15) {
                obstacles[obstacleCount++] = new Obstacle(heightObs, widthObs, parentElement, lane.first).drawObstacle();
                obstacles[obstacleCount++] = new Obstacle(heightObs, widthObs, parentElement, lane.third).drawObstacle();
            } else if (this.randomLane() >= 15 && this.randomLane() < 30) {
                obstacles[obstacleCount++] = new Obstacle(heightObs, widthObs, parentElement, lane.second).drawObstacle();
            } else if (this.randomLane() >= 30 && this.randomLane() < 45) {
                obstacles[obstacleCount++] = new Obstacle(heightObs, widthObs, parentElement, lane.first).drawObstacle();
                obstacles[obstacleCount++] = new Obstacle(heightObs, widthObs, parentElement, lane.second).drawObstacle();
            } else {

                obstacles[obstacleCount++] = new Obstacle(heightObs, widthObs, parentElement, lane.second).drawObstacle();
                obstacles[obstacleCount++] = new Obstacle(heightObs, widthObs, parentElement, lane.third).drawObstacle();
            }

        }

        this.collisionDetection = function (player) {


            for (var i = 0; i < obstacles.length; i++) {
                if (parseInt(player.element.style.bottom.replace("px", "").trim()) < parseInt(obstacles[i].element.style.top.replace("px", "").trim()) - 300
                    && ((obstacles[i].element.style.left === '270px' && player.element.style.left === '270px')
                        || (obstacles[i].element.style.left === '70px' && player.element.style.left === '70px')
                        || (obstacles[i].element.style.left === '470px' && player.element.style.left === '470px'))) {
                    clearInterval(play);

                    this.gameOver();
                }
            }
        }

        this.bulletCollisionDetection = function (bullet) {
            for (var i = 0; i < obstacles.length; i++) {
                if (parseInt(bullet.bulletElement.style.top.replace("px", "").trim()) - parseInt(obstacles[i].element.style.top.replace("px", "").trim()) == 0
                    && ((obstacles[i].element.style.left === '270px' && bullet.bulletElement.style.left === '270px')
                        || (obstacles[i].element.style.left === '70px' && bullet.bulletElement.style.left === '70px')
                        || (obstacles[i].element.style.left === '470px' && bullet.bulletElement.style.left === '470px'))
                ) {

                    console.log('bullet hit');

                }
            }

        }

        this.welcomeScreen = function () {
            var container = document.getElementsByClassName('game-container')[0];


            startScreenElement = document.createElement('div');
            // startScreenElement.style.position = 'relative';

            startScreenElement.style.width = '500px';
            startScreenElement.style.height = '200px';
            startScreenElement.id = 'welcomebox'
            startScreenElement.style.backgroundColor = 'gray';


            startScreenElement.style.borderRadius = '10%';
            startScreenElement.style.boxShadow = '0px 0px 20px grey';
            startScreenElement.style.margin = '0 auto';
            startScreenElement.style.padding = '50px';
            container.appendChild(startScreenElement)

            h1 = document.createElement('h1');
            h1.innerHTML = 'Welcome to the Race';
            h1.style.color = 'white';
            startScreenElement.appendChild(h1);

            // stertScreenElement.id='startScreen';

            // input = document.createElement('input');
            // input.setAttribute = 'required';
            // input.id = 'username';
            // input.placeholder = 'Your Name';
            // input.style.top = '30px';
            // input.style.left = '10px';
            // input.style.borderRadius = '10px';
            // input.style.height = '30px'
            // input.style.width = '300px'

            // startScreenElement.appendChild(input);

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
            startScreenElement.appendChild(button);

            button.addEventListener('click', function () {
                container.removeChild(startScreenElement);
              

                container.innerHTML = `
                    <div class="game-wrapper">
                        <div class="road">
                            
                        </div>
                        </div>
                        <div class="score-board">
                            <span>High Score:<span id="high-score">0</span></span>
                            <span>Your Score:<span id="your-score">0</span></span>
                        </div>
                    `;
                    



                var parentElement = document.getElementsByClassName('road')[0];
                var playGame = new Game(200, 100, 190, 100, parentElement);
                playGame.newGame();


            });


        }


        this.newGame = function () {
            var player = new PlayerCar(this.heightPlayer, this.widthPlayer, this.parentElement).drawCar();

            var bullet = new Bullet(parseInt(player.element.style.left.replace("px", "").trim()) + 50, parseInt(player.element.style.bottom.replace("px", "").trim()) + 200, this.parentElement);
            bullet.createBullet();

            play = setInterval(function () {
                document.getElementById("your-score").innerHTML = score;
                highScore = localStorage.getItem('highscore');
                document.getElementById('high-score').innerHTML = highScore;
                if (localStorage.getItem('highscore') !== null) {
                    if (localStorage.getItem('highscore') < score) {
                        localStorage.setItem('highscore', score);
                    }
                } else {
                    localStorage.setItem('highscore', score);
                }

                if (totalDistance === 880 && obstacles.length <= 6) {
                    that.generateObstacles();
                    score += 1;

                    if (score % 10 === 0) {
                        SPEED += 5;
                        if (SPEED >= 50) {
                            SPEED = 50;
                        }
                    }
                    totalDistance = 0;

                }

                that.playGame(player, bullet);
                totalDistance += 40;



            }, refreshRate);
        }

        this.playGame = function (player, bullet) {

            if (player.fireBullet === true) {

                bullet.updateBullet();



                if (bullet.bulletElement.style.bottom === '700px') {

                    bullet.positionY = parseInt(player.element.style.bottom.replace("px", "").trim()) + 200;
                    bullet.positionX = parseInt(player.element.style.left.replace("px", "").trim()) + 50;

                    bullet.createBullet();

                    player.fireBullet = false;

                }
            } else {
                bullet.positionY = parseInt(player.element.style.bottom.replace("px", "").trim()) + 200;
                bullet.positionX = parseInt(player.element.style.left.replace("px", "").trim()) + 50;
                bullet.setBulletPosition();
            }

            player.moveCar();
            this.parentElement.style.backgroundPositionY = pos + 'px';
            pos += SPEED;
            for (var i = 0; i < obstacles.length; i++) {


                obstacles[i].updateObstacle();
                this.collisionDetection(player);
                this.bulletCollisionDetection(bullet);

                if (parseInt(obstacles[i].element.style.top.replace('px', '').trim()) >= 550) {

                    obstacles[i].destroyObstacle();
                    obstacles.splice(i, 1);
                    obstacleCount--;

                }



            }


        }
        this.gameOver = function () {
            var road = document.getElementsByClassName('game-wrapper')[0];
            var scoreBoard = document.getElementsByClassName('score-board')[0];
            var container = document.getElementsByClassName('game-container')[0];

            container.removeChild(road);
            container.removeChild(scoreBoard);

            var game = document.createElement('div');
            game.style.height = 600 + 'px';
            game.style.backgroundColor = 'gray';
            container.appendChild(game);


            var gameover = document.createElement('div');
            gameover.style.textAlign = 'center';
            gameover.innerHTML = 'GAME OVER';
            gameover.style.color = 'white';
            gameover.style.padding = '90px 0px';
            gameover.style.fontSize = '50px';
            gameover.style.fontWeight = '800';
            gameover.style.lineHeight = '50px';

            var scoreText = document.createElement('div');
            scoreText.innerHTML = '<br>High Score =' + highScore;
            scoreText.innerHTML += '<br>Score =' + score;
            scoreText.style.color = 'white';
            scoreText.style.textAlign = 'center';
            scoreText.style.fontSize = '25px';
            scoreText.style.fontWeight = '400';
            scoreText.style.lineHeight = '40px';

            var reset = document.createElement('span');
            reset.style.display = 'block';
            reset.style.width = '200px';
            reset.style.textAlign = 'center';
            reset.style.marginLeft = '37%';
            reset.style.marginTop = '42px';
            reset.style.cursor = 'pointer';

            reset.style.fontSize = '25px';
            reset.style.fontWeight = '400';
            reset.style.lineHeight = '40px';
            reset.innerHTML = 'Play Again';
            reset.style.backgroundColor = 'green';
            reset.style.border = '1px solid white';
            reset.style.borderRadius = '10px';
            reset.style.color='white';


            game.appendChild(gameover);
            game.appendChild(scoreText);
            game.appendChild(reset);

            reset.addEventListener('click', function () {
                container.removeChild(game);

                container.innerHTML = `
    <div class="game-wrapper">
        <div class="road">
            
        </div>
        </div>
        <div class="score-board">
            <span>High Score:<span id="high-score">0</span></span>
            <span>Your Score:<span id="your-score">0</span></span>
        </div>
    `;

                SPEED = 20;

                var parentElement = document.getElementsByClassName('road')[0];
                var playGame = new Game(200, 100, 190, 100, parentElement);
                playGame.newGame();


            });












        }

    }


    var parentElement = document.getElementsByClassName('road')[0];
    var playGame = new Game(200, 100, 190, 100, parentElement);
    playGame.welcomeScreen(playGame);


})();