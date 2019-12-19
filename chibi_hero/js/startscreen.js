function StartScreen(){
this.canvas = canvas1;
this.ctx=ctx;

// this.canvas1.addEventListener('click', (e) => {
//     const mousePos = {
//         x: e.clientX - canvas.offsetLeft,
//         y: e.clientY - canvas.offsetTop
//     };
//     // console.log("clicked");
//     console.log('x', mousePos.x, 'y', mousePos.y);


//     if (mousePos.x >= 525 && mousePos.x < 720 && mousePos.y >= 59 && mousePos.y < 93) {
//         console.log("Start btn clicked");
//         console.log('x', mousePos.x, 'y', mousePos.y);
//         var game1 = new Game(canvas1, ctx1).gameLoop();


//     }

// });


}



window.onload = function() {
    var c = document.getElementById("gameCanvas");
    var ctx = c.getContext("2d");
    var img= new this.Image();
    img.src = 'images/initialscreen_sheet0.png';
    ctx.drawImage(img, 0, 0,500,500),0,0,500,500;
  }


var canvas1 = document.getElementById('gameCanvas');
// canvas1.style.backgroundImage="red";

var ctx = canvas1.getContext('2d');

new StartScreen(canvas1,ctx);
