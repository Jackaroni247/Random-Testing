class snake {
  xDirection = 1;
  yDirection = 0;
  xArr = [boardXSize / 2];
  yArr = [boardYSize / 2];
  alive = true;
  score = 0;
  timeAlive = 0;
  brain;
  constructor() {
    this.brain = new neuralNetwork();
  }

  tick() {
    this.timeAlive += 1;
    var appleN = 0;
    var appleNE = 0;
    var appleE = 0;
    var appleSE = 0;
    var appleS = 0;
    var appleSW = 0;
    var appleW = 0;
    var appleNW = 0;
    var snakeN = 0;
    var snakeNE = 0;
    var snakeE = 0;
    var snakeSE = 0;
    var snakeS = 0;
    var snakeSW = 0;
    var snakeW = 0;
    var snakeNW = 0;
    var wallN = 0;
    var wallNE = 0;
    var wallE = 0;
    var wallSE = 0;
    var wallS = 0;
    var wallSW = 0;
    var wallW = 0;
    var wallNW = 0;

    var checkX;
    var checkY;
    for (var k = 0; k < 8; k++) {
      for (var i = 0; i < searchDist; i++) {
        if (k === 0) {
          checkX = this.xArr[this.xArr.length - 1] + 0;
          checkY = this.yArr[this.yArr.length - 1] - i;
        } else if (k === 1) {
          checkX = this.xArr[this.xArr.length - 1] + i;
          checkY = this.yArr[this.yArr.length - 1] - i;
        } else if (k === 2) {
          checkX = this.xArr[this.xArr.length - 1] + i;
          checkY = this.yArr[this.yArr.length - 1] + 0;
        } else if (k === 3) {
          checkX = this.xArr[this.xArr.length - 1] + i;
          checkY = this.yArr[this.yArr.length - 1] + i;
        } else if (k === 4) {
          checkX = this.xArr[this.xArr.length - 1] + 0;
          checkY = this.yArr[this.yArr.length - 1] + i;
        } else if (k === 5) {
          checkX = this.xArr[this.xArr.length - 1] - i;
          checkY = this.yArr[this.yArr.length - 1] + i;
        } else if (k === 6) {
          checkX = this.xArr[this.xArr.length - 1] - i;
          checkY = this.yArr[this.yArr.length - 1] + 0;
        } else if (k === 7) {
          checkX = this.xArr[this.xArr.length - 1] - i;
          checkY = this.yArr[this.yArr.length - 1] - i;
        }
        if (
          checkX === apples[snakes.indexOf(this)].x &&
          checkY === apples[snakes.indexOf(this)].y
        ) {
          if (k === 0) {
            appleN = i;
          } else if (k === 1) {
            appleNE = i;
          } else if (k === 2) {
            appleE = i;
          } else if (k === 3) {
            appleSE = i;
          } else if (k === 4) {
            appleS = i;
          } else if (k === 5) {
            appleSW = i;
          } else if (k === 6) {
            appleW = i;
          } else if (k === 7) {
            appleNW = i;
          }
        }
      }
    }

    this.brain.inForOut(
      appleN,
      appleNE,
      appleE,
      appleSE,
      appleS,
      appleSW,
      appleW,
      appleNW,
      snakeN,
      snakeNE,
      snakeE,
      snakeSE,
      snakeS,
      snakeSW,
      snakeW,
      snakeNW,
      wallN,
      wallNE,
      wallE,
      wallSE,
      wallS,
      wallSW,
      wallW,
      wallNW
    );
    var checkNum = 0;
    var maxIndex = 0;
    var check = false;
    var ranNum = random(0, 1);
    for (
      var z = 0;
      z < this.brain.layers[this.brain.layers.length - 1].length;
      z++
    ) {
      checkNum += this.brain.layers[this.brain.layers.length - 1][z];
      if (ranNum <= checkNum) {
        maxIndex = z;
        check = true;
      }
      if (check) {
        break;
      }
    }

    if (maxIndex === 0) {
      if (this.xDirection === 0) {
        this.xDirection = -1;
        this.yDirection = 0;
      }
    } else if (maxIndex === 1) {
      if (this.yDirection === 0) {
        this.xDirection = 0;
        this.yDirection = -1;
      }
    } else if (maxIndex === 2) {
      if (this.xDirection === 0) {
        this.xDirection = 1;
        this.yDirection = 0;
      }
    } else if (maxIndex === 3) {
      if (this.yDirection === 0) {
        this.xDirection = 0;
        this.yDirection = 1;
      }
    }

    this.xArr.push(this.xArr[this.xArr.length - 1] + this.xDirection);
    this.xArr.shift();

    this.yArr.push(this.yArr[this.yArr.length - 1] + this.yDirection);
    this.yArr.shift();

    if (
      this.xArr[this.xArr.length - 1] >= boardXSize ||
      this.xArr[this.xArr.length - 1] < 0
    ) {
      this.alive = false;
    }
    if (
      this.yArr[this.yArr.length - 1] >= boardYSize ||
      this.yArr[this.yArr.length - 1] < 0
    ) {
      this.alive = false;
    }

    for (var i = 0; i < this.xArr.length - 1; i++) {
      if (
        this.xArr[i] === this.xArr[this.xArr.length - 1] &&
        this.yArr[i] === this.yArr[this.yArr.length - 1]
      ) {
        this.alive = false;
      }
    }
  }
  show() {
    fill(
      (snakes.indexOf(this) / snakes.length) * 255,
      255 - (snakes.indexOf(this) / snakes.length) * 255,
      0
    );
    for (var i = 0; i < this.xArr.length; i++) {
      rect(
        (width / boardXSize) * this.xArr[i],
        (height / boardYSize) * this.yArr[i],
        width / boardXSize,
        height / boardYSize
      );
    }
  }

  reset() {
    this.xArr = [];
    this.yArr = [];
    this.xArr[0] = boardXSize / 2;
    this.yArr[0] = boardYSize / 2;
    this.score = 0;
    this.alive = true;
    this.timeAlive = 0;
    this.xDirection = 1;
    this.yDirection = 0;
  }
}

