function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#b1c7d4");
  // put setup code here
  noLoop();
}

function draw() {
  // put drawing code here
  drawFiocco();
}


//---------DISEGNO DI 1! FIOCCO DI NEVE

function drawRametti() { //disegno i ramettini sopra obliqui del fiocco di neve
  line(-10,-45,0,-40)  
  line(10,-45,0,-40)

  push();
  translate(0,10);
  line(-10,-45,0,-40)
  line(10,-45,0,-40)
  pop();

}

function drawRamettiDoppi() {  //disegno i ramettini obliqui del fiocco di neve
  drawRametti();

  push();
  rotate(PI);
  drawRametti();
  pop();
}

function drawRamo() { //disegno del ramo del fiocco di neve
  line(0,-50,0,50);
  drawRamettiDoppi();
}

function drawFiocco() { //disegno il fiocco
  translate(75,75);
  
  for(let numero_rami=3; numero_rami<7; numero_rami++){
    //let angle=random(0,PI)
    rotate(PI/3)
    drawRamo();
  }
}