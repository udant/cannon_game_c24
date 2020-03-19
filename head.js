class Head {
    constructor(x, y, width, height) {
          var options = {
            isStatic:true,
        }
        this.head = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world,this.head);

    }

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      var pos = this.head.position;
      var angle=mouseX/50;
      push();
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
}
