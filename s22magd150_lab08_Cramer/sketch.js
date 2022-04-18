var maxImages; 
var imageIndex;
var count = 0;
var count2 = 0;
var pdf;
let basic, end;

// Declaring an array of images.
var movie = []; 
var movie2 = [];


function preload(){
  // Loading the images into the array
  for (let i = 0; i < 1; i++ ) {
    movie[i] = loadImage( "istockphoto-1208666888-612x612.jpg");
  }
    for (let i = 0; i < 1; i++ ) {
    movie2[i] = loadImage( "3683.jpg.webp");
  }
}

function setup() {
  background(0);
  createCanvas(200, 200);
  
  pdf = createPDF();
  pdf.beginRecord();
  
  maxImages = 2;
  imageIndex = 0;
  basic = loadFont("POORICH.TTF");
  end = loadFont("arialbi.ttf")
  textAlign(LEFT, CENTER);
  textFont(basic);
  textSize(48);

 }

function draw() {
  // Displaying one image
  image(movie[imageIndex], 0, 0, 200, 200);
  push(); // play button 
  fill(186,45,45);
  arc(100,185,25,25,0,2*PI);
  pop();
  
  push();
  fill(0);
  triangle(99,181,103,186,99,191);
  pop();
  
  push(); // save button
  fill(45,113,186);
  arc(185,185,25,25,0,2*PI);
  pop();
  
  if (count2 == 10){
  push();
  push();
  tint(225,0,0);
  filter(GRAY);
  image(movie2[imageIndex], 30, 35, 138, 129);
  pop();
  fill(32, 10);
  rect(0, 0, width, height);
  textSize(25);
  translate(60,50);
  shearX(frameCount / 90.0);
  fill(0);
  text("The Cat!!!", 0, 0);
  pop();
    if (frameCount >= 300){
    count2 = 5;
    }
  }
  
    if (count == 0){
  push();
  fill(32, 10);
  rect(0, 0, width, height);
  textSize(25);
  translate(40,50);
  shearX(frameCount / 90.0);
  fill(255, 255, 127, 127);
  text("Introducing...", 0, 0);
  pop();
  }
  if (frameCount >= 140){
  count = 1;
  }
  
  if (count2 == 5){
  push();
  fill(32, 10);
  rect(0, 0, width, height);
  textSize(25);
  translate(60,50);
  shearX(frameCount / 90.0);
  fill(45,186,52);
  textFont(end);
  text("The End!!!", -23, 0);
  pop();
    if (frameCount >= 600){
      count2 = 100;
    }
  }
}

function mousePressed() {
  //imageIndex = int(random(movie.length));
  //arc(185,185,25,25,0,2*PI);
  if (mouseX >= 150 && mouseX <=210) 
    if (mouseY <=200 && mouseY >=160)
      {
    pdf.save();
      }
  
  
  // arc(100,185,25,25,0,2*PI);
  if (mouseX >= 75 && mouseX <= 125) 
    if (mouseY <= 200 && mouseY >= 160)
      {
        count2 = 10;
      }
}

  
