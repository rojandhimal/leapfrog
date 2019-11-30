var lane = document.getElementById('lane');
var hero_car = document.getElementById('car');

  
var left = 90;
var right = 575;
var mid = 340;
var speed = 10;
var goleft;
var score;
var direction;

function cars(carname,speed,score) {

    this.init = function(){
        this.car.style.left = left +'px';
    }
    this.car=carname;
    this.moveCar = function(direction){
        this.car.style.display='block';
        this.car.style.left = left +'px';
    }
}

// hero_car.style.left = left +'px';

// var car1 = new cars(hero_car,speed,score);


var i = 0;

function moveLane() {
    speed+=1;
    console.log("speed",speed);
    
    lane.style.backgroundPositionY = speed + 'px';
}


setInterval(moveLane, 3);


window.addEventListener('keypress', checkKeyPress, false);

function checkKeyPress(key){
    if(key.keyCode== '97'){
       direction=left;
        console.log("go left");
        
    }
    if(key.keyCode== '100'){
       direction=right;
        console.log("go right");
        
    }
}

