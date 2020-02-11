function setup() {
  createCanvas(710, 400);
  background("yellow");
}
function draw() {
  stroke("red");
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}