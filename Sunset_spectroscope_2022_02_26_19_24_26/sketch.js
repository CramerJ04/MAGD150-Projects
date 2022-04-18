
function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(30);
  text("Build Your Own Pizza!",55,110)
  text("Please Select An Option!", 35,140);
  var Start = createButton("Start");
  var Exit = createButton("Quit");
 Start.mousePressed(Build);
 Exit.mousePressed(Quit);
  counter = 5;
}
function Quit()
{
  rectMode(CENTER);
  fill(0);
  rect(200,200,400,400);
  textSize(30);
  fill(225,0,0);
  text("You Have Quit!", 90,110);
  text("Refresh To Try Again!", 50,140);
  push();
  fill(255,0,0);
  arc(200,300,100,100,0,2*PI);
  pop();
    
  push();
  strokeWeight(15);
  fill(255,0,0);
  point(180,280);
  point(220,280);
  strokeWeight(0);
  fill(0);
  arc(200,330,70,70,PI,2*PI);
  pop();
}
function Build()
{
  counter = 0;
  let value = 1;
  push();
  rectMode(CENTER);
  fill(102,66,34);
  rect(200,200,400,400);
  pop();
  push();
  rectMode(CENTER);
  fill('gray');
  rect(200,370,400,70);
  pop();
  
  push();
  line(100,335,100,400);
  line(200,335,200,400);
  line(300,335,300,400);  
  text("Select Your Toppings:", 50,30);
  pop();
  push();
  textSize(15);
  let opt1 = text("Pepperoni", 15,370);
  text("Mushrooms", 110,370);
  text("Sausage", 220,370);
  text("Pineapple", 315,370);
  pop();
  
  push();
  fill(222, 185, 153);
  noStroke();
  arc(200,175,250,250,0,2*PI);
  fill(128, 46, 46);
  arc(200,175,230,230,0,2*PI);
  for (i = 0; i<750;i++) // cheese 
    {
      let x = random(100,295);
      let y = random(80,265);
      fill(255, 192, 125);
      arc(x,y,10,10,0,2*PI);
    }
  pop();
  push();
  textSize(20);
  fill(255,255,255);
  text("Click Down When Finished!",90,325);
  pop();
}

// rectMode(CENTER);
//   noFill();
//   strokeWeight(3);
//   rect(mouseX,mouseY,10,10);


  function mousePressed()
{
  counter++;
  let xi = mouseX;
  let yi = mouseY;
  //let instance = (xi,xy);
  if (xi < 100 && yi > 235 ) // pepperoni
    // put build within bounds to reset locations  
    {
      if (counter == 2)
      {
        for (i = 0; i<20;i++)
        {
        let x = random(100,295);
        let y = random(80,265);
        fill(255,0,0);
        arc(x,y,10,10,0,2*PI);
        reset();
        }
      }
    }
  if (xi < 200 && xi > 100 ) // mushrooms
      {
        if (yi > 235 && counter == 2)
        {
          for (i = 0; i<20;i++)
          {
          let x = random(100,295);
          let y = random(80,265);
          fill(128, 93, 66);
          arc(x,y,10,10,0,PI);
          reset();
          }
        }
      }
   if (xi < 300 && yi > 200 ) // sausage 
      {
        if (yi > 235 && counter == 2)
        {
          for (i = 0; i<10;i++)
            {
            let x = random(100,295);
            let y = random(80,265);
            fill(122,53,0);
            arc(x,y,9,15,0,2*PI);
            reset();
            }
        }
      }
  if (xi < 400 && xi > 300 ) // pineapple
      {
        if (yi > 235 && counter == 2)
        {
          for (i = 0; i<10;i++)
          {
          let x = random(100,295);
          let y = random(80,265);
          fill(223, 227, 116);
          triangle(x,y,x+7,y+7,x-7,y+7);
          reset();
          }
        } 
      }
}
function reset()
  {
  counter = 1;
  }

function keyPressed()
{     
  if (keyCode === DOWN_ARROW)
  {
    background(0,0,0);
    textSize(30);
    fill(255,0,255); 
    text("Pizza Created!",100,100);
    text("Enjoy Your Pizza!",80,130); 
    
    push();
    fill(246, 255, 0);
    arc(200,300,100,100,0,2*PI);
    pop();
    
    push();
    strokeWeight(15);
    fill(0);
    point(180,280);
    point(220,280);
    strokeWeight(0);
    arc(200,300,70,70,0,PI);
    pop();
  }
}

// function draw()
// {
//   push();
//   rectMode(CENTER);
//   rect(mouseX, mouseY, 20, 20);
//   pop();
// }





 