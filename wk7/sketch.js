var star
function preload(){
function setup() {
  star = loadimage('star.jpg');
  
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background("black");
  rectMode(CENTER);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  translate(width - width/2, height - height/2)
    //translate(0,0)
  //box(x or width, y of height, z or depth);
    //fill("white")
  lx = mouseX - height/2;
  ly = mouseY - width/2;
  pointLight(255, 0, 0, 1, 1, 25)
  pointLight(0, 0, 255, lx, ly, 25);
  
  stroke(2);
  //ambientLight(255)
  //ambientMaterial(0, 255, 0)
  specularMaterial(0, 255, 0)
  box(100,100,100);
  
  noStroke();
  fill("grey")
  plane(20, 500);
  
  torus(100, 10);
 
}

