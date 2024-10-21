const e = 2.7182818284590452353602874713526624977572470936999595749669676277240766303535945713821785251664274;
class neuralNetwork {
  inputLayerSize = 4;
  numMidLayers = 1;
  midLayerSize = 6;
  outputLayerSize = 1;

  weights = [];
  biases = [];

  constructor() {
    // Initalizes biases

    //First mid layers
    for (var i = 0; i < this.numMidLayers; i++) {
      this.biases[i] = [];
      for (var k = 0; k < this.midLayerSize; k++) {
        this.biases[i][k] = random(
          -1 * this.midLayerSize,
          1 * this.midLayerSize
        );
      }
    }

    //Final output layer
    this.biases[this.numMidLayers] = [];
    for (var i = 0; i < this.outputLayerSize; i++) {
      this.biases[this.numMidLayers][i] = random(
        -1 * this.midLayerSize,
        1 * this.midLayerSize
      );
    }

    // Initializes weights

    //First layer from inputs
    this.weights[0] = [];
    for (var k = 0; k < this.midLayerSize; k++) {
      this.weights[0][k] = [];
      for (var i = 0; i < this.inputLayerSize; i++) {
        this.weights[0][k][i] = random(-1, 1);
      }
    }

    //All mid layers
    for (var i = 1; i < this.numMidLayers; i++) {
      this.weights[i] = [];
      for (var k = 0; k < this.midLayerSize; k++) {
        this.weights[i][k] = [];
        for (var j = 0; j < this.midLayerSize; j++) {
          this.weights[i][k][j] = random(-1, 1);
        }
      }
    }

    //Final layer on outputs
    this.weights[this.numMidLayers] = [];
    for (var i = 0; i < this.outputLayerSize; i++) {
      this.weights[this.numMidLayers][i] = [];
      for (var k = 0; k < this.midLayerSize; k++) {
        this.weights[this.numMidLayers][i][k] = random(-1, 1);
      }
    }
  }

  initWithParent(parent) {}

  think(input) {
    var nodes = [];
    // input[0] is the y position
    // input[1] is the y velocity
    // input[2] is the x position of nearest wall
    // input[3] is the gap height of the nearest wall

    //Creates all the different node
    nodes[0] = input;
    for (var i = 0; i < this.numMidLayers; i++) {
      nodes[i + 1] = [];
      for (var k = 0; k < this.midLayerSize; k++) {
        nodes[i + 1][k] = 0;
      }
    }
    nodes[this.numMidLayers + 1] = [];
    for (var i = 0; i < this.outputLayerSize; i++) {
      nodes[this.numMidLayers + 1][i] = 0;
    }
    //

    //PROPOGATION

    for (var i = 1; i < nodes.length; i++) {
      for (var k = 0; k < nodes[i].length; k++) {
        //Runs for each node
        //
        nodes[i][k] = 0;
        for (var h = 0; h < nodes[i - 1].length; h++) {
          nodes[i][k] += nodes[i - 1][h] * this.weights[i - 1][k][h];
        }
        nodes[i][k] += this.biases[i - 1][k];
        nodes[i][k] = 1 / (1 + pow(e, nodes[i][k]));
        //
      }
    }

    if (random(0, 1) <= nodes[this.numMidLayers + 1][0]) {
      return true;
    }
    return false;
    /*
    console.log("Nodes:");
    console.log(nodes);
    console.log("Weights:");
    console.log(this.weights);
    console.log("Biases:");
    console.log(this.biases);
    */
  }
}
