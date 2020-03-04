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
var animalList = [1,2,3,4,5,6,7,8];
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
let robotoFont;
let pandaSound;
let polarSound;
let elephantSound;
let koalaSound;
let porcupineSound;
let penguinSound;
let camelSound;
let raccoonSound;
let tanukiFont;


// preload() will execture before setup()
function preload() {
  imgElephant = loadImage('assets/elephant.png');
  imgPolarBear = loadImage('assets/polarbear.png');
  imgKoala = loadImage('assets/koala.png');
  imgRaccoon = loadImage('assets/raccoon.png');
  imgPanda = loadImage('assets/panda.png');
  imgCamel = loadImage('assets/camel.png');
  imgPorcupine = loadImage ('assets/porcupine.png');
  imgPenguin = loadImage('assets/penguin.png');
  tokyoFont = loadFont('assets/trendsetter-Regular.ttf');
  latoFont = loadFont('assets/Lato-Regular.ttf');
  robotoFont = loadFont('assets/roboto.ttf');
  tanukiFont = loadFont('assets/TanukiMagic.ttf');
  pandaSound = loadSound('assets/panda.wav');
  polarSound = loadSound('assets/polarbear.wav');
  elephantSound = loadSound('assets/elephant.wav');
  koalaSound = loadSound('assets/koala.mp3');
  porcupineSound = loadSound('assets/porcupine.wav');
  penguinSound = loadSound('assets/penguin.mp3');
  camelSound = loadSound('assets/camel.mp3');
  raccoonSound = loadSound('assets/raccoon.wav');
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
  textSize(70);
  textFont(tokyoFont);
  text('Welcome to\nFluffy Farm', width/3, height/3);

  fill(0);
  textSize(15);
  textFont(tanukiFont);
  text('PRESS SPACE BAR TO CONTINUE', 300, 400);
}

function drawElephant() {
  background(255, 207, 228);
  image(imgElephant, 230, 400, 400, 364);

  menuList();
  clickOnMe();

  fill(0);
  textSize(70);
  textFont(tokyoFont);
  text('Asian Elephant', 380, 80);

  fill(0);
  textSize(17);
  textFont(tanukiFont);
  text('Habitat: India and Southeast Asia\n\nLifespan: 48 years\n\nColor: Gray\n\nFood: Grasses, leaves, roots, and bushes\n\nConservation status: Endangered\n\nFun fact: Asian elephants can tear down \ntrees or pick up a blade of grass with \ntheir trunks.', 450, 150);
}

function drawPolarBear() {
  background(189, 253, 255);
  image(imgPolarBear, 230, 330, 450, 464);

  menuList();
  clickOnMe();

  fill(0);
  textSize(70);
  textFont(tokyoFont);
  text('Polar Bear', 380, 80);

  fill(0);
  textSize(17);
  textFont(tanukiFont);
  text('Habitat: The Arctic\n\nLifespan: 20-30 years\n\nColor: White\n\nFood: Seals\n\nConservation status: Vulnerable\n\nFun fact: Polar bears have black skin\nand although their fur appears white, \nit is actually transparent.', 450, 150);
}

function drawKoala() {
  background(202, 255, 194);
  image(imgKoala, 200, 300, 480, 613);

  menuList();
  clickOnMe();

  fill(0);
  textSize(70);
  textFont(tokyoFont);
  text('Koala Bear', 380, 80);

  fill(0);
  textSize(17);
  textFont(tanukiFont);
  text('Habitat: Australia\n\nLifespan: 13-18 years\n\nColor: Brown\n\nFood: Eucalyptus leaves\n\nConservation status: Endangered\n\nFun fact: A baby koala is refferred to \nas a joey and is hairless, blind, and \nearless.', 450, 150);
}

function drawRaccoon () {
  background(221, 255, 199);
  image(imgRaccoon, 240, 400, 480, 308);

  menuList();
  clickOnMe();

  fill(0);
  textSize(70);
  textFont(tokyoFont);
  text('Raccoon', 380, 80);

  fill(0);
  textSize(17);
  textFont(tanukiFont);
  text('Habitat: Forests\n\nLifespan: 2-3 years\n\nColor: Brown\n\nFood: Berries, fruits, nuts, grains, \nand vegetables\n\nConservation status: Least concern\n\nFun fact: Raccoons can make over fifty \ndifferent sounds to communicate!', 450, 150);
}

function drawPanda () {
  background(204, 255, 214);
  image(imgPanda, 250, 380, 480, 446);

  menuList();
  clickOnMe();

  fill(0);
  textSize(70);
  textFont(tokyoFont);
  text('Giant Panda', 380, 80);

  fill(0);
  textSize(17);
  textFont(tanukiFont);
  text('Habitat: China\n\nLifespan: 20 years\n\nColor: Black and White\n\nFood: Bamboo\n\nConservation status: Vulnerable\n\nFun fact: A panda can poop 28 Kilos \nper day!', 450, 150);
}

