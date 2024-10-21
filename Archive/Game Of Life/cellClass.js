class cell {
  state = false;
  nextState;
  x = 0;
  y = 0;
  arrayXPos;
  arrayYPos;

  decideNextState() {
    var neighbors = 0;
    //Checks all the neighbor cells and adds if alive
    for (var i = 0; i < neighborsMatrix.length; i++) {
      if (
        this.arrayXPos + neighborsMatrix[i][0] >= 0 &&
        this.arrayXPos + neighborsMatrix[i][0] < cellArray.length
      ) {
        if (
          this.arrayYPos + neighborsMatrix[i][1] >= 0 &&
          this.arrayYPos + neighborsMatrix[i][1] < cellArray.length
        ) {
          if (
            cellArray[this.arrayXPos + neighborsMatrix[i][0]][
              this.arrayYPos + neighborsMatrix[i][1]
            ].state
          ) {
            neighbors += 1;
          }
        }
      }
    }
    if (this.state) {
      if (neighbors < 2) {
        this.nextState = false;
      }
      if (neighbors > 3) {
        this.nextState = false;
      }
      if (neighbors == 2) {
        this.nextState = true;
      }
      if (neighbors == 3) {
        this.nextState = true;
      }
    } else {
      if (neighbors == 3) {
        this.nextState = true;
      }
    }
  }

  update() {
    this.state = this.nextState;
  }

  draw() {
    stroke(50);
    strokeWeight(1);
    if (this.state) {
      fill(255);
    } else {
      fill(0);
    }
    rect(this.x, this.y, width / cellsAmount, height / cellsAmount);
  }
}
