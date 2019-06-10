let erzaem = {
	x: 0,
	y: 0,

	otrisovka: function() {
		background("black");
		ellipse(this.x, this.y, 208, 208);
		fill("red");

	},
	
	okrujnost: function() {
		if (keyIsPressed) {
			if (keyCode === 39) {
				if (this.x < 1150) {
					fill("yellow");
					this.x = this.x + 20;
				}
			}
			if (keyCode === 40) {
				if (this.y < height - 112) {
					this.y = this.y + 20;
				}
			}

			if (keyCode === 37) {
				if (this.x > 104) {
					fill("brown");
					this.x = this.x - 20;
				}
			}
			if (keyCode === 38) {
				if (this.y > 112) {
					this.y = this.y - 20;
				}
			}
		}
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

}

function draw() {
	erzaem.otrisovka();
	erzaem.okrujnost();

}