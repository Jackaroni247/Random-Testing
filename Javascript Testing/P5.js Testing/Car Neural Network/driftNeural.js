var car1 = new car(250, 800/2);


function setup() {
createCanvas(1000,800);
background(186, 240, 255);
}

function draw() {
background(186, 240, 255);

car1.tick();
car1.draw();

drawTrack();

}

function drawTrack() {
    strokeWeight(20);
    noFill();
    circle(500,400,300);
    circle(500,400,700);
}
