
function Carousel(containerId,containerWidth,wrapperId,imagePositionId,wrapperWidth,slideSpeed,slideHoldTime,nextBtnId,prevBtnId,direction){
var that =this;

this.direction=direction;
this.containerId=containerId;
this.containerWidth=containerWidth;
this.wrapperId=wrapperId;
this.imagePositionId=imagePositionId;
this.wrapperWidth=wrapperWidth;
this.slideSpeed=slideSpeed;
this.slideHoldTime=slideHoldTime;
this.nextBtnId=nextBtnId;
this.prevBtnId=prevBtnId;
var wrapper;
var images;
var position;
var list;
var counter=0;
var currentIndex=0;
this.setContainerWidth = function(){
    var container = document.getElementById(this.containerId);
    container.style.width=this.containerWidth+'px';
}
this.setWrapperWidth = function(){
    wrapper = document.getElementById(this.wrapperId);
    wrapper.style.width=wrapperWidth+'px';
}
this.loadImages = function(){
    images=Array.from(wrapper.getElementsByTagName('img'));
}
this.getImagePositionIndicator=function(){
    position=document.getElementById(this.imagePositionId);
}

this.slider = function(){
    
    
images.forEach(function(image,index) {
    var list = document.createElement('li');
    list.classList.add('inactive');
    list.setAttribute('value',index);
    // list.setAttribute('onclick','showImage(this)');
    list.addEventListener('click',function(){
        showImage(this);
    });
    position.appendChild(list);
});

list = Array.from(position.getElementsByTagName('li'));
    list[0].classList.add('active');


function imagePosition(){
  list.forEach(function(li){
            if(li.value===counter){
                li.classList.add('active');
            }else{
                li.classList.remove('active');

            }
        });
}

function showImage(image){
currentIndex=image.value;


if(currentIndex>counter){

    transitionFront(currentIndex-1,1);
}
else if(currentIndex<counter){

    transitionBack((currentIndex+1),-1);
}


counter=currentIndex;

    imagePosition();   
}
function transitionBack(index){
    var speed=counter*that.containerWidth;
    
  var slide=setInterval(function(){
        wrapper.style.marginLeft=-(speed)+'px';
        speed-=10;
  
        
        if(speed==((index-1)*that.containerWidth)){
            
            setTimeout(function(){
                clearInterval(slide);
            },0);
        }
    },0);
}
function transitionFront(index){
    var speed=(counter)*that.containerWidth;
  var slide=setInterval(function(){
        wrapper.style.marginLeft=-(speed)+'px';
        speed+=10;
     
        
        if(speed==((index+1)*that.containerWidth)){
            setTimeout(function(){
                clearInterval(slide);
            },0);
        }
    },1);
}

function next(){
transitionFront(counter);

if(counter>=(images.length-1)){
    transitionBack(1);
    counter=0;

}else{
++counter;
}
imagePosition();
}

function previous(){
transitionBack(counter);

if(counter<=0){
    transitionFront(images.length-2)
    counter=images.length-1;    
}else{
    counter--;

}
imagePosition();
}




var previousbtn = document.getElementById(this.prevBtnId);
var nextbtn = document.getElementById(this.nextBtnId);

nextbtn.addEventListener('click',next);   
previousbtn.addEventListener('click',previous);

}

this.autoSlider=function(){


list = Array.from(position.getElementsByTagName('li'));
    list[0].classList.add('active');


function imagePosition(){
  list.forEach(function(li){
            if(li.value===counter){
                li.classList.add('active');
            }else{
                li.classList.remove('active');

            }
        });
}
function transitionBack(index){
    var speed=counter*that.containerWidth;
    
  var slide=setInterval(function(){
        wrapper.style.marginLeft=-(speed)+'px';
        speed-=that.slideSpeed;
  
        
        if(speed==((index-1)*that.containerWidth)){
            
            setTimeout(function(){
                clearInterval(slide);
            },0);
        }
    },0);
}
function transitionFront(index){
    var speed=(counter)*that.containerWidth;
  var slide=setInterval(function(){
        wrapper.style.marginLeft=-(speed)+'px';
        speed+=that.slideSpeed;
     
        
        if(speed==((index+1)*that.containerWidth)){
            setTimeout(function(){
                clearInterval(slide);
            },0);
        }
    },1);
}

    function next(){
transitionFront(counter);

if(counter>=(images.length-1)){
    transitionBack(1);
    counter=0;

}else{
++counter;
}
imagePosition();
}
function previous(){
transitionBack(counter);

if(counter<=0){
    transitionFront(images.length-2)
    counter=images.length-1;    
}else{
    counter--;

}
imagePosition();
}
    setInterval(function(){
        if(that.direction==='left'){
            next();
        }else{
        previous();

        }
    },that.slideHoldTime*1000);
}
}


function init(){
var numberOfImages=6;
var widthOfEachImage=900;
var wrapperWidth=numberOfImages*widthOfEachImage;

var slideSpeed=15        //unit 
var slideHoldTime = 3   //sec

var next='next';
var previous='previous';
var direction = 'left';
var carouselOne= new Carousel('container',widthOfEachImage,'wrapper','image-position',wrapperWidth,slideSpeed,slideHoldTime,next,previous,direction);
carouselOne.setContainerWidth();
carouselOne.setWrapperWidth();
carouselOne.loadImages();
carouselOne.getImagePositionIndicator();
carouselOne.slider();
carouselOne.autoSlider();


var numberOfImages2=8;  
var widthOfEachImage2=800;
var wrapperWidth2=numberOfImages2*widthOfEachImage2;

var slideSpeed2=20        //unit 
var slideHoldTime2 = 2   //sec

var next2='next2';
var previous2='previous2';
var carouselTwo = new Carousel('container2',widthOfEachImage2,'wrapper2','image-position2',wrapperWidth2,slideSpeed2,slideHoldTime2,next2,previous2);
carouselTwo.setContainerWidth();
carouselTwo.setWrapperWidth();
carouselTwo.loadImages();
carouselTwo.getImagePositionIndicator();
carouselTwo.slider();
carouselTwo.autoSlider();
}
init();

