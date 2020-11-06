class Box{
    constructor(x,y) {
      var options = {
        'isStatic':false,
        'friction': 0,
        'restitution':0.4
      }

      this.body = Bodies.rectangle(x,y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      this.visibility = 255;
    }
    display(){
      if(this.body.speed < 5){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      }else{
        World.remove(world,this.body);
        push()
        this.visibility = this.visibility - 5;
        pop()
      }
    }
    score(){

      if(this.visibility <0 && this.visibility >-255)
    
      score++
    
    } 
}