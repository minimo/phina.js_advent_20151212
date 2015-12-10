phina.globalize();

var ASSETS = {
  image: {
    'hiyoko': 'hiyoco_nomal_full.png',
  },
};

phina.define('MainScene', {
  superClass: 'CanvasScene',
  
  init: function() {
    this.superInit();
    
    this.hiyoko = Sprite('hiyoko', 32, 32)
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
      .setScale(8);
    //frameIndexで何コマ目を表示するかを指定
　  this.hiyoko.frameIndex = 0;

    this.age = 0;
  },
  update: function() {
    if (this.age % 5 === 0) {
      //frameIndexに１加算して、次のコマを表示させる
      this.hiyoko.frameIndex++;
      if (this.hiyoko.frameIndex>3) this.hiyoko.frameIndex = 0;
    }
    this.age++;
  }
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
    assets: ASSETS,
  });
  app.run();
});