function drawCamel () {
  background(255, 221, 186);
  image(imgCamel, 220, 300, 460, 524);

  menuList();
  clickOnMe();

  fill(0);
  textSize(70);
  textFont(tokyoFont);
  text('Camel', 380, 80);

  fill(0);
  textSize(17);
  textFont(tanukiFont);
  text('Habitat: Deserts\n\nLifespan: 40 years\n\nColor: Light brown\n\nFood:  Grass, grains, wheat, and oats\n\nConservation status: Endangered\n\nFun fact: Camels’ humps are used to \nstore fat not water.', 450, 150);
}

function drawPorcupine () {
  background(245, 219, 255);
  image(imgPorcupine, 240, 400, 480, 308);

  menuList();
  clickOnMe();


  fill(0);
  textSize(70);
  textFont(tokyoFont);
  text('Porcupine', 380, 80);

  fill(0);
  textSize(17);
  textFont(tanukiFont);
  text('Habitat: Asia, Southern Europe, \nAfrica, and North and South America\n\nLifespan: 5-6 years\n\nColor: Brown, gray, and white\n\nFood: Nuts, seeds, fruits, and leaves\n\nConservation status: Least concern\n\nFun fact: Their front teeth never stop \ngrowing!', 450, 150);
}

function drawPenguin () {
  background(189, 253, 255);
  image(imgPenguin, 200, 350, 550, 413);

  menuList();
  clickOnMe();

  fill(0);
  textSize(70);
  textFont(tokyoFont);
  text('Emperor Penguin', 380, 80);

  fill(0);
  textSize(17);
  textFont(tanukiFont);
  text('Habitat: The Antarctic\n\nLifespan: 20 years\n\nColor: Black and white \nwith a yellow patch\n\nFood: Fish and krill\n\nConservation status: Near threatened\n\nFun fact: The emperor penguin is the \nlargest of 17 species of penguin at \n1.15 m (45 in.) tall.', 450, 150);
}

//menu
function menuList() {
  noStroke();
  fill(255,255,255,140);
  rect(500,455,280,110);

  fill(0);
  textSize(15);
  textFont(tanukiFont);
  text('PRESS 1 TO 8 TO CHOOSE AN ANIMAL:',525,480);
  text('1 - Polar Bear\n2 - Koala Bear\n3 - Panda\n4 - Penguin',530,500);
  text('5 - Elephant\n6 - Raccoon\n7 - Penguin\n8 - Camel',660,500);
}

//click on me
function clickOnMe() {
  noStroke();
  fill(255,255,255,140);
  ellipse(280,80,100,100);

  fill(86, 168, 95);
  textSize(15);
  textFont(tanukiFont);
  text('CLICK ON \nMY FACE!',250,80);
}

function keyPressed() {
  if(key == ' '){
    state = random(animalList);
  }
  if(key == 'h'){
    state = stateLandingPage;
  }

  if(key == '1'){
    state = statePolarBear;
  }

  if(key == '2'){
    state = stateKoala;
  }

  if(key == '3'){
    state = statePanda;
  }

  if(key == '4'){
    state = statePorcupine;
  }

  if(key == '5'){
    state = stateElephant;
  }

  if(key == '6'){
    state = stateRaccoon;
  }

  if(key == '7'){
    state = statePenguin;
  }

  if(key == '8'){
    state = stateCamel;
  } 

}

// elephant face
elephantLeft = 80;
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

//penguin face
penguinLeft = 70;
penguinWidth = 150;
penguinTop = 150;
penguinHeight = 150;

//camel face
camelLeft = 40;
camelWidth = 150;
camelTop = 50;
camelHeight = 150;

//raccoon face
raccoonLeft = 30;
raccoonWidth = 150;
raccoonTop = 275;
raccoonHeight = 150;

function drawRects() {
  noFill();
  noStroke();

 /* stroke(0);
  rect(raccoonLeft, raccoonTop, raccoonWidth, raccoonHeight);*/
}

//play sound when click on animals face
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
  else if( isMouseInRect(penguinLeft,penguinTop,penguinWidth,penguinHeight) && state == statePenguin )
    penguinSound.play();
  else if( isMouseInRect(camelLeft,camelTop,camelWidth,camelHeight) && state == stateCamel )
    camelSound.play();
  else if( isMouseInRect(raccoonLeft,raccoonTop,raccoonWidth,raccoonHeight) && state == stateRaccoon )
    raccoonSound.play();
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