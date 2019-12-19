function weapon(ctx, hero) {
    this.hero = hero;
    this.surikenSprite = new Image();
    this.surikenSprite.src = 'images/shuriken_item_sheet0.png';
    this.sx = 0;
    this.sy = 0;
    this.bh = 34;
    this.bw = 34;
    this.x = this.hero.x;
    this.y = this.hero.y;
    this.bulletSpeed = 0.5;
    this.firemode;

    this.draw = function (firemode) {
        this.firemode=firemode;
        // console.log(this.firemode)
        // if(this.firemode==1){
        this.update();
        ctx.drawImage(this.surikenSprite, this.sx, this.sy, this.bw, this.bh, this.x, this.y + 50, this.bw / 2 + 5, this.bh / 2 + 5);
    // }
        
    }
    this.update = function () {
        
        this.x = this.x + this.bulletSpeed * 1;
        this.bulletSpeed++;
        
    }
}


