var canvas = document.getElementById("myCanvas");
canvas.setAttribute("width", "300px");
canvas.setAttribute("height", "300px");
canvas.setAttribute("style", "border:1px solid #d3d3d3;");
document.body.appendChild(canvas);

//Then you can draw a point at (10,10) like this:

var ctx = canvas.getContext("2d");
// ctx.fillRect(10,20,5,5);
// ctx.fillRect(40,40,5,5);
// ctx.fillRect(60,20,5,5);


var point = [{x:10,y:20},
        {x:40,y:40},        
        {x:60,y:40},
        {x:100,y:100},]

        
point.forEach(function(val){
    ctx.beginPath();
    ctx.moveTo(val.x,val.y);
    ctx.arc(val.x, val.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle="black";
    ctx.fill();
    
});

