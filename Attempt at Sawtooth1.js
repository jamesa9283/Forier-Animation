// Convergence Animation of Saw Tooth Fourier Series - Attempt 1
// James Arthur
//
// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA

let time = 0;
let wave = [];
let path = [];
let k = 1;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	translate(150, 200);

	let x = 0;
	let y = 0;

	for (let i = 0; i < k; i++) {
		let prevx = x;
		let prevy = y;

		let n = 2 * i-1 ;
		let radius = 10 * ((1/n*PI));
		x += radius * cos(((-1)^i)*n^(-2) * time);
		y += radius * sin(((-1)^i)*n^(-2) * time);

		stroke(255, 100);
		noFill();
		ellipse(prevx, prevy, radius * 2);

		//fill(255);
		stroke(255);
		line(prevx, prevy, x, y);
		//ellipse(x, y, 8);
	}
	wave.unshift(y);


	translate(200, 0);
	line(x - 200, y, 0, wave[0]);
	beginShape();
	noFill();
	for (let i = 0; i < wave.length; i++) {
		vertex(i, wave[i]);
	}
	endShape();

	time += 0.05;


	if (wave.length > 250) {
		wave.pop();
		k = k + 0.01;
	}
}

function cosh(x) {
  y = 0.005*(exp(x)+exp(-x));
  return y
}

function sinh(x) {
  y=0.005*(exp(x)-exp(-x));
  return y
}

