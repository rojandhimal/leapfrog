function weapon(ctx,hero){
    this.hero=hero;
    this.surikenSprite = new Image();
    this.surikenSprite.src = 'images/shuriken_item_sheet0.png';
    this.sx=0;
    this.sy=0;
    this.bh=34;
    this.bw=34;
    this.x= this.hero.x;
    this.y= this.hero.y;
    this.bulletSpeed=2;

    this.draw = function(){
        this.update();
        ctx.drawImage(this.surikenSprite, this.sx,this.sy, this.bw, this.bh, this.x, this.y, this.bw, this.bh);
    }
    this.update = function(){
        this.y=this.y+this.bulletSpeed*2;
    }
}