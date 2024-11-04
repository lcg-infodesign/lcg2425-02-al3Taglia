let colors=["#dae0e4", "#7fa3b7","#334550","#4d93bb","#698392"];

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
  let nColums = floor(windowWidth / 150); //larhezza spazio singolo fiocco
  let nRows =  floor(windowHeight / 150); //altezza spazio singolo fiocco

  for (let i = 0; i < nColums; i++) {
    for (let j = 0; j < nRows; j++) {
      push();
      translate(i * 150, j * 150); // Posiziona il fiocco nella griglia
      strokeWeight(random(2,4)); //variazione spessore di TUTTO il fiocco
      let size = random(0.9, 1.1); // variazione dimensione di OGNI fiocco
      scale(size);
      drawFiocco();               // Disegna il fiocco in (0,0)
      pop();
      }
    }
  
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
  let alphaValue = random(100, 200); // !!! alpha è l'opacità di un colore
  let colore = color(random(colors));  // la funzione color è il metodo di p5.js che crea un oggetto colore
  colore.setAlpha(alphaValue);        // oggetto.metodo() --> ogni oggetto ha dei metodi che permettono di modificarlo --> .setAlpha permette id modificare la trasparenza
 
  stroke(colore);    //variazione colore su OGNI ramo
  line(0,-50,0,50);
  drawRamettiDoppi();
}

function drawFiocco() { //disegno il fiocco
  push();
  translate(75,75);
  let nGiri = floor(random(3, 5)); // genera un numero casuale tra 3 e 4
  for(let numero_rami=0; numero_rami<nGiri; numero_rami++){
    //let angle=random(0,PI)
    let a=random(-(PI/15),+(PI/15)); //variazione angolo rotazione ramo
    rotate((PI/nGiri)+a); // l'angolo di rotazione varia in base a nGiri
    drawRamo();
  }
  pop();
}