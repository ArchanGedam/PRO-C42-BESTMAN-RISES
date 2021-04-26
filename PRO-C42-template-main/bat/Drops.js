class Drops {
    constructor(x, y) {

        var options ={
            restitution:0.4,
            friction: 0.1,
        }
        this.r = 10;
        this.rain = Bodies.circle(x, y,this.r,options);       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
update(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
    
}
};