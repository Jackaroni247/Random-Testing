//  Should actually be called FlappyBird.js
var gravity = 0.5;
var difficulty = 4;

var highScore = 0;
var runScore = 0;

var numOfBirds = 1000;
var birds = [];
var walls = [];
var start = false;

var mutatedYet = false;
var mutationRate = 0.01;

var aliveCheck = true;

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < numOfBirds; i++) {
    birds[i] = new bird();
  }
  for (var i = 0; i < difficulty; i++) {
    walls[i] = new wall();
    walls[i].x = width + (i / difficulty) * width;
  }
  fill(255);
  textSize(50);
}

function draw() {
  clear();
  background(0);
  aliveCheck = false;
  for (var i = 0; i < birds.length; i++) {
    if (birds[i].alive == true) {
      aliveCheck = true;
    }
  }
  if (aliveCheck) {
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
      text("SCORE: " + runScore, width / 5, 50);
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
        runScore +
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
    //birds[3].jump();
  }
  aliveCheck = true;
  for (var i = 0; i < birds.length; i++) {
    if (birds[i].alive == true) {
      aliveCheck = false;
    }
  }
  if (aliveCheck) {
    if (!mutatedYet) {
      //All of this will run once at end of round and will create new generation

      //Finds best bird
      var best = birds[0];
      for (var i = 0; i < birds.length; i++) {
        if (birds[i].score > best.score) {
          best = birds[i];
        }
      }
      //console.log(best);
      for (var i = 0; i < birds.length; i++) {
        //Mutate Weights
        for (var j = 0; j < birds[i].brain.weights.length; j++) {
          for (var k = 0; k < birds[i].brain.weights[j].length; k++) {
            for (var h = 0; h < birds[i].brain.weights[j][k].length; h++) {
              birds[i].brain.weights[j][k][h] =
                best.brain.weights[j][k][h] +
                random(-mutationRate, mutationRate);
              birds[i].brain.weights[j][k][h] = min(
                1,
                birds[i].brain.weights[j][k][h]
              );
              birds[i].brain.weights[j][k][h] = max(
                -1,
                birds[i].brain.weights[j][k][h]
              );
            }
          }
        }
        //Mutate Biases
        /*
        for (var j = 0; j < birds[i].brain.biases.length; j++) {
          for (var k = 0; k < birds[i].brain.biases[j].length; k++) {
            birds[i].brain.biases[j][k] += random(
              -mutationRate * 5,
              mutationRate * 5
            );
            birds[i].brain.biases[j][k] = min(
              birds[i].midLayerSize,
              birds[i].brain.biases[j][k]
            );
            birds[i].brain.biases[j][k] = max(
              -1 * birds[i].midLayerSize,
              birds[i].brain.biases[j][k]
            );
          }
        }
        */
      }
      //console.log(birds);
      mutatedYet = true;
    }
    for (var i = 0; i < birds.length; i++) {
      birds[i].alive = true;
      birds[i].reset();
      mutatedYet = false;
    }

    for (var i = 0; i < walls.length; i++) {
      walls[i].reset();
      walls[i].x = width + (i / difficulty) * width;
    }
    runScore = 0;
  }
}
/*

var aliveCheck = true;

aliveCheck = true;
for (var i = 0; i < birds.length; i++) {
  if(birds[i].alive == true) {
    aliveCheck = false;
  }
}
  if(aliveCheck) {
  
  }
*/
