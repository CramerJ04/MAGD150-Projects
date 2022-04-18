
let basket = {};
function setup() {
  createCanvas(400, 400); // the for loop here creates 20 egg objects for an empty array. Each element in the array is filled with an egg object by calling the eggs class and using the constructor, which gives the color and positions of the specific egg object
  for (let i = 0; i <= 20; i++)
    {
      basket[i] = new Eggs();
    }
}

function draw() { // the draw function creates the text for the drawing, and assigns 20 eggs for the basket. It does so by using a filled array of eggs objects, and calling the draw function within the function to draw their positions and colors
  background(10,92,8);
  push();
  textSize(30);
  fill(255);
  text("How Many Eggs",85,65);
  text("Are On The Ground?", 62,100);
  pop();
  for(let i = 0; i <= 20; i++)
    {
      basket[i].draw();
    }
}

class Eggs // this class creates 20 different 'eggs'. It does so by having a constuctor, which assigns individual objects, all of which can then be used on their own (when called separately) within the draw function.  
{
  constructor()
  {
    var centerX, col, Ypos;
    this.Ypos = 375;
    this.col = color(random(255), random(255), random(255));
    this.centerX = round(random(15,385));
  }
  
  draw() // the draw function uses variables within the class. Based on the object created (and which one is called in the array), the function can fill the egg with a random color (already assigned and created), and draw it at different positions using the same method. 
  {
    noStroke();
    fill(this.col);
    arc(this.centerX,this.Ypos,30,50,0,2*PI);
  }
}