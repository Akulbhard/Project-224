class paper {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'isStatic' :false,
          'friction':0.5,
          'density':1.2
      }
      this.body = Matter.Bodies.circle(x,y, radius,options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      
      fill("white");
      rect(this.body.position.x, this.body.position.y,this.radius);
      
    }
  };