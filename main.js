music1 = "";
music2 = "";
function preload() {
music1 = loadSound("FearisUsless.mp3");
music2 = loadSound("FearisUsless.mp3");
} 
function setup() {
    canvas = createCanvas(800,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
} 
function draw() {
    image(video,0,0, 800,500);
}