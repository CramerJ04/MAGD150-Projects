var pdf, arg, colorArg, shapeArg, sizeArg;
var Circle, Square, Triangle
var bounds = false;
var RedB, OrangeB, YellowB, GreenB, BlueB, PurpleB, BlackB, WhiteB = false;
function setup() { 
  createCanvas(600,600);
  background(176,176,176);
  f = loadFont("GARA.TTF");
  pdf = createPDF();
  pdf.beginRecord();
  push();
  fill('gray');
  rectMode(CENTER);
  rect(300,250,485,400);
  pop();
}

function draw() {
  push(); // paint boundaries 
  if (mouseX < 542.5 && mouseX > 57.5 && mouseY > 50 && mouseY < 450){
   bounds = true;
  }
  else bounds = false;
  pop();
  
  push(); // paint for any color 
  if (arg == true && bounds == true && mouseIsPressed){
    fill(colorArg);
    if (shapeArg == 1){
      arc(mouseX,mouseY,sizeArg,sizeArg,0,2*PI);
    }
    if (shapeArg == 2){
      rect((mouseX - sizeArg/2),(mouseY - sizeArg/2),sizeArg,sizeArg);
    }
    if (shapeArg == 3){
      triangle(mouseX,(mouseY + 20) - sizeArg,(mouseX - 20) + sizeArg, (mouseY - 20) + sizeArg, (mouseX + 20) - sizeArg, (mouseY - 20) + sizeArg);
    }
  }
  pop();
  
  push(); // outline (boundaries)
  rectMode(CORNERS);
  noStroke();
  fill(176,176,176);
  rect(0,0,57.5,600)
  rect(0,0,600,50);
  rect(542.5,0,600,600);
  rect(0,450,600,600);
  pop();
  
  push(); // buttons
  fill('red')
  rectMode(CENTER);
  rect(160,500,60,40);
  pop();
  
  push(); 
  fill('orange')
  rectMode(CENTER);
  rect(160,550,60,40);
  pop();
  
  push();
  fill('yellow');
  rectMode(CENTER);
  rect(230,500,60,40); // x + 70 
  pop();
  
  push();
  fill('green');
  rectMode(CENTER);
  rect(230,550,60,40); // y + 50
  pop();
  
  push();
  fill('blue');
  rectMode(CENTER);
  rect(300,500,60,40); // y + 50
  pop();
  
  push();
  fill('purple');
  rectMode(CENTER);
  rect(300,550,60,40); // y + 50
  pop();
  
  push(); // light blue buttons 
  fill(3,223,252);
  rectMode(CENTER);
  rect(370,525,60,20);
  pop();
  
  push(); 
  fill(3,223,252);
  rectMode(CENTER);
  rect(370,500,60,20); 
  pop();
  
  push(); 
  fill(3,223,252);
  rectMode(CENTER);
  rect(370,550,60,20); 
  pop();
  
  push(); // pink size buttons 
  fill(255, 133, 243);
  rectMode(CENTER);
  rect(440,560,60,20); 
  pop();
  push(); 
  fill(255, 133, 243);
  rectMode(CENTER);
  rect(440,535,60,20); 
  pop();
  push();  
  fill(255, 133, 243);
  rectMode(CENTER);
  rect(440,510,60,20); 
  pop();
  push(); 
  fill(255, 133, 243);
  rectMode(CENTER);
  rect(440,485,60,20); 
  pop();
  
  push();
  fill('white');
  arc(60,525,75,75,0,2*PI);
  arc(540,525,75,75,0,2*PI);
  pop();
  
  push();
  textSize(40);
  textFont(f);
  text("Etch A Sketch P5JS", 145,35);
  pop();
  
  push(); // light blue and pink letters 
  textSize(15);
  fill(0);
  text("C",365,505);
  text("S",365,530);
  text("T",365,555);
  text("Small",420,490);
  text("Medium",415,515);
  text("Large",420,540);
  text("Gigantic",413,565);
  pop();
  
  push();
  fill(0);
  textFont(f);
  textSize(45)
  text("Clr", 30,540);
  pop();
  
  push();
  fill(0);
  textFont(f);
  textSize(35);
  text("Save", 508,535);
  pop();
  
  push();
  fill(0);
  textFont(f);
  textSize(32);
  text("Color:", 190,475); 
  pop();
  
  push();
  fill(0);
  textFont(f);
  textSize(27);
  text("Shape:",337,475); 
  pop();
  
  push();
  fill(0);
  textFont(f);
  textSize(20);
  text("Size:", 420,468); 
  pop();
}

