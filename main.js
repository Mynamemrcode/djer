music1 = "";
music2 = "";

leftWristscore = "";
RightWristscore = "";

leftWristx = "";
leftWristy = "";
rightWristx = "";
rightWristy = "";

leftsongstat = "";
rightsongstat = "";
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
    rightsongstat = music2.isPlaying();
    if(RightWristscore > 0.3) {
        circle(rightWristx, rightWristy, 40);
        music1.stop();
    
    if(rightsongstat == false) {
        music2.play();
        document.getElementById("holder").innerHTML = "Nerve - A Trip To Phoenix (Custom)";
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
        RightWristscore =results[0].pose.keypoints[10].score;
    }
    
}

function Loaded() {
    console.log("loaded");
}



function stop() {
    music1.stop();
    music2.stop()
}