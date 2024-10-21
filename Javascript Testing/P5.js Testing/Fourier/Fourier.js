// Goal for Fourier project
// 3 parts

// 1. Show multiple waves with a graph and easy manipulation
// 2. Show combined wave
// 3. Show circle visualization

var graphsT = 0;
var graphPointDensity = 100;

var waves = [];
var paused = false;

//Initializing Stuff
function setup() {
  createCanvas(1101, 800);
  for (var i = 0; i < 2; i++) {
    waves[i] = new wave();
    waves[i].amplitude = floor(random(1, 20));
    waves[i].frequency = floor(random(1, 100));
  }
}

//Main looping function
function draw() {
  clear();
  background(0);
  stroke(255);
  strokeWeight(5);
  line(367, 0, 367, height);
  line(367 * 2, 0, 367 * 2, height);

  //Graphs:
  for (var i = 0; i < waves.length; i++) {
    waves[i].graph(waves.length, i + 1);
  }

  graphsT += 0.01;
  //Combined Graph:
  tickSumWave();
  //Circle Visualization
}

//Pause system
function keyPressed() {
  if (keyCode === UP_ARROW) {
  }
  if (keyCode === DOWN_ARROW) {
  }
  if (keyCode === 32) {
    if (paused) {
      paused = !paused;
      loop();
    } else {
      paused = !paused;
      noLoop();
    }
  }
}

//Creates combined graph
sumGraphPoints = [];
function tickSumWave() {
  sumGraphPoints.unshift(waves[0].graphPoints[0]);
  for (var i = 1; i < waves.length; i++) {
    sumGraphPoints[0] += waves[i].graphPoints[0];
  }
  if (sumGraphPoints.length >= graphPointDensity) {
    sumGraphPoints.pop();
  }
  stroke(255);
  strokeWeight(2); 
  for(var i = 0; i < sumGraphPoints.length; i++) {
  line(367+(367/graphPointDensity)*i,height/2-sumGraphPoints[i],367+(367/graphPointDensity)*(i-1),height/2-sumGraphPoints[i-1]);

  }
}
