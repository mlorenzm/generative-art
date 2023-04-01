let particles = [];
let num = 1000; // number of
let noiseScale = 0.01;
let noiseSeed = random(milliseconds);
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i< num; i++){
    particles.push(createVector(random(width), random(height)));
    stroke(255)
  }
}

function draw() {
  background(1, 15, 28, 10);
  let color = createColorPicker('#ffffff')
  for(let i=0; i<num; i++){
    let p=particles[i];
    fill(255,255,255, 20);
    stroke(255,255,255);
    ellipse(p.x, p.y, 1.5, 1.5);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)){
      p.x = random(width);
      p.y = random(height);
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function onScreen(vector){
  return vector.x >= 0 && vector.x <= width && vector.y >= 0 && vector.y <= height
}
