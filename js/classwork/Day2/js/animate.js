var canvas = document.getElementById('myCanvas2');
canvas.setAttribute("style", "border:1px solid #d3d3d3;");
var ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 50;
var yinc = 1;



function animate() {
    setInterval(function () {
        ctx.clearRect(0, 0, 1000, 500);
        if (y + radius > 500 || y - radius < 0) {
            yinc = -yinc;
        }


        y += yinc;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "red";
        ctx.fill();
    }, 0);
}
animate();