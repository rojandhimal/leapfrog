(function(){
   
    function Box(parentElement,width,height,dx,dy){
        this.parentElement = parentElement;
        this.width=width;
        this.height=height;
        this.dx=dx;
        this.dy=dy;
        // this.x=5;
        // var that=this;

        this.init = function(){
            var box = document.createElement('div');
            box.style.height=this.height+'px';
            box.style.width=this.width+'px';
            box.classList.add('box');
            this.parentElement.appendChild(box);
            this.element=box;       //this shows box is element
            this.element.onclick=this.boxClicked.bind(this);
            this.draw();
            return this;

        }
        
        this.setPosition = function(x,y) {
            this.x=x;
            this.y=y;
        }

        this.draw = function(){             //draw box at x y cordinate
            this.element.style.left=this.x+'px';
            this.element.style.top=this.y+'px'
        }

        this.move =function(){
        }


        this.boxClicked = function(){
            console.log("Box clicked");
            
        }
    } //This is end of Box class

    var parentElement = document.getElementById('box-container');

    var box = new Box(parentElement,50,50,2,2);
    box.init();

    function Game(){
       
    }  //This is end of Game Class
   
}


)();