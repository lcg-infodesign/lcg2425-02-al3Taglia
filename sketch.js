let colors=["#dae0e4", "#7fa3b7","#334550","#4d93bb","#0f7ab8","#698392"];

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
  strokeWeight(random(1,4)); //variazione spessore di TUTTO il fiocco
  drawFiocco();
}


//----------------DISEGNO DI 1! FIOCCO DI NEVE------------------------------

function drawRametti() { //disegno i ramettini sopra obliqui del fiocco di neve
  let t1=random(-5,5); //variazione random della traslazione
  let t2=random(-5,5);
  line(-10,-45+t1,0,-40+t1);  
  line(10,-45+t1,0,-40+t1);
  
  let y=random(0,10);   //ciclo per decidere se fare 1/2 rametti obliqui per ramo
  if(y<8) {
    push();
    translate(0,10);
    line(-10,-45+t2,0,-40+t2);
    line(10,-45+t2,0,-40+t2);
    pop();
  }

}

function drawRamettiDoppi() {  //disegno i ramettini obliqui del fiocco di neve
  drawRametti();
  
  push();
  rotate(PI);
  drawRametti();
  pop();
}

function drawRamo() { //disegno del ramo del fiocco di neve
  let color=random(colors);
  stroke(color);    //variazione colore su OGNI ramo
  line(0,-50,0,50);
  drawRamettiDoppi();
}

function drawFiocco() { //disegno il fiocco
  translate(75,75);
  let nGiri=random(3,4);
  for(let numero_rami=0; numero_rami<nGiri; numero_rami++){
    //let angle=random(0,PI)
    let a=random(-(PI/15),+(PI/15)); //variazione angolo rotazione ramo
    rotate((PI/nGiri)+a);
    drawRamo();
  }
}