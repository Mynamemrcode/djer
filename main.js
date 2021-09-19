music1 = "";
music2 = "";

leftWristscore = "";

leftWristx = "";
leftWristy = "";
rightWristx = "";
rightWristy = "";

leftsongstat = "";
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
    fill("#b8860d");
    stroke("#b8860d");

    leftsongstat = music1.isPlaying();
    if(leftWristscore > 0.5) {
        circle(leftWristx, leftWristy, 40);
        music2.stop();

        if(leftsongstat == false) {
            music1.play();
            document.getElementById("holder").innerHTML = "Happiest Memory (Custom)";
        }
    }
}
function Gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        leftWristscore = results[0].pose.keypoints[9].score;
    }
    
}

function Loaded() {
    console.log("loaded");
}


