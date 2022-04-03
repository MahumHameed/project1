
function setup() {
  createCanvas(400,400);
  background("green");
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("yellow");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("pink");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("blue");
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("red")
  }


  
  drawSprites();
}

