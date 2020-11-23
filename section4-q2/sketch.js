// テキスト「アニメーション」
let x, y, vx, vy, angle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
  r = 30;
  angle = 0;
}

function draw(){
  background(160, 192, 255);
  // BLANK[2] (hint: 作った star 関数を使います)
  star(x, y, r, angle);
  x -= vx;
  y += vy;
  angle += TWO_PI / 50;


  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta + angle) * r;
    var y = cy + sin(theta + angle) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function mouseClicked(){ //クリックしたら星が大きくなる
  r = 60;
}
function doubleClicked(){ //ダブルクリックしたら星の大きさが元に戻る
  r = 30;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
