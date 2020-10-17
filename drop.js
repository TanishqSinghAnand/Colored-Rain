class Drop{
    constructor(x,y,width,height){
        this.body = rect(x,y,width,height);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        var rand = random(1,4);
        var rand2 = color(floor(random(0,255)))
    }
    display(){
        push();
        fill(random(0,255),random(0,255),random(0,255))
        rectMode(CENTER);
        rect(this.x, this.y, this.width,this.height);
        pop();
      }
    fall(speed){
        this.y +=speed;
    }
}