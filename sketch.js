var canvas;
var music;
var box1, box2, box3, box4, player, edges;

function preload(){
    //music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100,580,200,30);
    box1.shapeColor = "yellow"

    box2 = createSprite(300,580,200,30);
    box2.shapeColor = "purple"

    box3= createSprite(500,580,200,30);
    box3.shapeColor = "red"

    box4 = createSprite(700,580,200,30);
    box4.shapeColor = "blue"

    player = createSprite(random(20,750),100,40,40);
    player.shapeColor = "white"
    player.velocityX = 4;
    player.velocityY = 6;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges = createEdgeSprites();

  player.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(player.isTouching(box1)){
        player.shapeColor = "yellow"
        player.bounceOff(box1);
        //music.play();
    }

    if(player.isTouching(box2)){
        player.shapeColor = "purple"
        player.bounceOff(box2);
       
    }

    if(player.isTouching(box3)){
        player.shapeColor = "red"
        player.velocityX = 0;
        player.velocityY = 0;
        //music.stop();
    }

    if(player.isTouching(box4)){
        player.shapeColor = "blue"
        player.bounceOff(box4);
      
    }
    drawSprites();
}
