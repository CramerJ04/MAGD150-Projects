let i = 285;
let j = 285;
let x = 285;
let t = 285;
let y = 285;
let tx1 = 19;
  let tx2 = 23;
  let tx3 = 15;
  let t2x1 = 1;
  let t2x2 = -2;
  let t2x3 = -2;
  let ty1 = 135;
  let ty2 = 140;
  let ty3 = 140;
  let t2y1 = 150;
  let t2y2 = 160;
  let t2y3 = 140; // fins 
let rectx1 = 25;
let rectx2 = 13;
let fishx = 18;

function setup() {
  createCanvas(300, 300);
  frameRate(10);
}

function draw() {
  let b1 = background(66, 135, 245);
  push();
  // circleMode(CENTER)
  noFill();
  strokeWeight(1);
  stroke(255,255,255);
  control = arc(mouseX,mouseY,20,20,0,2*PI);
  arc(mouseX+3.5,mouseY-4,5,5,0,2*PI);
  arc(mouseX*0.7,mouseY-4,5,5,0,2*PI);
  arc(mouseX + 20,mouseY / 1.2,15,15,0,2*PI);
  arc(pmouseX,mouseY - 25,15,15,0,2*PI);
  arc(pmouseX + mouseX - 80,pmouseY,10,10,0,2*PI);
  arc(mouseX,pmouseY + 35,10,10,0,2*PI);
  
  push();
  let leftWall = 50;
  let rightWall = 250;
  let xm = mouseX;
  let xc = constrain(mouseX, leftWall, rightWall); // constrain 

  // walls
  stroke(66, 135, 245);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);

  noStroke();
  fill(150);
  fill(0);
  ellipse(xc, 10, 9, 9);
  ellipse(xc, 20, 9, 9);
  ellipse(xc, 245, 9, 9); 
  ellipse(xc, 255, 9, 9); // constrained using xc
  pop();
  
  // fish 
  pop();
  strokeWeight(2);
  stroke(0,0,0);
  fill(255,132,0);
  arc(fishx,150,30,18,0,2*PI)
  fishx++;
  push();
  
  // stripes 
  push();
  strokeWeight(1);
  stroke(0,0,0);
  fill(0,0,0);
  rectMode(CENTER);
  rect(rectx1,150,3,13);
  rect(rectx2,150,3,14);
  triangle(tx1,ty1,tx2,ty2,tx3,ty3);
  triangle(t2x1,t2y1,t2x2,t2y2,t2x3,t2y3);
  tx1++;
  tx2++;
  tx3++;
  //ty1++;
  //ty2++;
  //ty3++;
  t2x1++;
  t2x2++;
  t2x3++;
  //t2y1++;
  //t2y2++;
  //t2y3++;
  rectx1++;
  rectx2++;
  pop();
  
  noFill();
  strokeWeight(1);
  stroke(255,255,255);
  arc(50,i,30,30,0,2*PI);
  i--;
  i--;
  i--;
  pop();
  
  push();
  noFill();
  strokeWeight(1);
  stroke(255,255,255);
  arc(250,j,30,30,0,2*PI);
  j--;
  j--;
  pop();
  
  push();
  noFill();
  strokeWeight(1);
  stroke(255,255,255);
  arc(200,x,20,20,0,2*PI);
  x--;
  x--;
  pop();
  
  push();
  noFill();
  strokeWeight(1);
  stroke(255,255,255);
  arc(22,x,20,20,0,2*PI);
  x--;
  x--;
  pop();
  
  push();
  noFill();
  strokeWeight(1);
  stroke(255,255,255);
  arc(80,t,5,5,0,2*PI);
  t--;
  t--;
  t--;
  t--;
  t--;
  pop();
  
  push();
  noFill();
  strokeWeight(1);
  stroke(255,255,255);
  arc(220,t,5,5,0,2*PI);
  t--;
  t--;
  t--;
  t--;
  t--;
  pop();
  
  push();
  noFill();
  strokeWeight(1);
  stroke(255,255,255);
  arc(170,y,15,15,0,2*PI);
  y--;
  y--;
  y--;
  pop();
  
  push();
  noFill();
  strokeWeight(1);
  stroke(255,255,255);
  arc(280,y,5,5,0,2*PI);
  y--;
  y--;
  y--;
  pop();
  
  push();
  fill(133, 84, 32);
  let x1 = map(mouseX, 0, width, 0, 300); // map 
  let x2 = map(mouseX + 30, 0, width, 0, 300);
  let x3 = map(mouseX - 30, 0, width, 0, 300);
  ellipse(x1, 280, 30, 30);  
  ellipse(x2, 280, 20, 20);
  ellipse(x3, 280, 20, 20);
  pop();
  
  push();
  let x11 = 150;
  let y11 = 220;
  let x22 = mouseX;
  let y22 = mouseY; // distance 

  line(x11, y11, x22, y22);
  ellipse(x11, y11, 7, 7);
  ellipse(x22, y22, 7, 7);
  pop();
  
}