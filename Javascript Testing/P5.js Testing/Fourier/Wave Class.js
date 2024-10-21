class wave {
  graphPoints = [];

  x;
  y;

  frequency;
  amplitude;

  graph(numOfGraphs, graphNum) {
    stroke(255);
    strokeWeight(2);

    //Calculates points
    line(
      0,
      (height / numOfGraphs) * graphNum,
      367,
      (height / numOfGraphs) * graphNum
    );
    this.graphPoints.unshift(sin(graphsT * this.frequency) * this.amplitude);
    if (this.graphPoints.length >= graphPointDensity) {
      this.graphPoints.pop();
    }

    //Draws Graph
    for (var i = 0; i < this.graphPoints.length; i++) {
      line(
        i * (367 / graphPointDensity),
        (height / numOfGraphs) * graphNum -
          height / numOfGraphs / 2 -
          (height / numOfGraphs / 2) * (this.graphPoints[i] / 20),
        (i - 1) * (367 / graphPointDensity),
        (height / numOfGraphs) * graphNum -
          height / numOfGraphs / 2 -
          (height / numOfGraphs / 2) * (this.graphPoints[i - 1] / 20)
      );
    }
  }
}
