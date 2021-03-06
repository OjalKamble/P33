class snowfall {
    constructor(x, y,radius) {

        var options ={
            restitution:0.4
        }

        this.radius = radius;
        this.image = loadImage("snow5.webp");
        this.body = Bodies.circle(x, y, this.radius,options);       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
};