

class GameStarter {
    constructor(parentElement,height, width) {
        this.parentElement = parentElement;
        this.height=height;         //this is whole game 0r canvas height
        this.width=width;           //this is whole game 0r canvas width
        this.canvasElement;
        this.startBtn;
        this.ctx;
        this.position = 0;
    }


    draw = () => {
        this.canvasElement = document.createElement('div');
        // this.ctx = this.canvasElement.getContext('2d');
        this.canvasElement.style.height = this.height+'px';
        this.canvasElement.style.width = this.width+'px';
        this.canvasElement.style.border = '1px soldi #000';
        this.canvasElement.style.display = 'block';
        this.canvasElement.style.margin = '0 auto';
        // this.canvasElement.style.backgroundColor = '#d8d18f';
        this.canvasElement.style.backgroundImage = 'url("images/fg.png"),url("images/bg2.png")';
        this.canvasElement.style.backgroundPosition = 'bottom, top';
        this.canvasElement.style.backgroundRepeat = 'repeat-x';
        // this.canvasElement.style.backgroundSize = '100%';
        this.canvasElement.id = 'canvasScreen';
        this.parentElement.appendChild(this.canvasElement);

    };

    moveBackground = () => {
        this.canvasElement.style.backgroundPositionX = this.position + 'px';
        this.position-=1;
        if(this.canvasElement.backgroundPositionX=='-285px'){
            this.position=0;
        }
    };


    init = () => {
        this.draw();
        var x = new Birds(this.canvasElement,30,30);
        x.init();
        setInterval(
           this.moveBackground.bind(this),5);
    }
   

}


var app = document.getElementById('app1');


var x =new GameStarter(app,500,300);
x.init();

