const drag = 0.44;
const friction = 1;

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
  mass;

  tick() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.direction--;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.direction++;
    }
    var speed = sqrt(sq(this.xVelocity) + sq(this.yVelocity));

    this.acceleration =
    this.enginePower - sq(this.speed) * drag - this.speed * friction;

    //Final Vector
    this.xVelocity += cos(this.direction) * this.acceleration;
    this.yVelocity += sin(this.direction) * this.acceleration;

    //Pos based on vector
    //this.x += this.xVelocity;
    //this.y += this.yVelocity;
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
