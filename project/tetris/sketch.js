let x = 0;
let y = 0;

let zx = 10;
let zy = 10;

let xdoska = 0;
let ydoska = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	//+"добавить условие если мяч пролетает за ракетку цвет ее красный"...
	background("black");
	push();
	fill("blue");
	rect(200, y, 35, 200);
	if (keyIsPressed) {
		if (keyCode === 38) { //up 
			if (y > 1) {
				y = y - 20;
			}
		}
		if (keyCode === 40) { //down
			if (y < height - 200) {
				y = y + 20;
			}
		}
	}
	pop();






//мячик 


	push();
	fill("red");
	ellipse(x, windowWidth / 3, 50, 50);
	x = x + zx;
	if (x > windowWidth) zx = -10;
	if (x < 11) zx = 18;
	pop();
}