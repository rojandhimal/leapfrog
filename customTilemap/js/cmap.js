// var mapContainer = document.getElementById('tilemap');
var mapContainer = document.createElement('div');
mapContainer.setAttribute('id','tilemap');
mapContainer.setAttribute('class','tilemap');




var main = document.getElementById('main');
var stickyBtn = document.getElementById('tileBtns');
var tile1 = document.getElementById('tile1');
var tile2 = document.getElementById('tile2');
var tile3 = document.getElementById('tile3');
var tile4 = document.getElementById('tile4');

var playCM = document.getElementById('playCM');
var resetCM = document.getElementById('resetCM');


var game = document.getElementById('gameCanvas')

var startElement = document.getElementById('game-wrapper');

startElement.removeChild(game);
// main.removeChild(mapContainer);

var welcomeScreen = document.createElement('div');
welcomeScreen.setAttribute('id','tile1');
welcomeScreen.setAttribute('class','tile');
welcomeScreen.setAttribute('onclick',' clicktile1()');
startElement.appendChild(welcomeScreen);

welcomeScreen.style.position='absolute';
welcomeScreen.style.width=1380+'px';
welcomeScreen.style.height=720+'px';
welcomeScreen.style.backgroundImage='url("images/initialscreen_sheet0.png")';
// welcomeScreen.style.marginLeft=10+'px';
// welcomeScreen.style.overflow='hidden';


var gameStartBtn = document.createElement('input');
gameStartBtn.type='submit';
gameStartBtn.value='Start Game'; 
gameStartBtn.style.color="red";
gameStartBtn.style.zIndex='20';
startElement.appendChild(gameStartBtn);
gameStartBtn.style.position='absolute';
gameStartBtn.style.top=460+'px';
gameStartBtn.style.fontSize=30+'px';
gameStartBtn.style.background='none';
gameStartBtn.style.border='none';
gameStartBtn.style.fontWeight='bold';
// gameStartBtn.style.cursor='pointer';
gameStartBtn.style.left=500+'px';
gameStartBtn.setAttribute('onclick','drawPlayMode()');



function drawPlayMode(){

    startElement.removeChild(welcomeScreen);
    startElement.removeChild(gameStartBtn);
    startElement.removeChild(PlayCustomMap);
    stickyBtn.removeChild(tile1);
    stickyBtn.removeChild(tile2);
    stickyBtn.removeChild(tile3);
    stickyBtn.removeChild(tile4);
    stickyBtn.removeChild(playCM);
    stickyBtn.removeChild(resetCM);

    startElement.appendChild(game);









var canvas1 = document.getElementById('gameCanvas');
// canvas1.style.backgroundImage="red";
var ctx1 = canvas1.getContext('2d');
var ctx = canvas1.getContext('2d');
var game1 = new Game(canvas1, ctx1).gameLoop();


    

}




var PlayCustomMap = document.createElement('input');
PlayCustomMap.type='submit';
PlayCustomMap.value='Play Custom Map'; 
PlayCustomMap.style.color="red";
PlayCustomMap.style.zIndex='20';
// startElement.insertAfter(PlayCustomMap,gameStartBtn);
PlayCustomMap.style.position='absolute';
PlayCustomMap.style.top=510+'px';
PlayCustomMap.style.fontSize=30+'px';
PlayCustomMap.style.background='none';
PlayCustomMap.style.border='none';
// gameStartBtn.style.cursor='pointer';
PlayCustomMap.style.left=500+'px';
PlayCustomMap.style.fontWeight='bold';
PlayCustomMap.setAttribute('onclick','drawCustomMap()');
startElement.appendChild(PlayCustomMap)





var Tvalue = 0;

var mapRow = 13;
var mapCol = 60;
var x;

var imgUrl;
var u;
var r;

var ch;

var idindex;

var map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


function drawCustomMap(){
    startElement.removeChild(welcomeScreen);
    startElement.removeChild(gameStartBtn);
    startElement.removeChild(PlayCustomMap);
    stickyBtn.style.position='fixed';

    for (let i = 0; i < mapRow; i++) {
        for (let j = 0; j < mapCol; j++) {
            var span = document.createElement("div");
            var func = 'changeTile(' + i + ',' + j + ')';
            span.setAttribute("onclick", func);
            span.setAttribute('class', 'tile');
            x = '' + i + j + '';
            span.setAttribute('id', x);
            mapContainer.appendChild(span);
        

            main.appendChild(mapContainer);
    
    
        }
    }
}






function resetMap(){
    // document.reload();
    

    Tvalue=0;
    for (let i = 0; i < mapRow; i++) {
        for (let j = 0; j < mapCol; j++) {
           map[i][j]=0;
           idindex = '' + i + j + '';
           ch = document.getElementById(idindex);
           ch.style.backgroundImage ='none';
       
    
        }
    }
}

function play(){
   
       

// var canvas1 = document.getElementById('gameCanvas');
// // canvas1.style.backgroundImage="red";
// var ctx1 = canvas1.getContext('2d');
// var ctx = canvas1.getContext('2d');
var game1 = new Game(canvas1, ctx1).gameLoop();
game1.map=map;

    
}


var canvas1 = document.getElementById('gameCanvas');
// canvas1.style.backgroundImage="red";
var ctx1 = canvas1.getContext('2d');
var ctx = canvas1.getContext('2d');


// console.log(x);


function clicktile1() {
    Tvalue = 1;
}


function clicktile2() {
    Tvalue = 2;
}

function clicktile3() {
    Tvalue = 3;
}

function clicktile4() {
    Tvalue = 4;
}

function changeTile(i, j) {
    console.log('clicked');
    console.log('before',map[i][j]);
    
    map[i][j] = Tvalue;
    console.log('after',map[i][j]);
    idindex = '' + i + j + '';
    // var idindex = '' + i + j + '';
    ch = document.getElementById(idindex);
    // console.log(ch);
    
    //  u = 'url("';
    //  r = '.png")'
    //  imgUrl =  u + Tvalue + r ;
    console.log(imgUrl);
    ch.style.backgroundImage ='url("images/'+Tvalue+'.png")';

}

// tile1.backgroundImage ='url("1.png")';