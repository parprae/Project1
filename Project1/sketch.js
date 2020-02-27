/*
  Fluffy Farm
  by Kara Ngamsopee

  Press space bar to learn more about animals.
  Click on the face to listen to the animal.
  Press H to go back to the home page.
*/

var state;
var stateLandingPage = 0;
var stateElephant = 1;
var statePolarBear = 2;
var stateKoala = 3;
var stateRaccoon = 4;
var statePanda = 5;
var stateCamel = 6;
var statePorcupine = 7;
var statePenguin = 8;
var animalList = [1,2,3,/*4*/,5,/*6*/,7,/*8*/];
let imgStatic;
let imgElephant;
let imgPolarBear;
let imgKoala;
let imgRaccoon;
let imgPanda;
let imgCamel;
let imgPorcupine;
let imgPenguin;
let tokyoFont;
let latoFont;
let pandaSound;
let polarSound;
let elephantSound;
let koalaSound;
let porcupineSound;


// preload() will execture before setup()
function preload() {
  imgElephant = loadImage('assets/elephant.png');
  imgPolarBear = loadImage('assets/polarbear.png');
  imgKoala = loadImage('assets/koala.png');
  /*imgRaccoon = loadImage('assets/image4.jpg');*/
  imgPanda = loadImage('assets/panda.png');
  /*imgCamel = loadImage('assets/image6.jpg');*/
  imgPorcupine = loadImage ('assets/porcupine.png');
  /*imgPorcupine = loadImage('assets/porcupine.jpg');*/
  tokyoFont = loadFont('assets/TokyoRegular.otf');
  latoFont = loadFont('assets/Lato-Regular.ttf');
  pandaSound = loadSound('assets/panda.wav');
  polarSound = loadSound('assets/polarbear.wav');
  elephantSound = loadSound('assets/elephant.wav');
  koalaSound = loadSound('assets/koala.mp3');
  porcupineSound = loadSound('assets/porcupine.wav');
}

function setup() {
  imageMode(CENTER);
  rectMode(CORNER);
  createCanvas(800, 580);
  state = stateLandingPage;
}

function draw() {
  if(state == stateLandingPage) {
    drawLandingPage();
  }
  else if(state == stateElephant) {
    drawElephant();
  }
  else if(state == statePolarBear) {
    drawPolarBear();
  }
  else if(state == stateKoala) {
    drawKoala();
  }
  else if(state == stateRaccoon) {
    drawRaccoon();
  }
  else if(state == statePanda) {
    drawPanda();
  }
  else if(state == stateCamel) {
    drawCamel();
  }
  else if(state == statePorcupine) {
    drawPorcupine();
  }
  else if(state == statePenguin) {
    drawPenguin();
  }

  drawRects();
}

function drawLandingPage() {
  background(255, 227, 240);

  fill(0);
  textSize(32);
  textFont(tokyoFont);
  text('Welcome to\nFluffy Farm!', width/3, height/2);

  fill(0);
  textSize(15);
  textFont(latoFont);
  text('Press space bar to learn more\nand click on the face to listen to its sound', 450, 500);
}

function drawElephant() {
  background(255, 207, 228);
  image(imgElephant, 250, 400, 480, 382);

  fill(0);
  textSize(32);
  textFont(tokyoFont);
  text('Asian Elephant', 420, 50);

  fill(0);
  textSize(15);
  textFont(latoFont);
  text('Habitat: India and Southeast Asia\n\nLifespan: 48 years\n\nColor: Gray', 450, 200);
}

function drawPolarBear() {
  background(207, 255, 212);
  image(imgPolarBear, 230, 330, 450, 464);

  /*rect(100,230,130,100);*/

  fill(0);
  textSize(32);
  textFont(tokyoFont);
  text('POLAR BEAR', 420, 50);

  fill(0);
  textSize(15);
  textFont(latoFont);
  text('Habitat: The Arctic\n\nLifespan: 20-30 years\n\nColor: White', 450, 200);
}

