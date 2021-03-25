var bullet;
var wall,thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(23,88);

  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=("gray");
  bullet.velocityX = speed;

}

function draw() {
  background("black");  
  if(bullet.collide(wall)){
    damage=0.5*weight*speed*speed/50*50*50
    if(damage<=3.68){
      bullet.velocityX=0; 
      bullet.shapeColor=("green");
    }

    else if (damage>=12.43){
      bullet.velocityX=0;
      bullet.shapeColor=("red");
    }
  }
  drawSprites();
}