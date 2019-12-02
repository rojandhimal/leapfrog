var lane = document.getElementById('lane');
var hero_car = document.getElementById('car');
var parentElement = document.getElementById('container');

console.log(parentElement);




function getRandomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) ) + min;
}


var left = 110;
var speed = 10;
var goleft;
var score;
var direction;
var track = 0;


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
    if (key.keyCode == '97' || key.keyCode === 'ArrowRight') {
        if (track == 2 || track == 1) {
            console.log("go left");
            track -= 1;
            left-=120;
            hero_car.style.left = left + 'px';

        }


    }
    if (key.keyCode == '100'||key.keyCode === 'ArrowRight') {
        if (track == 0 || track == 1) {
            track += 1;
            left+=120;
            hero_car.style.left = left + 'px';
            console.log("go right");
        }

    }
}


var lanes = getRandomNumber(0,3); 
console.log("Obj lanes",lanes);



function pedisObj(parentElement,lanes,index){
    this.parentElement = parentElement;
    this.lanes = lanes;
    // this.position = position;
    this.pedisElement;
    this.index=index;
    
    this.init = function(){
        this.pedisElement = document.createElement('div');
        this.pedisElement.id = 'pedistObj'+index;
        // this.pedisElement.class = 'pedistObj';
        this.pedisElement.setAttribute('class','pedistObj')
        this.pedisElement.style.width='50px';
        this.pedisElement.style.height='120px';
        this.pedisElement.style.position='absolute';
        this.pedisElement.style.top='20px';
        this.pedisElement.style.left='100px';
        this.pedisElement.style.zIndex='20';
        this.pedisElement.style.backgroundSize='100% 80%';
        this.pedisElement.style.backgroundRepeat='no-repeat';
        this.pedisElement.style.rotate='180';
        

        


        this.parentElement.appendChild(this.pedisElement);
        console.log("child added");

        if(this.lanes==0){
            this.pedisElement.style.left='50px';
        }
        else if(this.lanes==1){
            this.pedisElement.style.left='150px';
            
        }
        else if(this.lanes==2){
            this.pedisElement.style.left='250px';
            
        }
     

    }


    

}


var x = new pedisObj(parentElement,1,1).init();
var x = new pedisObj(parentElement,2,2).init();   



