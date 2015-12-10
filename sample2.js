/*
 * runstant
 */

phina.globalize();

var ASSETS = {
  image: {
//    'hiyoko': 'https://rawgit.com/minimo/phina.js_advent_20151212/master/hiyoco_nomal_full.png',
    'hiyoko': 'hiyoco_nomal_full.png',
  },
  spritesheet: {
//    'hiyoko_ss': 'https://rawgit.com/minimo/phina.js_advent_20151212/master/hiyoko_short.ss',
    'hiyoko_ss': 'hiyoko_short.ss',
  },
};

phina.define('MainScene', {
  superClass: 'CanvasScene',
  
  init: function() {
    this.superInit();

    //ひよこスプライト    
    this.hiyoko = Sprite('hiyoko', 32, 32)
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
      .setScale(3);

    //SpriteSheetを定義して、ひよこスプライトにアタッチ
    var ss = FrameAnimation('hiyoko_ss');
    ss.attachTo(this.hiyoko);

    //アニメーションを再生する
    ss.gotoAndPlay('start');

    this.age = 0;
  },
  update: function() {
    
  }
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
    assets: ASSETS,
  });
  app.run();
});
