class Birds {
    constructor(parentElement, height, width) {
        this.parentElement = parentElement;
        this.height = height;
        this.width = width;
        this.birdElement;
        this.top = 0;
        this.upInc = 10;
        this.ctx;
    }

    draw = () => {
        this.ctx=this.parentElement.getContext('2d');
        this.ctx.drawImage(url("images/flappy_bird1.gif"),10,10);

        // this.birdElement = document.createElement('img');
        // this.birdElement.style.position = 'absolute';
        // this.birdElement.style.height = this.height + 'px';
        // this.birdElement.style.width = this.width + 'px';
        // this.birdElement.style.left = '50px';
        // // this.birdElement.style.backgroundColor = '#d8d18f';
        // this.birdElement.style.backgroundImage = 'url("images/flappy_bird1.gif")';
        // this.birdElement.style.top = this.top + 'px';
        // this.birdElement.style.backgroundSize = '100% 100%';

        // this.parentElement.appendChild(this.birdElement);

    };

    flyBird = () => {
        var keyFunctionHandler;
        document.addEventListener('keyup', keyFunctionHandler = (e) => {
            this.key = e.keyCode;
        });
        if (this.key === 32) {
            console.log('space clocked');
            this.top += this.upInc;
            this.birdElement.style.top = this.top + 'px';
            document.removeEventListener('keyup', keyFunctionHandler);
            this.key = null;
            
            
        }
    }




    fallBirds = () => {
        this.birdElement.style.top = this.top + 'px';
        this.top += 1;
        if (this.top >= 380) {
            this.top = 0;
        }

    };

    init = () => {
        this.draw();
        this.flyBird();
        setInterval(this.fallBirds.bind(this), 3);
        // this.flyBird();
    }
}