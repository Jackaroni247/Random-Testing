class bird {
  x = width / 4;
  y = height / 2;
  yVelocity = 0;
  alive = true;
  score = 0;
  brain = new neuralNetwork();

  reset() {
    this.x = width / 4;
    this.y = height / 2;
    this.yVelocity = 0;
    this.score = 0;
  }
  tick() {
    if (this.y > height || this.y < 0) {
      this.alive = false;
    }
    for (var i = 0; i < walls.length; i++) {
      if (
        this.x > walls[i].x &&
        this.x < walls[i].x + 20 &&
        (this.y < walls[i].gapY || this.y > walls[i].gapY + walls[i].gapHeight)
      ) {
        this.alive = false;
      } else if (this.x > walls[i].x && walls[i].checkScore) {
        this.score += 1;
        runScore = max(this.score, runScore);
        highScore = max(this.score, highScore);
        walls[i].checkScore = false;
      }
    }
    this.y += this.yVelocity;
    if (!(this.yVelocity > 12)) {
      this.yVelocity += gravity;
    } else {
      this.yVelocity = 12;
    }
    if (this.alive) {
      var inputs = [];
      inputs[0] = this.y / height;
      inputs[1] = this.yVelocity / 20;
      inputs[2] = 1;
      inputs[3] = width;
      for (var i = 0; i < walls.length; i++) {
        //console.log(walls);
        if (walls[i].x > width / 4) {
          inputs[2] = min(inputs[2], (walls[i].x - this.x)/width);
          if (inputs[2] == (walls[i].x - this.x)/width) {
            inputs[3] = walls[i].gapY/height;
          }
        }
      }

      if(this.brain.think(inputs)) {
        //console.log(this);
        this.jump();
      }
    }
  }
  show() {
    fill(255);
    ellipse(this.x, this.y, 10);
  }
  jump() {
    if (this.yVelocity > 0) {
      this.yVelocity = 0;
    }
    if (!this.yVelocity <= -9) {
      this.yVelocity -= 8;
    } else {
      this.yVelocity = -9;
    }
  }
}
