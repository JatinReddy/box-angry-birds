class Log{
    constructor(x,y,height,angle){
        var options = {
            restitution : 0.8,
            friction : 1
            
        }
        this.body = Bodies.rectangle(x,y,20,height,options)
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
        this.width = 20;
        this.height = height;
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        fill("orange");
        translate(pos.x,pos.y)
        angleMode(RADIANS)
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }

}