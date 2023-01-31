var starCollection = 0;


function preload(){
    Galaxyimg = loadImage("Galaxy.jpg");
    Asteroidimg = loadImage("Asteroid.png")
    Starimg = loadImage("star.png");
    Spaceshipimg = loadImage("Spaceship.jpg")
    end = loadImage("GameOver.jpg")
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 Galaxy=createSprite(width/2,200,height-10 , width,125 )
Galaxy.addImage(Galaxyimg)
Galaxy.velocityY = -4

Spaceship=createSprite(50,height-70,20,50)
Spaceship.addImage(Spaceshipimg)
Spaceship.scale = 0.20

AsteroidG=new Group()
starG=new Group()
}

function draw() {
 background("blue")
 drawSprites()
 if(Galaxy.y<0){
    Galaxy.y=height/2
    }
    Spaceship.y = World.mouseY;
    Spaceship.x = World.mouseX; 
createAsteroid()
createstar()
if (starG.isTouching(Spaceship)) {
    starG.destroyEach();
    starCollection=starCollection + 1;
}
textSize(20);
          fill(255);
          text("star: "+ starCollection,width-150,30);
          if(AsteroidG.isTouching(Spaceship)) {

            
            Spaceship.changeImage(end);
            Spaceship.x=width/2;
            Spaceship.y=height/2;
            Spaceship.scale=0.6;
            
            starG.destroyEach();
            AsteroidG.destroyEach();
            
            starG.setVelocityYEach(0);
            AsteroidG.setVelocityYEach(0);
          }
}
function createAsteroid() {
    if (frameCount % 130 == 0) {

      var Asteroid = createSprite(random(50,width-50),40, 10, 10);
      Asteroid.addImage(Asteroidimg);
      Asteroid.scale=0.12;
      Asteroid.velocityY = 5;
      Asteroid.lifetime = 200;
      AsteroidG.add( Asteroid);
    }
  
}
function createstar() {
    if (frameCount % 100 == 0) { 
      var star = createSprite(random(50,width-50),40, 10, 10);
      star.addImage(Starimg);
    star.scale=0.05;
    star.velocityY = 5;
    star.lifetime = 200;
    starG.add(star);
    }
  }

