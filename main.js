var nose_x=0;
var nose_y=0;


function preload(){ nose_img= loadImage('Nose.png');
}

function setup(){
    canvas= createCanvas(450,350);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    Posenet=ml5.poseNet(video,modelLoaded);
    Posenet.on('pose', gotPoses);
}

function snapshot(){
    save("Clown_Nose_Filter.jpg");
}

function draw(){
    image(video,0,0,450,350);
    //fill('red');
    //stroke('maroon');
    //circle(nose_x, nose_y, 25);
    image(nose_img,nose_x,nose_y, 30,30);

}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
nose_x=results[0].pose.nose.x-110;
nose_y=results[0].pose.nose.y-110;
console.log(nose_x);
console.log(nose_y);
}
}