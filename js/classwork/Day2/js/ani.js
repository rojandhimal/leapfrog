var canvas1 = document.getElementById('myCanvas');
canvas1.setAttribute("style", "border:1px solid #d3d3d3;");
var ctx1 = canvas1.getContext('2d');
canvas1.width=1000;
canvas1.height=500;
var x = canvas1.width/2;
var y=canvas1.height/2;
var radius = 50;
var dy=1;

function animate(){
                    setInterval(function(){
                    ctx1.clearRect(0,0,1000,500);
                    if(  y + radius > 500 || y - radius < 0 )
                        {
                            dy = -dy;
                        }
                    y+=dy;
                    ctx1.beginPath();
                    ctx1.arc(x,y,radius,0,Math.PI*2,false);
                    ctx1.fillStyle="red";
                    ctx1.fill();
                        },0);
                    }
animate();