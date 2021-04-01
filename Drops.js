class drop{
    constructor(x,y)
    {
        var opt={
            isStatic: false,
            density: 0.8,
            friction: 0.001,
            restitution: 0.1,
        }

        this.radius = 10;
        this.body = Bodies.circle(x,y,this.radius,opt);
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();

        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body, {x: random(0,600), y: random(0, 650)});
        }
    }
}