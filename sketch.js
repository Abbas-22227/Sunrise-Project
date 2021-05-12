const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg ;
bg = "sunrise1.png";
function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg){
    background(backgroundImg);
}

    Engine.update(engine);

    // write code to display time in correct format here
    fill ("black");
    textSize (30);
    if(hour>=12){
         text("Time : "+ hour%12 + " PM", 50,100); 
        }
        else if(hour==00){ 
        text("Time : 12 AM",100,100); 
    }
     else{
     text("Time : "+ hour%12 + " AM", 50,100); 
    }
    console.log (hour);
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log (hour); 
    if(hour>=04 && hour<=06){
        bg = "suntrise1.png";
    }
    else if ( hour>= 06 && hour <=08){
        bg = "sunrise2.png"
    }
    else if ( hour>= 08 && hour <=11){
        bg = "sunrise3.png"
    }
    else if ( hour>= 11 && hour <=13){
        bg = "sunrise4.png"
    }
    else if ( hour>= 13 && hour <=15){
        bg = "sunrise5.png"
    }
    else if ( hour>= 15 && hour <=17){
        bg = "sunrise6.png"
    }
    else if ( hour>= 17 && hour <=18){
        bg = "sunset7.png"
    }
    else if ( hour>= 18 && hour <=20){
        bg = "sunset8.png"
    }
    else if ( hour>= 20 && hour <=23){
        bg = "sunset9.png"
    }
    else if ( hour>= 23 && hour <=0){
        bg = "sunset10.png"
    }
    else if ( hour>= 0 && hour <=3){
        bg = "sunset11.png"
    }
    else{
        bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg);
    

}
