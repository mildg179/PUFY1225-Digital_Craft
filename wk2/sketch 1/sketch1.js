function setup() {
  createCanvas(710, 400);
  background("black");
}
function draw() {
  stroke("pink");
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}