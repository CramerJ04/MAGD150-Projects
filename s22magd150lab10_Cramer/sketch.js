let img 
let XVal,YVal, font;
let stats;

function preload(){
  stats = loadTable("MAGD Buildings.csv");
 font= loadFont('POORICH.TTF');
}
function setup() {
  createCanvas(600,600,WEBGL);
  img = loadImage('BrickWall_WikimediaCommons_800x533.jpg');
XVal=0;
  YVal=0;
  textFont(font)
}

function draw() {
  background(0);
  
  let lockX = mouseX - height / 2;
  let lockY = mouseY - width / 2;
  
  ambientLight(60,60,60);
  pointLight(225,225,225,lockX,lockY,100);
  
  camera(XVal,YVal,(height/2) /tan(PI/6),0,0,0,0,1,0); 
  
  // cones 
  push();
  
  normalMaterial();
  
  push();
  translate(-205,-205, 0);
  rotateX(139.5);
  rotateY(frameCount*0.07);
  cone(70,70);
  pop();
  
  push();
  translate(0,-205, 0);
  rotateX(139.5);
  rotateY(frameCount*0.03);
  cone(70,70);
  pop();
  
  push();
  translate(205,-205, 0);
  rotateX(139.5);
  rotateY(frameCount*-0.04);
  cone(70,70);
  pop();
  
  pop();
  
  //cylinders 
  push();
  texture(img);
  translate(0,0,0);
  rotateX(92.8);
  cylinder(70,70,70)
  push();
  textSize(45);
  fill(255);
  text(stats.get(0,0), -450, 400);
  pop();
  pop();
  
  push();
  texture(img);
  translate(205,0,0);
  rotateX(92.8);
  cylinder(70,70,70)
  push();
  textSize(45);
  fill(255);
  text(stats.get(1,0), -350, 400);
  pop();
  pop();
  
  
  push();
  texture(img);
  translate(-205,0,0);
  rotateX(92.8);
  cylinder(70,70,70)
  push();
  textSize(45);
  fill(255);
  text(stats.get(2,0), 380, 400);
  pop();
  pop();
  
  //toruses 
  push();
  specularMaterial(250)
  translate(0,190,0);
  rotateX(90)
  rotateY(frameCount * 0.01)
  torus(80,15,64,64)
  pop();
  
  push();
  specularMaterial(250)
  translate(-195,190,0);
  rotateX(90);
  rotateY(frameCount * 0.02)
  torus(80,15,64,64)
  pop();
  
  push();
  specularMaterial(250)
  translate(195,190,0);
  rotateX(90)
  rotateY(frameCount * -0.005)
  torus(80,15,64,64)
  pop();
  
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW){
  XVal+=10;
  }
if (keyCode === LEFT_ARROW){
  XVal-=10;
  }
if (keyCode === UP_ARROW){
  YVal-=10;
  }
if (keyCode === DOWN_ARROW){
  YVal+=10;
  }
}