var size=0;
var noseX=0;
var noseY=0;
var leftwrist=0;
var rightwrist=0;
var r=Math.floor(Math.random()*255);
var g=Math.floor(Math.random()*255);
var b=Math.floor(Math.random()*255);

function setup(){
    canvas=createCanvas(550,500);
    canvas.position(850,200);

    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(250,200);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialised");
}

function draw(){
     background(r,g,b);
     stroke("pink");
     square(noseX,noseY,size);
     fill("pink");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwrist=results[0].pose.leftWrist.x;
        rightwrist=results[0].pose.rightWrist.x;
        size=Math.floor(leftwrist-rightwrist);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y
    }
}