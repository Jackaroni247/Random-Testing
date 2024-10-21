class wall {
  x;
  gapY = random(height / 10, (height * 4) / 6);
  gapHeight = random(200 - difficulty * 20, 200 - difficulty * 20 + 20);
  speed = 2;
  checkScore = true;
  reset() {
    this.gapY = random(height / 10, (height * 4) / 6);
    this.gapHeight = random(200 - difficulty * 20, 200 - difficulty * 20 + 20);
  }
  tick() {
    this.x -= 2;
    if (this.x < 0) {
      this.x = width;
      this.gapY = random(height / 5, (height * 4) / 5);
      this.gapHeight = random(200 - difficulty * 20, 200 - difficulty * 20 + 20);
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
