class RainDrop {
    constructor(x,y){

    /*    var options = {
                'gravity' = 1.0 
        };*/

     //   this.body=Bodies.rectangle(x,y,width,height,options);
        this.body = Bodies.rectangle(x,y,width,height,);

        this.y = y ;
        this.x = x;
      //  this.width = w ;
      //  this.height = h ;
       // this.image = loadImage("drop.png");

        World.add(world, this.body);

    }

    display(){
       // image = (this.image , 0,-100)
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        //this.velocityY = 20;

        translate(pos.x, pos.y);
        fill("black");
     //   rotate(angle);
   //  this.body.velocityY = 20 ;
        rectMode(CENTER); 
      //  rect(this.x,this.y, 5,5);
        var drop = createSprite(this.x,this.y,5,5);
        var recta = rect(this.x,this.y,5,5);
        if(frameCount  % 1 ===0){
            drop.x ++ ;
        }

        console.log(drop);
        pop();


    }
}