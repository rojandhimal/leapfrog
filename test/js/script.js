
var container = document.getElementById('container');
var wrapper = document.getElementById('wrapper');
var images = Array.from(wrapper.getElementsByTagName('img'));
var img_pos = document.getElementById('img-pos');

var left_btn = document.getElementById("left");
var right_btn = document.getElementById("right");

var counter =0;

function setAttr(elem, att, val){
    elem.setAttribute(att,val);
}

right_btn.setAttribute('onclick','goRight()');
left_btn.setAttribute('onclick','goLeft()');


// setAttr(left_btn,'onClick','goLeft()');


// This is to slide image right
var dir=0;
function goRight(){
    // console.log("counter",counter);
    // // clearInterval(animateSlider)
    
    // wrapper.style.marginLeft = -((counter)*images[0].width) + 'px';

    // if(counter>images.length-2){
    //     counter=-1;
    // }
    // counter++;
    

    dir++;
    var myVar = setInterval(slideOneImg, 100);
    

}



// This is to slide image left

function goLeft(){
    console.log("counter",counter);
    wrapper.style.marginLeft = -(counter)*images[0].width+ 'px';
    imgPosColor(counter);
    if(counter<=0){
        counter=images.length;
    }
    counter--;

}

function imgPosColor(counter){
    var active_li = document.getElementById('img-li'+counter);
    // active_li.classList.remove('img-li');
    active_li.classList.replace('img-li','active');
}


// goLeft(1);
// This is total width of images in slider
wrapper.style.width = (images.length * images[0].width) + 'px';
// console.log("wrapper width",wrapper.style.width)

images.forEach(function (image, index) {
    imgPos(index);
})



// var left = 1;
// var right = -1;
// var unit=0;
// function animateSlider(direction){
//     wrapper.style.marginLeft=-(unit*direction)+'px';
//     unit+=10;
//     if(unit+900+'px'== wrapper.style.width){
//                 unit=0;
//             }
   
// }


// This function slide only one image

// function slideOne(){
//     setInterval(function(){
//         wrapper.style.marginLeft=--(unit*direction)+'px';
//         unit+=10;
//         },200)
// }

// slideOne();


function next() {
    
    
    // setInterval(function(){
    //      animateSlider(left);
    // },100);

   
    
}

function imgPos(index) {
    var list = document.createElement('li');
    list.setAttribute('value', index);
    list.setAttribute('class', 'img-li');
    list.setAttribute('id', "img-li"+index);
    list.setAttribute('onClick', '');
    img_pos.appendChild(list);
    console.log("list created");
}


next();






// var left = 1;
// var i = 0;
// var unit=0;
// function animateSlider(direction){
//     wrapper.style.marginLeft=-(unit*direction)+'px';
//     unit+=100;

//     if(unit+900+'px'== '1800px'){
//         unit=0;
        
//     }
// }



// var myVar = setInterval(slideOneImg, 100);
var left = 1;
var i = -1;
var unit=0;
var nxt
function slideOneImg() {
    wrapper.style.marginLeft=-(unit*dir)+'px';
    nxt = unit%900;
    if(unit+'px'== '900px'){
       myStopFunction();
        
    }
    unit+=100;

}

function myStopFunction() {
  clearInterval(myVar);
}

