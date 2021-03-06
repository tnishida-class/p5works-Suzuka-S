// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  let bc = color(247, 167, 5);
  let tc = color(0);
  balloon("成人式・同窓会が開催されますように", 40, 60, bc, tc);
}

function balloon(t, x, y, bc, tc){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 6;
  fill(bc);
  noStroke();
  rect(x, y, w + p * 2, h + p * 4);
  triangle(x + w / 5, y + h + p * 4, x + w / 4, y + (h + p * 2) * 2 , x + w / 3, y + h + p * 4);
  fill(tc);
  text(t, x + p, y + h + p);
}
