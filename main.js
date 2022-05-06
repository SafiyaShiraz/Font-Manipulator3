noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO); 
    video.size(550, 550);

canvas = createCanvas(550, 550);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("PoseNet Model Loaded");
    textSize(10);
    fill('#cec5e2');
    text('Safiya', 10, 10);

}

function gotPoses(results)
{
if(results > 0)
{
console.log(results);
noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
console.log("Nose X="+noseX+"Nose Y="+noseY);
rightWristX = results[0].pose.rightWrist.x;
leftWristX = results[0].pose.leftWrist.x;
difference = floor(leftWristX-rightWristX);
console.log("Right Wrist X="+rightWristX+"Left Wrist X="+leftWristX+"Difference="+difference);
document.getElementById("moving_font").innerHTML = "Difference is" + difference;
}
}

function draw()
{
canvas.background('#c4dbdf');    
}