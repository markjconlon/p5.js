var xPos = 500;
var yPos = 400;
var diameter = 5;

function setup() {
  createCanvas(500, 500);
  frameRate(1);
}

function draw() {
  background(0, 0, 0);
  fill(255);
  stroke(255);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  ellipse((Math.random() * xPos), (Math.random()) * yPos, diameter, diameter);
  rect(-1 , 400, 501, 100);
  ellipse(50,50, 60, 62);
  fill(200);
  stroke(200);
  ellipse(57,64, 10, 16);
  ellipse(63,61, 10, 16);
  console.log("DRAW");
  fill(255);
  stroke(255);
  ellipse(250,375, 60, 62);
  ellipse(250,330, 60, 62);
  ellipse(250,285, 60, 62);
  fill(15);
  stroke(0,0,255);
  ellipse(250,250, 60, 10);
  rect(235, 210, 30, 40);
  ellipse(250,210, 30, 10);
}
