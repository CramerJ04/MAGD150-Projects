
//The setup function begins the code by creating a canvas. Capture is created, which tells the program to begin taking a video. The size of the capture/video is 400/400, the size of the canvas. osc.hide is not initialized as I wanted to create a 'mirror' with two videos recorded, one within and outside of the canvas
function setup() {
  count = 0;
  createCanvas(400,400);
  capture = createCapture(VIDEO);
  capture.size(400,400); // no hide 
  
  osc = new p5.Noise();
  osc.start();
  //osc start begins playing a "sound" before the initial sounds i have selectd starts. This is essetial for the code as I have set up a function within the mouse pressed that calculates which sound to be played based on the amount of clicks on the screen 
  
  //mic = new p5.AudioIn();
  //mic.start();
}

function draw() {
  //capture.hide();
  //image(capture,0,0,400,400);
  //the draw function begins by waiting for an input by the mouse. Once clicked, the switch case below begins. Based on the counter which goes up after every mouse click, a different sound is played as well as a switch of the video being taken along the Y axis. The function breaks after each case
  switch (count){
    case 1:
      push();
      scale(-1,1);
      image(capture,-400,0,400,400)
      pop();
  //image(capture,0,0,400,400);
  osc.setType('pink');
  tint(255, 74, 236);
      break;
      case 2:
  image(capture,0,0,400,400);
  osc.setType('brown');
  tint(117, 91, 86);
      break;
    case 3:
      push();
      scale(-1,1);
      image(capture,-400,0,400,400)
      pop();
  //image(capture,0,0,400,400);
  osc.setType('white');
  tint(0,0,255);
      break;
  }
}
//mouse clicked initiates a counter after every input by the mouse. Based on this, the switch cases within the draw function are effected. If four clicks are taken, the count variable resets and the function resets back to its initial stage within the draw function
function mouseClicked(){
count++;
if (count == 4){
  count = 1;
  }
}
