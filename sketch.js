function setup(){
	createCanvas(800,800);
	background(0, 246, 255);
	stroke(255,255,0);
	// line(0, 515, 800, 515);

	noStroke();
	//House
	fill(216, 120, 65);
	rect(400,500,155,200);
	triangle(400, 500, 400 + 155, 500, 155/2 +400, 450);

	rect(150,500,155,200);
	triangle(150, 500, 150 + 155, 500, 155/2 +150, 450);

	//Ground
	fill(0,255,0);
	rect(0,600,800,200);


	//Create Clouds
	fill(255);
	
	ellipse(400,260,123,47);
	ellipse(300,300,123,47);
	ellipse(150,347,123,47);
	ellipse(500,400,123,47);

	fill(221, 232, 78);
	ellipse(150,150,100,100);
	

};

