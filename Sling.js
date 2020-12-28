class Sling{
    constructor(body, point){
        var sling_options = {
            bodyA: body,
            pointB: point,
            stiffness: 1.2,
            length: 320
        }
        this.sling = Constraint.create(sling_options);
        World.add(world, this.sling);
        this.pointB = point;
    }
    display(){
       line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, 
        this.pointB.y);
    }
}
