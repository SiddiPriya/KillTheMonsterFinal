class superHero{
    constructor(x,y,width,height){
var options={
density:1.0,
frictionAir:1
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height = height;
this.image=loadImage("images/Superhero-01.png")
World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y-100);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
}
}