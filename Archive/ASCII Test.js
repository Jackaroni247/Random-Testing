let img;
///*
const letters = [
  "Ñ",
  "@",
  "#",
  "W",
  "$",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  "?",
  "!",
  "a",
  "b",
  "c",
  ";",
  ":",
  "+",
  "=",
  "-",
  ",",
  ".",
  "_",
];
//*/

/*
const letters = [
  "$",
  "@",
  "B",
  "%",
  "8",
  "&",
  "W",
  "M",
  "#",
  "*",
  "o",
  "a",
  "h",
  "k",
  "b",
  "d",
  "p",
  "q",
  "w",
  "m",
  "Z",
  "O",
  "0",
  "Q",
  "L",
  "C",
  "J",
  "U",
  "Y",
  "X",
  "z",
  "c",
  "v",
  "u",
  "n",
  "x",
  "r",
  "j",
  "f",
  "t",
  "/",
  "\\",
  "|",
  "(",
  ")",
  "1",
  "{",
  "}",
  "[",
  "]",
  "?",
  "-",
  "_",
  "+",
  "~",
  "<",
  ">",
  "i",
  "!",
  "l",
  "I",
  ",",
  '"',
  ";",
  ":",
  "^",
  "`",
  "'",
  ".",
];
*/

/*
const letters = [" ",".",":","-","=","+","*","#","%","@"];
//*/
var density = 0;
var check = 1;
var colValue;
var charSize = 5;
var row = [];
let font;

function preload() {
  img = loadImage("Resources\\Tux.jpg");
}

function setup() {
  createCanvas(800, 800);
  textSize(charSize);
  textWidth(1);
  stroke(0);
}

function draw() {
  if (check) {
    clear();
    background(255);
    //image(img, 0, 0);

    for (var i = 0; i <= width; i += charSize) {
      for (var r = 0; r <= height; r += charSize) {
        density = 0;
        colValue = img.get(i, r);
        density = Math.round(
          ((colValue[0] + colValue[1] + colValue[2]) / 3 / 255) * letters.length
        );
        //stroke(colValue[0],colValue[1],colValue[2]);
        text(letters[density], i, r);
      }
    }
    check = 0;
  }
}
