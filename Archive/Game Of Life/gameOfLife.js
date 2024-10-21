/*
My adaptation of the famous game of life by John Conway
RIP you were a legend
*/
// The amount of cells in the world based on x and y
const cellsAmount = 50;
var cellArray = [];
const neighborsMatrix = [
  [-1, 1],
  [0, 1],
  [1, 1],
  [-1, 0],
  [1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
];
var paused = false;

function setup() {
  createCanvas(800, 800);
  for (var x = 0; x < cellsAmount; x++) {
    cellArray[x] = [];
    for (var y = 0; y < cellsAmount; y++) {
      cellArray[x][y] = new cell();
      cellArray[x][y].x = x * (width / cellsAmount);
      cellArray[x][y].y = y * (height / cellsAmount);
      cellArray[x][y].arrayXPos = x;
      cellArray[x][y].arrayYPos = y;
      cellArray[x][y].state = false;
      cellArray[x][y].state = Math.round(Math.random(0, 1));
    }
  }
}
function draw() {
  background(60, 110, 240);
  frameRate(5);
  for (var i = 0; i < cellsAmount; i++) {
    for (var j = 0; j < cellsAmount; j++) {
      cellArray[i][j].decideNextState();
      cellArray[i][j].update();
      cellArray[i][j].draw();
    }
  }
}

function keyReleased() {
  if (paused) {
    paused = !paused;
    loop();
  } else {
    paused = !paused;
    noLoop();
  }
}

function mouseReleased() {
  var xIndex = Math.floor((mouseX / width) * cellsAmount);
  var yIndex = Math.floor((mouseY / height) * cellsAmount);

  //cellArray[xIndex][yIndex].state = true;

}
