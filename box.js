class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'density' : 0.2
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.image = loadImage("sprites/dustbin.png");
    }
    display(){
      var pos =this.body.position;
      
      push ();
    
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };