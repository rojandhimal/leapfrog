var circle = document.getElementById('circle');

var y = 0;
var yinc = 5;

function animate() {
    setInterval(function () {
        if (y + 100 > 500 || y < 0) {
            yinc = -yinc;
        }
        y += yinc;
        circle.style.top = y + 'px';
    }, 20);
}
animate();