class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length:250,
            stiffness:1.5
           
        }

        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
   

    display(){
var pointA=this.sling.bodyA.position
var pointB=this.pointB;
strokeWeight(4);
stroke("red")
line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    
}