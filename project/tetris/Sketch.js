let x = 0;
let y = 0;
let color ="blue";
let zx = 10;
let zy = 10;

let xdoska = 0;
let ydoska = 0;
let xellipse=20;
let yellipse = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	//+"добавить условие если мяч пролетает за ракетку цвет ее красный"...
	background("black");
	push();
	fill(color);
	rect(200, ydoska, 35, 200);
	if (keyIsPressed) {
		if (keyCode === 38) { //up 
			if (ydoska > 1) {
				ydoska = ydoska - 20;
			}
		}
		if (keyCode === 40) { //down
			if (ydoska < height - 200) {
				ydoska = ydoska + 20;
			}
		}
	}
	pop();

//мячик 

	push();
	fill("red");
	ellipse(xellipse, yellipse, 50, 50);
	xellipse = xellipse + zx;
    yellipse =yellipse +zy;
	
    if (xellipse > width) zx = -20;
	if (xellipse < 11){
		color="red";
		zx = 22;
	}
	if (xellipse >200){
		 		color="blue";}
    if (yellipse> height) zy= -10;
    if (yellipse< 11) zy= 10;

    if (xellipse< 260 && ydoska< yellipse && yellipse<ydoska+200 ) {
     
      /*if (y< windowHeight / 3) {
           
        if (windowHeight / 3<y+200) {
          zx=10;
       }
       
       
    }
     }*/
    zx=10;}
	pop();
}