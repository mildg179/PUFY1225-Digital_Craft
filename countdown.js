let timer = 5

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, width/2, height/2);
  

  if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
  }
  
}
