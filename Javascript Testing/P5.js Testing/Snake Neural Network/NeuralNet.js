// INPUT NODES

// CHECKS 8 DIRECTIONS FOR SNAKES WALLS OR APPLES

class neuralNetwork {
  e = 2.7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274;
  inputLayerSize = 8;
  amountHiddenLayers = 2;
  hiddenLayerSize = 4;
  outputLayerSize = 4;

  layers = [];

  weights = [];

  constructor() {
    //  Setting Up The Arrays Of Weights And Nodes
    for (var i = 0; i < this.amountHiddenLayers + 2; i++) {
      this.layers[i] = [];
      if (i === 0) {
        for (var j = 0; j < this.inputLayerSize; j++) {
          this.layers[i][j] = 0;
        }
      } else if (i === this.amountHiddenLayers + 1) {
        for (var j = 0; j < this.outputLayerSize; j++) {
          this.layers[i][j] = 0;
        }
      } else {
        for (var j = 0; j < this.hiddenLayerSize; j++) {
          this.layers[i][j] = 0;
        }
      }
    }
    for (var i = 1; i < this.layers.length; i++) {
      this.weights[i] = [];
      for (var j = 0; j < this.layers[i].length; j++) {
        this.weights[i][j] = [];
        for (var k = 0; k < this.layers[i - 1].length; k++) {
          this.weights[i][j][k] = random(-1, 1);
        }
      }
    }
  }

  inForOut(
    appleN,
    appleNE,
    appleE,
    appleSE,
    appleS,
    appleSW,
    appleW,
    appleNW
    //snakeN,
    //snakeNE,
    //snakeE,
    //snakeSE,
    //snakeS,
    //snakeSW,
    //snakeW,
    //snakeNW,
    //wallN,
    //wallNE,
    //wallE,
    //wallSE,
    //wallS,
    //wallSW,
    //wallW,
    //wallNW
  ) {
    this.layers[0] = [
      appleN,
      appleNE,
      appleE,
      appleSE,
      appleS,
      appleSW,
      appleW,
      appleNW,
    ];
    var sum = 0;
    for (var i = 1; i < this.weights.length; i++) {
      for (var j = 0; j < this.weights[i].length; j++) {
        sum = 0;
        for (var k = 0; k < this.weights[i][j].length; k++) {
          sum += this.weights[i][j][k] * this.layers[i - 1][j];
        }
        this.layers[i][j] = 1 / (1 + pow(this.e, 0 - sum));
      }
    }
    //console.log(this.layers);
    sum = 0;
    for (var i = 0; i < this.layers[this.layers.length - 1].length; i++) {
      sum += this.layers[this.layers.length - 1][i];
    }
    for (var i = 0; i < this.layers[this.layers.length - 1].length; i++) {
      this.layers[this.layers.length - 1][i] =
        this.layers[this.layers.length - 1][i] / sum;
    }
  }
}

function createChildNets(bestSnakeIndex) {
  // The Best Of The Generation Will Have 1000 Children With Slight Mutations
  parentWeights = snakes[bestSnakeIndex].brain.weights;
  console.log(parentWeights);
  console.log(snakes[bestSnakeIndex].brain.layers);
  snakes = [];
  for (var i = 0; i < snakesPerGeneration; i++) {
    snakes[i] = new snake();
    snakes[i].brain.weights = parentWeights;
    for (var a = 1; a < snakes[i].brain.weights.length; a++) {
      for (var b = 0; b < snakes[i].brain.weights[a].length; b++) {
        for (var c = 0; c < snakes[i].brain.weights[a][b].length; c++) {
          snakes[i].brain.weights[a][b][c] += random(-mutation, mutation);
          if (snakes[i].brain.weights[a][b][c] < -1) {
            snakes[i].brain.weights[a][b][c] = -1;
          } else if (snakes[i].brain.weights[a][b][c] > 1) {
            snakes[i].brain.weights[a][b][c] = 1;
          }
        }
      }
    }
  }
}
