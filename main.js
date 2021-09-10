music1 = "";
music2 = "";

leftWristx = "";
leftWristy = "";
rightWristx = "";
rightWristy = "";
function preload() {
    music1 = loadSound("song.mp3");
    music2 = loadSound("NerveATripToPhoenix.mp3");
    }
function setup() {
    canvas = createCanvas(800,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poses = ml5.poseNet(video, Loaded);
    poses.on('pose', Gotposes);
} 
function draw() {
    image(video,0,0, 800,500);
}
function Gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristx = results[0].length.pose.leftWrist.x;
        leftWristy = results[0].length.pose.leftWrist.y;
        rightWristx = results[0].length.pose.rightWrist.x;
        rightWristy = results[0].length.pose.rightWrist.y;
    }
    
}

function Loaded() {
    console.log("loaded");
}