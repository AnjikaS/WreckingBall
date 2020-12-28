class Ball{
    constructor(x,y,radius){
        var ball_options = {
            density: 1.2,
            frictionair: 0.02
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius, ball_options);
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("pink");
        stroke("purple");
        strokeWeight(5);
        ellipse(0,0,this.radius);
        pop();
    }
}