// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
  noFill();
  if(i<5){
    stroke(0, 0, 255)
  }
  else{
    stroke(255, 0, 0)
  }
  ellipse(50,50,5+i*10);
  // BLANK[1]
  }
}
