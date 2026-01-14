//pop - pace of play
//doesnt affect ratio of friction drag and engine
//just pace of play relative to map size
const POP = 0.5;

const drag = 0.0024 * POP;
const friction = 0.001 * POP;

class Car {
  xDim = 15;
  yDim = 25;
  x;
  y;
  xVelocity = 0;
  yVelocity = 0;
  direction = 90;
  engineForce = 0;
  mass = 100;
  dead = false;

  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }

  tick() {

    if(Math.sqrt((this.x - 500)*(this.x - 500)+(this.y - 400)*(this.y - 400)) > ringOUT/2 || Math.sqrt((this.x - 500)*(this.x - 500)+(this.y - 400)*(this.y - 400)) < ringIN/2) {
      this.die();
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
    strokeWeight(1);
    fill(255);
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

  die() {
    this.dead = true;
  }
}
