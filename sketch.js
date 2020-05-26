
function setup() {
  createCanvas(1200,400);
  
   
}

function draw() {
  background(255,255,255);  

  

  for(var i=65;i<91;i++)
  {
   var object= String.fromCharCode(i);
  rain1= new rain(object);
  rain1.display();

  
  }
 

}

