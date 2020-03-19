
class Tanker  {
  constructor(x, y, width, height) {
        var options = {
          isStatic:true,
      }
    
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.height = height;
      this.width = width;
      World.add(world,this.body);

  }

  display(){
    // Draw the tanker the way you like.
    // You could also use an image if you want a specific look
    var pos = this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y,this.width,this.height);
  }
}














/*class Tanker {
  constructor(x, y, width, height, start, stop) {
        var options = {
          //'restitution': 1.0,
          //'friction': 0.8,
          'density': 0.8,
          isStatic:true
      }
    
      this.body = Bodies.arc(x,y,width,height, start, stop,options);
      this.height = height;
      this.width = width;
      World.add(world,this.body);

  }

  display(){
    // Draw the tanker the way you like.
    // You could also use an image if you want a specific look
    var pos = this.body.position;
    //var angle = this.body.angle;
    push();
    //angle=translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    arc(x, y, this.width , this.height , start, stop, PI + QUARTER_PI, CHORD);
    pop();
  }
}*/