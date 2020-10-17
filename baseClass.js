class baseClass{
    constructor(x,y,width,height){
        this.body = rect(x,y,width,height);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        var rand = random(1,4);
        var rand2 = random(0,255);
        this.image = loadImage("sprites/dollar1.png");
  
    }
  
    display(){
        push();
        rectMode(CENTER);
        color(rand2)
        rect(this.x, this.y, this.width,this.height);
        pop();
    }
  }