function mousePressed(){
  // arc(540,525,75,75,0,2*PI);
  // arc(60,525,75,75,0,2*PI);
  if (mouseX > 502.5 && mouseX < 577.5) // save button        
      if (mouseY > 502.5 && mouseY < 577.5){
        pdf.save();
      }
  if (mouseX > 22.5 && mouseX < 97.5) // clear button
    if (mouseY > 502.5 && mouseY < 577.5){
      push();
    fill('gray');
    rectMode(CENTER);
    rect(300,250,485,400);
    pop();
    }
  if (mouseX > 130 && mouseX < 190) // button bounds // 60
    if (mouseY > 480 && mouseY < 520){ // 40
      RedB = true
      //RedB = false;
      OrangeB = false;
      YellowB = false;
      GreenB = false;
      BlueB = false;
      PurpleB = false; 
    }
  if (mouseX > 130 && mouseX < 190) // button bounds  // x 30 away 
    if (mouseY > 530 && mouseY < 580){ // y 20 away 
      OrangeB = true
      RedB = false;
      //OrangeB = false;
      YellowB = false;
      GreenB = false;
      BlueB = false;
      PurpleB = false; 
    }
  if (mouseX > 200 && mouseX < 260) // button bounds + 70
    if (mouseY > 480 && mouseY < 520){
      YellowB = true
      RedB = false;
      OrangeB = false;
      //YellowB = false;
      GreenB = false;
      BlueB = false;
      PurpleB = false; 
    }
  if (mouseX > 200 && mouseX < 260) // button bounds 
    if (mouseY > 530 && mouseY < 580){
      GreenB = true
      RedB = false;
      OrangeB = false;
      YellowB = false;
      //GreenB = false;
      BlueB = false;
      PurpleB = false; 
    }
  if (mouseX > 270 && mouseX < 330) // button bounds 
    if (mouseY > 480 && mouseY < 520){
      BlueB = true
      RedB = false;
      OrangeB = false;
      YellowB = false;
      GreenB = false;
      //BlueB = false;
      PurpleB = false; 
    }
  if (mouseX > 270 && mouseX < 330) // button bounds 
    if (mouseY > 530 && mouseY < 580){
      PurpleB = true
      RedB = false;
      OrangeB = false;
      YellowB = false;
      GreenB = false;
      BlueB = false;
      //PurpleB = false;
    }
  if (mouseX > 340 && mouseX < 400) // c // rect(370,500,60,20); + 50
    if (mouseY > 490 && mouseY < 510){
      shapeArg = 1;
    }
  if (mouseX > 340 && mouseX < 400) // s
    if (mouseY > 515 && mouseY < 535){
      shapeArg = 2 
    }
  if (mouseX > 340 && mouseX < 400) // t
    if (mouseY > 540 && mouseY < 560){
      shapeArg = 3
    }
  if (mouseX > 410 && mouseX < 470) // pink button sizearg
    if (mouseY > 550 && mouseY < 570){
      sizeArg = 200
    }
  if (mouseX > 410 && mouseX < 470) //- 25
    if (mouseY > 525 && mouseY < 545){
      sizeArg = 125
    }
  if (mouseX > 410 && mouseX < 470) //- 25
    if (mouseY > 500 && mouseY < 520){
      sizeArg = 75
    }
  if (mouseX > 410 && mouseX < 470) //- 25
    if (mouseY > 475 && mouseY < 495){
      sizeArg = 45
    }
  if(RedB == true && bounds == true && mouseIsPressed){ // draw paramaters 
   arg = true;
    colorArg = 'red';
  }
  if(OrangeB == true && bounds == true && mouseIsPressed){ // draw paramaters 
   arg = true;
    colorArg = 'orange';
  }
  if(YellowB == true && bounds == true && mouseIsPressed){ // draw paramaters 
   arg = true;
    colorArg = 'yellow';
  }
  if(GreenB == true && bounds == true && mouseIsPressed){ // draw paramaters 
   arg = true;
    colorArg = 'green';
  }
  if(BlueB == true && bounds == true && mouseIsPressed){ // draw paramaters 
   arg = true;
    colorArg = 'blue';
  }
  if(PurpleB == true && bounds == true && mouseIsPressed){ // draw paramaters 
   arg = true;
    colorArg = 'purple';
  }
    
}