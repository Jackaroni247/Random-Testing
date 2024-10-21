// zeroes represent solids

const boardInit = [
  ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", 0],
  ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC", 0],
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, "SUN", "MON", "TUE", "WED"],
  [0, 0, 0, 0, "THU", "FRI", "SAT"],
];
const board = [
  ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", 0],
  ["JUL", "AUG", 0, "OCT", "NOV", "DEC", 0],
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 0, 25, 26, 27, 28],
  [29, 30, 31, "SUN", "MON", 0, "WED"],
  [0, 0, 0, 0, "THU", "FRI", "SAT"],
];
var blocks = [];
blocks[0] = new block([
  [0, 0, 1],
  [0, 0, 1],
  [0, 1, 1],
]);
blocks[1] = new block([
  [0, 0, 1],
  [1, 0, 1],
  [1, 0, 0],
]);
blocks[2] = new block([
  [0, 1, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
]);
blocks[3] = new block([
  [0, 0, 1, 1],
  [1, 0, 0, 0],
]);
blocks[4] = new block([
  [0, 1, 1],
  [0, 0, 0],
  [0, 1, 1],
]);
blocks[5] = new block([
  [1, 1, 0],
  [0, 0, 0],
]);
blocks[6] = new block([
  [0, 1],
  [0, 1],
  [0, 1],
  [0, 0],
]);
blocks[7] = new block([
  [0, 1],
  [0, 0],
  [1, 0],
]);
blocks[8] = new block([
  [0, 1, 0],
  [0, 0, 0],
]);
blocks[9] = new block([
  [0, 1, 1],
  [0, 1, 1],
  [0, 0, 0],
]);

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < blocks.length; i++) {
    console.log(blocks[i]);
    for (var j = 0; j < blocks[i].shape.length; j++) {
        var line = "";
      for (var k = 0; k < blocks[i].shape[j].length; k++) {
        line+=blocks[i].shape[j][k] + " ";
      }
      console.log(line);
    }
  }
}

function draw() {
  background(128, 128, 128);
}
