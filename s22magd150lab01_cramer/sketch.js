function setup() {
  createCanvas(300,300);
  background(0);
}

function draw() {
push();
stroke(0);
fill(180);
rect (210,200,70,150); // x, y, width, length (corner, right) 
rect (80,250,40,150); // middle
rect (20,100,40,200); // left 
pop();
  

push(); // first building windows 
strokeWeight(2);
ellipseMode(RADIUS);
fill(255);
ellipse(30,115,7,7); // x, y, xr, yr
ellipse(50,115,7,7);
ellipse(30,135,7,7);
ellipse(50,135,7,7);
ellipse(30,155,7,7); 
ellipse(50,155,7,7);
ellipse(30,175,7,7);
ellipse(50,175,7,7);
ellipse(30,195,7,7); 
ellipse(50,195,7,7);
ellipse(30,215,7,7);
ellipse(50,215,7,7);
ellipse(30,235,7,7);
ellipse(50,235,7,7);
rect(38,290,5,10); // door 
pop();
  
push();
noFill();
ellipse(40,265,15,15);
ellipse(40,265,12,12);
ellipse(40,265,9,9);
ellipse(40,265,6,6);
pop(); 
  
push(); // middle building windows 
ellipseMode(RADIUS); // radius 
strokeWeight(2);
ellipse(90,265,8,8);
ellipse(110,265,8,8);
rect(98,290,5,10); // door 
pop();  
  
push(); // right building windows 
rectMode(CORNER);
fill(255);
strokeWeight(2);
rect (215,205,15,15) // x, y, width, length
rect (237,205,15,15)
rect (259,205,15,15)
rect (226,225,15,15) // middle rectangles 
rect (248,225,15,15)
rect (215,245,15,15) 
rect (237,245,15,15)
rect (259,245,15,15)
rect(255,290,10,10); // door 
pop();
  
push();
fill(100);
rect (259,170,15,30) // smoke stack 
pop();
  
push(); // lines on smoke stack
line(259,190,274,190); // x1,y1,x2,y2
line(259,195,274,195);
line(259,180,274,180);
  
pop();
  
push();
ellipseMode(CENTER); // center, smoke
strokeWeight(0);
fill(255);
ellipse(259,160,10,10); // x, y, xr, yr 
ellipse(270,154,9,9);
ellipse(265,145,6,6);
ellipse(259,140,5,5);
ellipse(265,133,4,4);
pop(); 
  
push(); // blue stars 
fill('blue');
strokeWeight(0);
strokeJoin(ROUND); 
beginShape();
vertex(35,20); // top
vertex(40,30); // middle 
vertex(35,40); // bottom
endShape();
beginShape();
vertex(35,20); 
vertex(30,30);
vertex(35,40); 
endShape();
beginShape();
vertex(100,150); 
vertex(105,160);
vertex(100,170); 
endShape();
beginShape();
vertex(100,150); 
vertex(95,160);
vertex(100,170); 
endShape();
beginShape();
vertex(220,100); 
vertex(225,110);
vertex(220,120); 
endShape();
beginShape();
vertex(220,100); 
vertex(215,110);
vertex(220,120); 
endShape();
pop();  
  
push(); // white stars 
fill(255);
strokeWeight(0);
strokeJoin(ROUND); 
beginShape();
vertex(150,120); // +5, +10
vertex(155,130);
vertex(150,140); 
endShape();
beginShape();
vertex(150,120); // -5, +10
vertex(145,130);
vertex(150,140); 
endShape();
beginShape();
vertex(200,50); 
vertex(205,60);
vertex(200,70); 
endShape();
beginShape();
vertex(200,50); 
vertex(195,60);
vertex(200,70); 
endShape();
beginShape();
vertex(55,50); 
vertex(60,60);
vertex(55,70); 
endShape();
beginShape();
vertex(55,50); 
vertex(50,60);
vertex(55,70); 
endShape();
pop();


}
  

