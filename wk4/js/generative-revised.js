xRad = 15;
yRad = 90;

var odds;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  
fill('Red');
textSize(45);
textFont('Helvetica');
text('CODE', 130, 395);

  
for(var x= xRad/2; x< width; x+=xRad){
    for(var y= yRad/2; y < height; y+=yRad){
      fill("red");
      ellipse(x, y, xRad, yRad);
      strokeWeight(5);
      line(200,200,x,y)
      
    }
  }
}
