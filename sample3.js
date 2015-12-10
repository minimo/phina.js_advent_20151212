/*
 * runstant
 */

phina.globalize();

var ASSETS = {
  image: {
    'hiyoko': 'hiyoco_nomal_full.png',
  },
  spritesheet: {
    'hiyoko_ss': 'hiyoko.ss',
  },
};

phina.define('MainScene', {
  superClass: 'CanvasScene',
  
  init: function() {
    this.superInit();

    //ひよこスプライト    
    this.hiyoko = Hiyoko()
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center());

    this.age = 0;
  },
  update: function() {
  }
});

phina.define('Hiyoko', {
  superClass: 'Sprite',
  init: function() {
    this.superInit('hiyoko', 32, 32);
    this.setScale(3);

    this.ss = FrameAnimation('hiyoko_ss');
    this.ss.attachTo(this);
    this.ss.gotoAndPlay('stop');

    this.animationName = 'stop';

    this.jump = false;    
  },
  update: function(app) {
    var kb = app.keyboard;
    if (kb.getKey('z')) {
        this.jump = true;
        this.tweener.clear().to({y: 320}, wait, 'easeOutSine');
    }
  },
});

phina.define('Item', {
  superClass: 'Sprite',
  init: function(wait) {
    this.superInit('Item', 32, 32);
    this.frameIndex = Math.randint(0, 40);
    this.tweener.clear().to({y: 320}, wait, 'easeOutSine');
  },
  update: function() {
  },
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
    assets: ASSETS,
  });
  app.run();
});
