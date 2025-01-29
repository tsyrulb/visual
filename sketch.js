/**
 * Random start times approach:
 * Each pixel gets a random "startTime" (in frames).
 * Before that time, it remains in place.
 * After that time, it is moved by the Lorenz equations.
 */

let img;
let particles = [];

const sigma = 10;
const rho = 28;
const beta = 8 / 3;
const dt = 0.01;

function preload() {
  img = loadImage('image.png');
}

function setup() {
  createCanvas(600, 600, WEBGL);

  img.resize(200, 0);
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let idx = (x + y * img.width) * 4;
      let r = img.pixels[idx + 0];
      let g = img.pixels[idx + 1];
      let b = img.pixels[idx + 2];

      let xPos = x - img.width / 2;
      let yPos = y - img.height / 2;
      let zPos = random(-1, 1);

      // Each pixel has a random frame from 0..300
      // meaning it will stay static until that frame
      // then begin chaotic motion
      let startFrame = floor(random(0, 300));

      particles.push({
        x: xPos,
        y: yPos,
        z: zPos,
        r: r,
        g: g,
        b: b,
        startFrame: startFrame
      });
    }
  }
}

function draw() {
  background(0);
  orbitControl();

  let currentFrame = frameCount; 
  for (let p of particles) {
    if (currentFrame > p.startFrame) {
      let dx = sigma * (p.y - p.x) * dt;
      let dy = (p.x * (rho - p.z) - p.y) * dt;
      let dz = (p.x * p.y - beta * p.z) * dt;

      p.x += dx;
      p.y += dy;
      p.z += dz;
    }

    // Draw it
    push();
    translate(p.x, p.y, p.z);
    noStroke();
    fill(p.r, p.g, p.b);
    sphere(1);
    pop();
  }
}
