class Dustbin{

    constructor(){
//700,500
        this.bin1=Bodies.rectangle(650,475,200,20,{isStatic:true})    //1100,580,200,20
        this.bin2=Bodies.rectangle(560,415,20,100,{isStatic:true})   //1010,520,20,100
        this.bin3=Bodies.rectangle(740,415,20,100,{isStatic:true})  //1190,520,20,100
        World.add(world,this.bin1)
        World.add(world,this.bin2)
        World.add(world,this.bin3)
    }

    display(){
        rectMode(CENTER);
        noStroke();
        fill("white");
        rect(this.bin1.position.x,this.bin1.position.y,200,20)
        rect(this.bin2.position.x,this.bin2.position.y,20,100)
        rect(this.bin3.position.x,this.bin3.position.y,20,100)

    }
}