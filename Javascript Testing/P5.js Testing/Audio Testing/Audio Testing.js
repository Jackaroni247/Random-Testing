var song;
var songReady = false;

var amplitude = 1;
var frequency = 300;
var period = 1 / frequency;

var waves = [];

function setup() {
  song = loadSound("Honest.mp3", loaded);
  waves[0] = new p5.Oscillator();
  waves[0].setType("sine");
  createCanvas(800, 800);
}

function draw() {
  background(0);
  updateWave();
  playWave();
  drawWave();
}

function mouseReleased() {
  console.log("click");
  if (songReady) {
    if (!waves[waves.length - 1].started) {
      waves[0].start ();
    } else {
      waves[waves.length] = new p5.Oscillator();
      waves[waves.length-1].setType("sine");
      waves[waves.length-1].start();
    }
  }
}

function loaded() {
  songReady = true;
}

function drawWave() {
  strokeWeight(1);
  stroke(255);
  for (var i = 0; i < width; i++) {
    line(
      i,
      height / 2 - sin(i * period * 17) * amplitude * 50,
      i + 1,
      height / 2 - sin((i + 1) * period * 17) * amplitude * 50
    );
  }
}

function updateWave() {
  frequency = (mouseX / width) * 900;
  amplitude = ((height / 2 - mouseY) / (height / 2)) * 5;
  period = 1 / frequency;
}

function playWave() {
  waves[waves.length - 1].amp(amplitude);
  waves[waves.length - 1].freq(frequency);
}