class apple {
  x = round(random(0, boardXSize - 1));
  y = round(random(0, boardYSize - 1));

  tick() {
    if (
      this.x ===
        snakes[apples.indexOf(this)].xArr[
          snakes[apples.indexOf(this)].xArr.length - 1
        ] &&
      this.y ===
        snakes[apples.indexOf(this)].yArr[
          snakes[apples.indexOf(this)].yArr.length - 1
        ]
    ) {
      snakes[apples.indexOf(this)].xArr.push(this.x);
      snakes[apples.indexOf(this)].yArr.push(this.y);
      snakes[apples.indexOf(this)].score += 1;
      if (snakes[apples.indexOf(this)].score > highScore) {
        highScore = snakes[apples.indexOf(this)].score;
      }
      var check = true;
      while (check) {
        this.x = round(random(0, boardXSize - 1));
        this.y = round(random(0, boardYSize - 1));
        check = false;
        for (var k = 0; k < snakes[0].xArr.length; k++) {
          if (
            this.x === snakes[apples.indexOf(this)].xArr[k] &&
            this.y === snakes[apples.indexOf(this)].yArr[k]
          ) {
            check = true;
          }
        }
      }
    }
  }

  show() {
    fill(
      (apples.indexOf(this) / apples.length) * 255,
      255 - (apples.indexOf(this) / apples.length) * 255,
      0
    );
    ellipseMode(CENTER);
    ellipse(
      (width / boardXSize) * this.x + width / boardXSize / 2,
      (height / boardYSize) * this.y + height / boardYSize / 2,
      width / boardXSize,
      height / boardYSize
    );
  }
}