function drawKoala() {
  background(202, 255, 194);
  image(imgKoala, 200, 300, 480, 613);

  /*rect(100,330,130,100);*/

  fill(0);
  textSize(32);
  textFont(tokyoFont);
  text('KOALA BEAR', 420, 50);

  fill(0);
  textSize(15);
  textFont(latoFont);
  text('Habitat: Australia\n\nLifespan: 13-18 years\n\nColor: Brown', 450, 200);
}

function drawRaccoon () {
  background(221, 255, 199);

  fill(0);
  textSize(32);
  textFont(tokyoFont);
  text('RACCOON', 420, 50);
}

function drawPanda () {
  background(204, 255, 214);
  image(imgPanda, 250, 380, 480, 446);

  fill(0);
  textSize(32);
  textFont(tokyoFont);
  text('giant panda', 420, 50);

  fill(0);
  textSize(15);
  textFont(latoFont);
  text('Habitat: China\n\nLifespan: 20 years\n\nColor: Black and White', 450, 200);
}

function drawCamel () {
  background(255, 221, 186);

  fill(0);
  textSize(32);
  textFont(tokyoFont);
  text('camel', 420, 50);
}

function drawPorcupine () {
  background(245, 219, 255);
  image(imgPorcupine, 240, 400, 480, 308);

  fill(0);
  textSize(32);
  textFont(tokyoFont);
  text('Porcupine', 420, 50);

  fill(0);
  textSize(15);
  textFont(latoFont);
  text('Habitat: Asia, Southern Europe, \nAfrica, and North and South America\n\nLifespan: 5-6 years\n\nColor: Brown, Gray, and White', 450, 200);
}

function drawPenguin () {
  background(189, 253, 255);

  fill(0);
  textSize(32);
  textFont(tokyoFont);
  text('penguin', 420, 50);
}

function keyPressed() {
  if(key == ' '){
    state = random(animalList);
  }
  if(key == 'h'){
    state = stateLandingPage;
  }

  if(key == 'p'){
    state = statePolarBear;
  }

  if(key == 'k'){
    state = stateKoala;
  }

  if(key == 'd'){
    state = statePanda;
  }

  if(key == 'r'){
    state = statePorcupine;
  }

}

// elephant face
elephantLeft = 100;
elephantWidth = 200;
elephantTop = 200;
elephantHeight = 200;

// polar bear face
polarLeft = 100;
polarWidth = 200;
polarTop = 100;
polarHeight = 200;

//panda face
pandaLeft = 100;
pandaWidth = 200;
pandaTop = 200;
pandaHeight = 200;

//koala face
koalaLeft = 100;
koalaWidth = 200;
koalaTop = 100;
koalaHeight = 200;

//porcupine face
porcupineLeft = 50;
porcupineWidth = 200;
porcupineTop = 400;
porcupineHeight = 200;

function drawRects() {
  noFill();
  noStroke();
}

function mousePressed() {
  if( isMouseInRect(polarLeft, polarTop, polarWidth, polarHeight) && state == statePolarBear )
    polarSound.play();
  else if( isMouseInRect(elephantLeft,elephantTop,elephantWidth,elephantHeight) && state == stateElephant )
    elephantSound.play();
  else if( isMouseInRect(pandaLeft,pandaTop,pandaWidth,pandaHeight) && state == statePanda )
    pandaSound.play();
  else if( isMouseInRect(koalaLeft,koalaTop,koalaWidth,koalaHeight) && state == stateKoala )
    koalaSound.play();
  else if( isMouseInRect(porcupineLeft,porcupineTop,porcupineWidth,porcupineHeight) && state == statePorcupine )
    porcupineSound.play();
}

function isMouseInRect(rectL, rectT, rectW, rectH) {
  // check X first
  if( mouseX >= rectL && mouseX <= rectL + rectW ) {
    if( mouseY >= rectT && mouseY <= rectT + rectH ) {
      // must satisfy *both* conditions
      return true;
    }
  }

  return false;
}
