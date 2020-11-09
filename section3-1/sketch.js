// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background(0, 54, 217);
  noStroke();
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 150 + cos(theta) * 70;
    let y = 100 + sin(theta) * 70;
    star(x, y, 10);
  }
}
function star(cx, cy, r){
  fill(252, 202, 3);
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
