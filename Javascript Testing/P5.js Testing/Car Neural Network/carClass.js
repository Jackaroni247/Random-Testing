const drag = 0.024;
const friction = 0.01;

class car {
  xDim = 20;
  yDim = 35;
  x = 1000 / 2;
  y = 800 / 2;
  xVelocity = 0;
  yVelocity = 0;
  direction = 0;
  acceleration = 0;
  enginePower = 5;
  mass = 100;

  tick() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.direction-=5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.direction+=5;
    }

    //Force to Acceleration
    this.acceleration = this.enginePower/this.mass;

    //Drag Force
    this.xVelocity -= (drag+friction) * this.xVelocity*this.xVelocity;
    this.yVelocity -= (drag+friction) * this.yVelocity*this.yVelocity;
    
    //Engine Force
    this.xVelocity += cos(this.direction) * this.acceleration;
    this.yVelocity += sin(this.direction) * this.acceleration;

    //Pos based on vector
    this.x -= this.xVelocity;
    this.y += this.yVelocity;
  }

  draw() {
    angleMode(DEGREES);
    triangle(
      this.x +
        (this.yDim / 2) * sin(-this.direction + 90) -
        (this.xDim / 2) * cos(-this.direction + 90),
      this.y -
        (this.yDim / 2) * cos(-this.direction + 90) -
        (this.xDim / 2) * sin(-this.direction + 90),
      this.x +
        (this.yDim / 2) * sin(-this.direction + 90) +
        (this.xDim / 2) * cos(-this.direction + 90),
      this.y -
        (this.yDim / 2) * cos(-this.direction + 90) +
        (this.xDim / 2) * sin(-this.direction + 90),
      this.x + cos(-this.direction) * (this.yDim/2)*8/5,
      this.y + sin(-this.direction) * (this.yDim/2)*8/5
    );
    quad(
      this.x +
        (this.yDim / 2) * sin(-this.direction - 90) -
        (this.xDim / 2) * cos(-this.direction - 90),
      this.y -
        (this.yDim / 2) * cos(-this.direction - 90) -
        (this.xDim / 2) * sin(-this.direction - 90),
      this.x +
        (this.yDim / 2) * sin(-this.direction - 90) +
        (this.xDim / 2) * cos(-this.direction - 90),
      this.y -
        (this.yDim / 2) * cos(-this.direction - 90) +
        (this.xDim / 2) * sin(-this.direction - 90),

      this.x +
        (this.yDim / 2) * sin(-this.direction + 90) -
        (this.xDim / 2) * cos(-this.direction + 90),
      this.y -
        (this.yDim / 2) * cos(-this.direction + 90) -
        (this.xDim / 2) * sin(-this.direction + 90),
      this.x +
        (this.yDim / 2) * sin(-this.direction + 90) +
        (this.xDim / 2) * cos(-this.direction + 90),
      this.y -
        (this.yDim / 2) * cos(-this.direction + 90) +
        (this.xDim / 2) * sin(-this.direction + 90)
    );
  }
}
