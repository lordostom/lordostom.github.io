let radius = 1;
let x = 2;
let cx = 5;
let yellow = new planeta(130, 130, 25, 9, "yellow");

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate();
}

function draw() {
	background("black");
	translate(windowWidth / 2, windowHeight / 2);
	// треугольники	 
	push();
	fill("purple");
	triangle(0, -250, 235, 120, 44, 49);
	triangle(0, -250, -235, 120, -44, 49);
	triangle(0, 250, -235, 120, -44, 49);
	triangle(0, 250, 235, 120, 44, 49);
	pop();

	// центр
	push();
	fill("green");
	ellipse(0, 0, 60, 60);
	pop();

	//зеленый круг скорость 5?
	push();
	fill("green");
	rotate(radians(cx));
	cx = cx - 9;
	ellipse(45, 45, 52, 52);
	pop();

	//синий круг скорость 15??
	push();
	fill("blue")
	rotate(radians(x));
	x = x + 5;
	ellipse(80, 80, 40, 40);
	pop();
	/*
		//жетлый круг скорость 15??
		push();
		fill("yellow")
		rotate(radians(radius));
		radius = radius + 2;
		ellipse(130, 130, 25, 25);
		pop();
	*/
	yellow.otrisovka();
	yellow.vrashenie();
}

function planeta(x, y, razmer, vrash, color) {
	this.razmer = razmer;
	this.x = x;
	this.y = y;
	this.vrash = vrash;
	this.color = color;
	this.otrisovka = function() {

		push();
		fill(this.color);
		rotate(radians(this.vrash));

		ellipse(this.x = x, this.y = y, this.razmer, this.razmer);
		pop();
	}
	this.vrashenie = function() {
		this.vrash = this.vrash - 9;
	}
}