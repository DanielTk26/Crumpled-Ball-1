class Ground{
    constructor(){
        this.body=Bodies.rectangle(750,495,1500,20,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,1500,20)
    }

}