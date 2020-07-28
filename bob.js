class Bob {
    constructor(x, y) {
      var options = {
          isStatic:true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 30;
      this.height =30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
     
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  