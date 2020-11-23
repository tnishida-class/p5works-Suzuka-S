// テキスト「アニメーション」
let x, y, vx, vy, angle;
let s, t;
let m, n;
let grabbed;
let bc, tc;
let balls = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  reset();
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
  r = 30;
  angle = 0;
  s = width / 2;
  t = height / 4;
  m = 10;
  n = 10;
  bc = color(181, 4, 4);
  tc = color(255);
}

function reset(){
  x = width / 2;
  y = height / 2;
  grabbed = false;
  m = 10;
  n = 10;
  const b = { bx: mouseX, by: mouseY, size: 20 };
    balls.pop(b);
}

function draw(){
  background(105, 184, 95);
  // BLANK[2] (hint: 作った star 関数を使います)
  tree();
  noFill();
  rect(width / 2 - 40, height / 2, 80, 45);

  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(255);
    ellipse(b.bx, b.by, b.size);
  }


  balloon("Merry Xmas", m, n, bc, tc);
  if(keyIsDown(LEFT_ARROW)){ m -= 2; }
  if(keyIsDown(RIGHT_ARROW)){ m += 2; }
  if(keyIsDown(UP_ARROW)){ n -= 2; }
  if(keyIsDown(DOWN_ARROW)){ n += 2; }

  star(x, y, r, angle);
  if(!grabbed){
    x -= vx;
    y += vy;
    angle += TWO_PI / 50;
  }

    // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  else if(y < 0){ y = height; }

  if(m > width){ m = 0; }
  else if(m < 0){ m = width; }
  if(n > height){ n = 0; }
  else if(n < 0){ n = height; }
}

function tree(){
  push();
  for(let i = 0; i < 3; i++){
    let xrs = s + i * 30; //x座標、right、slope
    let yrs = t + i * 100; //y座標、right、slope
    let xls = s + i * (-30); //x座標、left、slope
    let xrf = s + (i +1) * 30; //x座標、right、flat
    let yrf = t + (i + 1) * 100; //y座標、right、flat
    let xlf = s + (i +1) * (-30); //x座標、left、flat
     line(xrs, yrs, xrs + 60, yrs + 100);
     line(xrf, yrf, xrf + 30, yrf);
     line(xls, yrs, xls - 60, yrs + 100);
     line(xlf, yrf, xlf - 30, yrf);
}
line(s - 90, t + 300, s + 90, t + 300);
fill(128, 74, 0);
rect(s - 30, t + 300, 60, 60);
pop();
}

function star(cx, cy, r, angle){
  push();
  fill(255, 242, 0);
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta + angle) * r;
    var y = cy + sin(theta + angle) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
  pop();
}

function balloon(t, m, n, bc, tc){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 6;
  fill(bc);
  rect(m, n, w + p * 2, h + p * 4);
  fill(tc);
  text(t, m + p, n + h + p);
}

function doubleClicked(){
  const b = { bx: mouseX, by: mouseY, size: 20 };
    balls.push(b);
}

function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 30;
}

function mouseDragged(){
  if(grabbed){
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased(){
  if(gragged){
    gragged = false;
    x = mouseX;
    y = mouseY;
  }
}

function keyPressed(){
  if(key == " "){ reset(); } // スペースキーを押したらリセット
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
