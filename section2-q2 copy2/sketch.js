// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2== 1 && j % 2 == 1){
        fill(255);
      }
      else if (i % 2 == 1 || j % 2 == 1){
        fill(204);
      }
      else{
        fill(255);
      }
      console.log(i,j);
      rect(size * i,size * j,size , size);  // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 1 && j % 2 == 1 ){
        fill(255);
      }
      else if((i % 2 == 1 || j % 2 == 1) && j < 3){
        fill(255,0,0);
      }
      else if((i % 2 == 1 || j % 2 == 1) && j > 4){
        fill(0);
      }
      else{
        noFill();
      }
      console.log(i, j);
      ellipse(size * i + size / 2, size * j + size / 2, size - 5);
    }
  }
}
