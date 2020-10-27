class Ball {
    constructor(x, y) {
      var options = {
          
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 50, options);
     this.radius=50;
      
      World.add(world, this.body);
    }
    display(){
        
      var pos=this.body.position;
      push();
      translate(pos.x, pos.y);
      
      ellipseMode(CENTER);
      strokeWeight(6);
      stroke("white");
      fill("blue");
    circle(0,0,this.radius)
      pop();
    }
  };
  

