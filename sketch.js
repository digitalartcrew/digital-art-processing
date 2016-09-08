var sunY = 650;

function setup(){
	createCanvas(800,800);



};

function draw(){
	background(0, 246, 255);
	
	noStroke();
	//Color Variables
	blk = color(12,2,2);
	rd = color(214, 38, 38);
	grn = color(0,255,0);
	y = color(221, 232, 78);
	w = color(255,255,255, 200);
	lw = alpha(w);

  	ellipse(150, sunY, 100, 100);	
	
	//House
	fill(blk);
	triangle(400, 500, 400 + 155, 500, 155/2 +400, 450);
	triangle(150, 500, 150 + 155, 500, 155/2 +150, 450);

	fill(rd);
	rect(400,500,155,200);


	rect(150,500,155,200);
	//Ground
	fill(grn);
	rect(0,600,800,200);

	//Create Clouds
	
	fill(w);
	ellipse(400,260,123,47);

	ellipseMode(CORNER);
	ellipse(400,260,123,47);
	ellipse(150,347,123,47);

	ellipseMode(CENTER);
	ellipse(150,347,123,47);
	
	ellipseMode(CENTER);
	ellipse(300,300,123,47);
	ellipse(500,400,123,47);
  
	//stem
	stroke('green');
	line(720, 500, 720, 600);

	//flower
	noStroke();
	fill(255,47,20)
	arc(720,500,50,50,50,60);

	fill('brown');
	quad(350, 550, 400, 550, 350, 600, 400, 600);
  	fill(221, 232, 78);
  
  	//decrement y position
  	sunY = sunY - 1;

  	//if goes off map
 	 if (sunY < 0){
  		sunY = 650;
  		};
	};



