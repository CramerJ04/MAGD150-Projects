let xPos= [];
let yPos = [];
let i = 0;
let xr = 410;
let r = 0.0;
// creating random obstacles
/*let wall1 = rect(300,250,330,300);
let ball = arc(300,250,10,10,0,2*PI);
let wall2 = rect(270,250,330,300);
*/
var posX=45; // these variables are created, and they don't change no matter what happens within the code. Multiple variables and functions are called which change many things within the code, this is important to keep some things (like the ground) or shapes of objects to be consistant 
var posY = 300;
var ballDiameter = 40;
var velocityY = 1.0;
var gravity = 1.5
var onGround = false; 
var jumpSize = -30; 

function setup() { // this setup function creates the canvas, and creates random variables for the x position of the 'clouds' or circles. When they are created, they are drawn in random positions on the canvas and stay 'constant' for the Y position, but move to the left and go back onto the screen when positions of X go off the screen
createCanvas(400, 400);

  for (let j = 0; j < 8; j++)
  {
    xPos[j] = int(random(width));
  }
  
  for (let k = 0; k < 8; k++)
  {
    yPos[k] = int(random(height - 100));
  }
}

function draw() { 
  background(255);
  push();
  strokeWeight(3);
  line(0,300,400,300);
  pop();
  // draw function 
  push();
  translate(width/2, height/2.7);
  scale(r); 
  stroke(0);
  fill(255);
  rectMode(CENTER);
  rect(0, 0, 19.5, 14);
  r += 0.2;
  if (r > 20) {
    r = 0;
  }
  pop();
  // ground design 
  push();
  rectMode(CENTER);
  translate(width / 2, height/2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  rect(0, 205, 20, 100);
  rect(50, 205, 20, 100);
  rect(100, 205, 20, 100);
  rect(150, 205, 20, 100);
  rect(200, 205, 20, 100);
  rect(-50, 205, 20, 100);
  rect(-100, 205, 20, 100);
  rect(-150, 205, 20, 100);
  rect(-200, 205, 20, 100);
  pop();
  
  push(); // this function creates random colors for the bushes or sceneery i'm going to create at the bottom of the screen. This code was taken from the Owl file, but is recreated to create scenery for the drawing. Within the game, I can move these around or create different shapes. I kept the colors the same because they match with the theme of the game I plan on creating, a dinosaur jump recreation
  randomSeed(0);
  for (var x =35; x<width+40; x+=40){
    var gray = int(random(0,102));
    var scalar = random(0.25, 1.0);
    trees(x - 10, 480, gray, scalar);
  }
  pop();
  
  clouds();
  update();
  
  push();
  rectMode(CENTER);
  rect(xr,280,55,35);
  xr--;
  if (xr < -30)
    {
      xr = 440;
    }
  pop();

  
  // if (onGround && xr == 75)
  //   {
  //     textSize(50);
  //     text("SSSS",100,100);
  //   }
}

function clouds() // this function is created to move the clouds. The X position goes down until it reaches a certain point, when it is reset to the right sign of the screen to give the drawing a cloud moving effect in which the dinosaur (ball) is running and jumping
{
for (let j=0; j< 8; j++)
  {
  ellipse(xPos[j],yPos[j],25,25);
    xPos[j]--;
    xPos[j]--;
    xPos[j]--;
    if (xPos[j] < -10)
      {
        xPos[j] = 415;
      }
  }
}
  
function trees(x,y, g, s){
    push();
    translate(x,y);
    scale(s);
    stroke(g);
    strokeWeight(70);
    line(0,-35,0,-65);
    arc(0,-65,70,70,0,2*PI);
    pop();
}

function update(){ 
  
  velocityY = gravity + velocityY;
  
  posY= velocityY + posY;
  
  if (posY +(ballDiameter/2) >= (height/2)){
    posY= (height/2)- (ballDiameter/2);
    onGround = true;
  } else {
    onGround = false;
  }
 
for (let x=1; x<2; x++){
  noFill();
  ellipse(posX, posY + 88, ballDiameter+(x*20), ballDiameter + (x*20));
}
}

function mousePressed(){ // mousePressed is called when the mouse is pressed. Within this function, the jump function is called which changes te velocity of the ball, changing its position and giving the illusion of it jumping
  if (onGround){
    jump();
  }
}

function jump(){
  velocityY = jumpSize;
}