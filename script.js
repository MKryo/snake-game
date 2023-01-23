var s;
var scl = 10;
var food = 0;

function setup() {
  createCanvas(700, 500);
  s = new Snake();
  pickLocation();
}

// 再配置関数
function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

// チート: クリックすると体が伸びる
function mousePressed() {
  s.total++;
}

function draw() {
  background(51);
  s.death();
  s.update();
  s.show();
  if (s.eat(food)) {
    pickLocation();
  }
  
  if (s.clearedGame()){
    alert("Cleared The Game!!!");
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl + 5, scl + 5);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -0.5);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 0.5);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(0.5, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-0.5, 0);
  }
}
