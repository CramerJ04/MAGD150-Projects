let buttonToggle=false;
let buttonLight=false;
let purpleLight=false;
let buttonLines = false;
let yellowLight = false;
var speed = 5;
var diameter = 10;
var x = 150;
var y = 150;
var xr = 170;
var yr = 150;
xrSpeed = 2;
rySpeed = 2;
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  push();
  fill(50,168,82);
  textSize(30);
  text("The Marvelous T.V!", 15,50)
  pop();
  
  push();
  textSize(20);
  fill(153, 255, 180);
  text("Try Using All Buttons!", 50,70);
  pop();
  
  push();
  fill(158,158,158);
  rectMode(CORNERS);
  rect(75,100,225,250);
  pop();
  
  push();
  fill(204,204,204);
  rectMode(CORNERS);
  rect(95,120,205,230); // inner 
  pop();
  
  push();
  strokeWeight(5);
  stroke(255);
  line(100,252,75,270);
  line(200,252,225,270)
  pop();
  
  push();
  fill(0);
  arc(87,240,15,15,0,2*PI);
  arc(213,240,15,15,0,2*PI);
  pop();
  
  push(); // buttons 
  fill(255,225,0);
  quad(125,235,145,235,145,245,125,245); // yellow
  pop();
  push();
  fill(255, 149, 0);
  quad(155,235,175,235,175,245,155,245); // Orange
  pop();
  push(); // power 
  fill(225);
  arc(214,220,10,10,0,2*PI);
  pop();
  push();
  
  push();
  if (buttonToggle) // purple light action
    if (purpleLight) 
    {
      x += random(-speed,speed);
      y += random(-speed,speed);
      x = constrain(x,115,195);
      y = constrain(y,130,220);
      fill(209, 111, 25);
      ellipse(x,y,diameter,diameter)
    }
  pop();
  push();
  if (mouseX > 155 && mouseX < 175) // orange light change 
    if (mouseY > 235 && mouseY < 245)
      {
      fill(163, 95, 0);
      quad(155,235,175,235,175,245,155,245);
      }
  pop();
  if (mouseX > 204 && mouseX < 224) // power color overlay 
    if (mouseY > 210 && mouseY < 230)
      {
      fill(181,181,181);
      arc(214,220,10,10,0,2*PI);
      }    
  pop();
  push();
  if (buttonToggle) // yellow button action 
    if (yellowLight)
      {
        rectMode(CENTER);
        fill(225,255,0);
        rect(xr,yr,15,15);
        xr += xrSpeed; // 95,120,205,230
        yr += rySpeed;
        if(xr <= 105 || xr >= 195)
          xrSpeed *= -1;
        if (yr <= 130 || yr >=220)
          rySpeed *= -1;
      }
  pop();
  push();
  if (mouseX > 125 && mouseX < 145) // yellow light change
    if (mouseY > 235 && mouseY < 245)
      {
        fill(156,156,0);
        quad(125,235,145,235,145,245,125,245);
      }
  pop();
  push(); // letters 
  textSize(8);
  text("Y", 132, 243);
  pop();
  
  push(); 
  textSize(8);
  text("O", 162, 243);
  pop();
  
  push(); // P
  textSize(6);
  text("P", 212, 222);
  pop();
  
  push(); // light 
  fill(255,0,0);
  arc(190,240,10,10,0,2*PI);
  pop();
  
  push();
  if (buttonLight) // light change
  {
  fill(0,225,0);
  arc(190,240,10,10,0,2*PI);
  }
  pop();
  
  push();
  if (buttonLines){ // power button lines
  let lx = 120;
  let ly = 230;
        for (i = 95; i <= 206; i++)
        {
          line (i,lx,i,ly);
          i++;
        }
  }
  pop();
}

function mouseClicked()
{
  if (mouseX > 204 && mouseX < 224) // power
    if (mouseY > 210 && mouseY < 230)
      {
      buttonToggle = !buttonToggle; 
      buttonLines = !buttonLines;
      buttonLight = !buttonLight;
      }    
  if (mouseX > 155 && mouseX < 175) // purple toggle 
    if (mouseY > 235 && mouseY < 245)
      {
      purpleLight = !purpleLight;
        if (yellowLight == true)
        yellowLight = !yellowLight;
      }
  if (mouseX > 125 && mouseX < 145) // yellow toggle
    if (mouseY > 235 && mouseY < 245)
      {
      yellowLight = !yellowLight;
        if (purpleLight == true)
        purpleLight = !purpleLight;
      }
}
