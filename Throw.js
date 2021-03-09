class Throw{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:10
        }
        this.pointB=pointB;
        this.throw=Constraint.create(options)
        World.add(world,this.throw)
    }
    attach(body){
        this.throw.bodyA=body;
    }
fly(){
    this.throw.bodyA=null;
}
display(){
    if(this.throw.bodyA){
var pointA=this.throw.bodyA.position
var pointB=this.pointB
push()
strokeWeight(0)
stroke("black")
line(pointB.x,pointB.y,pointA.x,pointA.y)
    }
}
}