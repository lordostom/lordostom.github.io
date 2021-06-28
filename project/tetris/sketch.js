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
