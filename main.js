harry_potter = "";
peter_pan = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function setup () {
    canvas = createCanvas(600, 500);
    canvas.position(450, 200);
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
}
function modelLoaded () {
    console.log("Model Loaded!");
    posenet.on("pose", gotPoses);
}
function gotPoses (results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Left Wrist X - " + leftWristX + ", Left Wrist Y - " + leftWristY + ", Right Wrist X - " + rightWristX + ", Right Wrist Y - " + rightWristY);
    }
}
function draw () {
    image(video, 0, 0, 600, 500);
}
function preload () {
    harry_potter = loadSound("music.mp3");
    peter_pan = loadSound("music2.mp3")
}