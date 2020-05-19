class Paper{
    constructor(){
        var opt={
            isStatic:false,
            restitution:0.6, //0.3
            friction:0.5,
            density:1,

            
        }
        this.body=Bodies.circle(100,200,20,opt);
        World.add(world,this.body)

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(0,0,17,17);
        pop();
    }
}