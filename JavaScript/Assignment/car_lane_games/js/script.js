var lane = document.getElementById('lane');
var hero_car = document.getElementById('car');
var parentElement = document.getElementById('container');



var left = 110;
var speed = 10;
var goleft;
var score;
var direction;
var track = 0;

// function cars(carname,speed,score) {

//     this.init = function(){
//         this.car.style.left = left +'px';
//     }
//     this.car=carname;
//     this.moveCar = function(direction){
//         this.car.style.display='block';
//         this.car.style.left = left +'px';
//     }
// }


// var car1 = new cars(hero_car,speed,score);


var i = 0;

function moveLane() {
    speed += 1;
    // console.log("speed",speed);

    lane.style.backgroundPositionY = speed + 'px';
}


setInterval(moveLane, 3);

hero_car.style.left = left + 'px';


window.addEventListener('keypress', checkKeyPress, false);

function checkKeyPress(key) {
    if (key.keyCode == '97') {
        if (track == 2 || track == 1) {
            console.log("go left");
            track -= 1;
            left-=120;
            hero_car.style.left = left + 'px';

        }


    }
    if (key.keyCode == '100') {
        if (track == 0 || track == 1) {
            track += 1;
            left+=120;
            hero_car.style.left = left + 'px';
            console.log("go right");
        }

    }
}



