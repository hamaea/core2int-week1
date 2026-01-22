let partyMode = false;
let mouseText = '';
let img;
function preload(){
  img = loadImage("/assets/hello_kitty.jpeg");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  mouseText = 'click hello kitty!';
}

function draw() {
  background('white');

  imageMode(CENTER);
  image(img, width/2, height/2, 100, 90);

  // hover text
  push();
  fill('black');
  text(mouseText, mouseX + 5, mouseY - 5);

  if (
    mouseX > width/2 - 50 &&
    mouseX < width/2 + 50 &&
    mouseY > height/2 - 45 &&
    mouseY < height/2 + 45
  ) {
    mouseText = 'CLICK ME NOW.';
  } else {
    mouseText = 'click hello kitty!';
  }
  pop();

  if (partyMode) {
    fill(random(255), random(255), random(255), 150);
    rect(0, 0, width, height);
  }
}

function mousePressed(){
  if(mouseX > width/2 - 50 && mouseX < width/2+50 && mouseY > height/2 - 45 && mouseY < height/2 + 45){
    console.log('CLICKED!');
    partyMode = !partyMode;
  }
  }