function Snake() {
  // コンストラクタ（初期値）（初期位置と初期速度）
  this.x = 0;
  this.y = 0;
  this.xspeed = 0.5;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function (pos) {
    var d = dist(this.x, this.y, pos.x, pos.y); // 食べ物とスネークの距離
    if (d < 25) {
      this.total++;
      return true;
    } else {
      return false;
    }
  };

  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  this.death = function () {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y); // スネークの先頭と体の距離
      if (d < 1) {
        alert("starting over!");
        this.total = 0;
        this.tail = [];
      }
    }
  };
  this.clearedGame = function () {
    if (this.tail.length >= 10) {
      return true;
    } else {
      return false;
    }
  };

  // コンストラクタの値つまり初期位置をスピードに基づいて更新する関数
  this.update = function () {
    if (this.total === this.tail.length) {
      // 何も食べてない時全て左にシフト
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1]; // tail[0]は上書きされる
      }
    }
    // total が一個増えたら（つまり蛇が餌を食べたら）、配列は一個伸びて、そこに現在地が追加される
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    //   スネークの動ける範囲を指定
    this.x = constrain(this.x, scl, width - scl);
    this.y = constrain(this.y, scl, height - scl);
  };

  this.show = function () {
    fill("rgb(0,255,0)");
    for (var i = 0; i < this.tail.length; i++) {
      ellipse(this.tail[i].x, this.tail[i].y, scl + 20);
    }
    ellipse(this.x, this.y, scl + 20);
  };
}
