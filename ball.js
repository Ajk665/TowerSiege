class Ball{
    constructor(x,y) {
      var options = {
        'isStatic':false,
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      }

      this.body = Bodies.rectangle(x,y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("white");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
} 