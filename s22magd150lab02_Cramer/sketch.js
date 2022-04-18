function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  push(); // gray circle 
  colorMode(RGB);
  //fill(107,107,107);
  //arc(100,100,100,100,0,2*PI)
  fill(90,255,255)
  arc(100,100,120,120,0,2*PI) // outer cyan circle 
  fill(184,255,255)
  arc(100,100,110,110,0,2*PI) // cyan circle 
  fill(107,107,107);
  arc(100,100,100,100,0,2*PI)
  pop();
  
  push(); // yellow 1/2 circle 
  colorMode(RGB);
  stroke(23, 163, 37);
  fill(252, 219, 3);
  arc(250,0,75,75,0,PI);
  pop(); 
  
  push();
  colorMode(RGB);
  noFill();
  stroke(255,255,255)
  strokeWeight(5);
  arc(250,0,120,120,0,PI);
  pop();
  
  push(); // green quads 
  colorMode(HSL);
  fill('#18ab27');
  stroke(0);
  quad(250,15,270,15,270,20,250,20); // xy, xy, xy, xy, 
  quad(232,10,232,20,222,20,222,10);
  quad(240,5,235,5,235,0,240,0);
  
  pop();
  
  push(); // orange circle 
  colorMode(RGB);
  stroke(255,255,255) // outside of orange circle 
  fill(250, 140, 0);
  arc(340,90,100,100,0,2*PI); // x, y, w, l, start, distance 
  pop();
  
  push(); // mini orange circles 
  colorMode(RGB);
  ellipseMode(CENTER);
  fill(240, 186, 120);
  ellipse(320,90,30,30);
  ellipse(360,70,30,30);
  ellipse(350,110,25,25);
  ellipse(330,60,18,18);
  pop();
  
  push(); // purple shape 
  colorMode(HSB);
  fill(300,100,50,100);
  beginShape();
  vertex(250,125);
  vertex(350,175);
  vertex(250,225);
  vertex(150,175);
  beginContour();
  vertex(250,150); // counter
  vertex(220,175);
  vertex(250,195);
  vertex(280,175);
  endContour();
  endShape();
  
  push(); // white lines 
  strokeWeight(2);
  colorMode(RGB);
  stroke(255,255,255)
  line(250,115,365,175);
  line(365,175,250,235);
  line(250,235,135,175);
  line(135,175,250,115);
  pop();
  
  push(); // mini white circles, purple planet 
  colorMode(RGB);
  strokeWeight(1);
  noFill();
  stroke(255,0,0); // mini red circles 
  arc(260,140,5,5,0,2*PI);  
  arc(300,170,5,5,0,2*PI);
  arc(290,195,5,5,0,2*PI);
  arc(170,179,5,5,0,2*PI);
  arc(200,160,5,5,0,2*PI);
  arc(200,185,7,7,0,2*PI);
  arc(248,209,7,7,0,2*PI);
  arc(239,150,7,7,0,2*PI);
  arc(320,170,10,10,0,2*PI);
  pop();
  
  push(); // triangles 
  noFill();
  colorMode(HSL);
  stroke('#ffffff');
  triangle(100,60,120,80,80,80);
  triangle(100,140,120,120,80,120); 
  pop();
  
  push(); // mini black circles 
  colorMode(RGB);
  strokeWeight(10);
  fill(0);
  point(110,100);  
  point(70,120);
  point(85,90);
  point(130,125);
  point(128,75);
  pop();
  
  push(); // mini white circles, grey planet 
  colorMode(RGB);
  strokeWeight(1);
  noFill();
  stroke(255,255,255);
  arc(110,100,5,5,0,2*PI);  
  arc(70,120,5,5,0,2*PI);
  arc(85,90,5,5,0,2*PI);
  arc(130,125,5,5,0,2*PI);
  arc(128,75,5,5,0,2*PI);
  pop();
  
  push(); // stars
  colorMode(RGB);
  strokeWeight(1);
  stroke(255,255,255);
  line(250,100,255,105); // x,y, x,y
  line(255,100,250,105);
  line(200,80,205,85);
  line(205,80,200,85);
  line(100,25,105,30);
  line(105,25,100,30);
  line(50,15,55,20);//+5 to end 2
  line(55,15,50,20);//+5 - 5
  line(10,30,15,35);
  line(15,30,10,35);
  line(370,30,375,35);
  line(375,30,370,35);
  line(340,20,345,25);
  line(345,20,340,25);
  line(340,200,345,205); // below purple planet 
  line(345,200,340,205);
  line(355,250,360,255);
  line(360,250,355,255);
  line(320,270,325,275);
  line(325,270,320,275);
  line(200,250,205,255);
  line(205,250,200,255);
  line(80,200,85,205);
  line(85,200,80,205);
  pop();
  
  push(); // gray lines 
  colorMode(RGB);
  strokeWeight(95);
  stroke(130,130,130);
  line(0,355,400,355)
  line(-10,210,400,600)
  line(-10,270,400,400)
  pop();
  
  push(); // dark gray lines 
  colorMode(RGB);
  strokeWeight(44);
  stroke(107,106,106);
  line(0,355,400,355)
  line(-10,210,400,600)
  line(-10,270,400,400)
  line(-10,300,400,400)
  line(-10,320,400,500)
  line(0,380,400,380)
  pop();
  
  push();
  textSize(27);
  colorMode(RGB);
  fill(0, 21, 255);
  text('-:Looking Through Telescope:-',18,370);
  pop();
  
}