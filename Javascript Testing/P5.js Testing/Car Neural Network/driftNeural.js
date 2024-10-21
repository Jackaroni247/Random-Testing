var car1 = new car();

function setup() {
createCanvas(1000,800);
background(13, 248, 252);
}

function draw() {
background(13, 248, 252);
car1.tick();
car1.draw();

}