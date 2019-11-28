
var container = document.getElementById('container');
var wrapper = document.getElementById('wrapper');
var images = Array.from(wrapper.getElementsByTagName('img'));
var img_pos = document.getElementById('img-pos');

var left_btn = document.getElementById("left");
var right_btn = document.getElementById("right");

var minLimit = 0;
var margin = -0;
var maxLimit = -images.length * 900;
console.log("max limit", maxLimit);

var factor = 20;

function animateSlider(goleft) {
    if (goleft) {         //slide left
        margin -= factor;
    }
    else {                //slide right
        margin += factor;
    }

    var id = setInterval(function () {
        if (margin % 900 == 0) {
            clearInterval(id);
            if (margin == 0) {
                margin = maxLimit-900;
            } else if (margin == maxLimit) {
                margin = -900;
            }

        } else {
            if (goleft && margin >= maxLimit) {
                // next btn clicked
                margin -= factor;
            }
            else if (!goleft && margin <= minLimit) {
                // prev btn clicked
                margin -= factor;
            }

            wrapper.style.marginLeft = margin + 'px';
        }
    }, 1);
}


right_btn.onclick = function () {
    animateSlider(true);
    console.log("clicked right");

}

left_btn.onclick = function () {
    animateSlider(false);
    console.log("left click");
    
}
