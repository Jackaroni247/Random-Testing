//  Should actually be called FlappyBird.js
var gravity = 0.5;
var difficuly = 4;

var highScore = 0;

class bird {
  x = width / 4;
  y = height / 2;
  yVelocity = 0;
  alive = true;
  score = 0;
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
        highScore = max(this.score, highScore);
        walls[i].checkScore = false;
      }
    }
    this.y += this.yVelocity;
    if (!(this.yVelocity > 8)) {
      this.yVelocity += gravity;
    } else {
      this.yVelocity = 8;
    }
  }
  show() {
    fill(255 - this.score * 10);
    ellipse(this.x, this.y, 10);
  }
}

class wall {
  x;
  gapY = random(height / 10, (height * 4) / 6);
  gapHeight = random(200 - difficuly * 20, 200 - difficuly * 20 + 20);
  speed = 2;
  checkScore = true;
  reset() {
    this.gapY = random(height / 10, (height * 4) / 6);
    this.gapHeight = random(200 - difficuly * 20, 200 - difficuly * 20 + 20);
  }
  tick() {
    this.x -= 2;
    if (this.x < 0) {
      this.x = width;
      this.gapY = random(height / 5, (height * 4) / 5);
      this.gapHeight = random(200 - difficuly * 20, 200 - difficuly * 20 + 20);
      this.checkScore = true;
    }
  }
  show() {
    rectMode(CORNER);
    fill(255);
    rect(this.x, 0, 20, this.gapY);

    rect(
      this.x,
      this.gapY + this.gapHeight,
      20,
      height - this.gapY + this.gapHeight
    );
    //rect(this.x, this.gapY, 20, this.gapHeight);
  }
}

var birds = [];
var walls = [];
var start = false;

function setup() {
  createCanvas(650, 650);
  birds[0] = new bird();
  for (var i = 0; i < difficuly; i++) {
    walls[i] = new wall();
    walls[i].x = width + (i / difficuly) * width;
  }
  fill(255);
  textSize(50);
}

function draw() {
  clear();
  background(0);
  if (birds[0].alive) {
    if (start) {
      for (var i = 0; i < walls.length; i++) {
        walls[i].tick();
        walls[i].show();
      }
      for (var i = 0; i < birds.length; i++) {
        if (birds[i].alive) {
          birds[i].tick();
          birds[i].show();
        }
      }
      fill(255, 0, 0);
      text("SCORE: " + birds[0].score, width / 5, 50);
    } else {
      fill(255);
      ellipse(width / 4, height / 2, 10);
      fill(255, 0, 0);
      text("SCORE: 0", width / 5, 50);
    }
  } else {
    fill(255, 0, 0);
    text(
      "GAME OVER\nFINAL SCORE: " +
        birds[0].score +
        "\nHIGH SCORE: " +
        highScore /* + "\nENTER DIFFICULTY (0-9)"*/,
      width / 2 - textWidth("Game OVER"),
      height / 2
    );
  }
}

function keyPressed() {
  if (keyCode === 32) {
    start = true;
    if (birds[0].yVelocity > 0) {
      birds[0].yVelocity = 0;
    }
    if (!(birds[0].yVelocity <= -10)) {
      birds[0].yVelocity -= 8;
    } else {
      birds[0].yVelocity = -10;
    }
  }
  if (!birds[0].alive) {
    birds[0].alive = true;
    birds[0].reset();
    for (var i = 0; i < walls.length; i++) {
      walls[i].reset();
      walls[i].x = width + (i / difficuly) * width;
    }
  }
}
