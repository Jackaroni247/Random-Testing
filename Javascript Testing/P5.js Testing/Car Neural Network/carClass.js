//pop - pace of play
//doesnt affect ratio of friction drag and engine
//just pace of play relative to map size
const POP = 1;

const drag = 0.0024 * POP;
const friction = 0.001 * POP;

class car {
  xDim = 15;
  yDim = 25;
  x = 1000 / 2;
  y = 800 / 2;
  xVelocity = 0;
  yVelocity = 0;
  direction = 0;
  //engineForce = 10 * POP;
  engineForce = 0;
  mass = 100;

  tick() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.direction-=5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.direction+=5;
    }
    if (keyIsDown(UP_ARROW)) {
      this.engineForce = 10 * POP;
    } else {
      this.engineForce = 0;
    }

    var engineAcceleration = this.engineForce/this.mass


    //Applies drag force
    this.xVelocity += -this.xVelocity * (drag + friction);
    this.yVelocity += -this.yVelocity * (drag + friction);

    //Applies engine force
    this.xVelocity += cos(this.direction) * engineAcceleration;
    this.yVelocity += sin(this.direction) * engineAcceleration;

    //Pos based on vector
    this.x += this.xVelocity;
    this.y -= this.yVelocity;
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
