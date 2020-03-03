let timer = 10

function setup() { 
  createCanvas(400, 400);
} 

var backgroundColor = 0;

function draw() { 
  background(backgroundColor = random(255));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(timer, width/2, height/2);

  
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer == 0) {
    text("happy new year!", width/2, height*0.25);
    
  }
  
}
