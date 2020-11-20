// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

let tx1 = width / 3 + 50;
// let tx2;
// let tx3;
// let ty1;
// let ty2;
// let ty3;

function setup(){
  createCanvas(400, 400);
  count = 0;
  cycle = 100;
  size = 50;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  if(count < 40){size += 2;}
  else if(count > 40 && count < 50){size++;}
  else {size--;}
  size = constrain(size, 50, 101);
  ellipse(width / 2, height / 2, size);
}
