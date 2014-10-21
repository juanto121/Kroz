var Kroz = (function(){
	function Kroz(){
		this.init();
	}
	var kroz = Kroz.prototype;
	kroz.init = function(){
		this.assets = new Assets(this.loadComplete.bind(this));
		this.hero = null;
		this.canvas = document.getElementById("canvas");
		this.stage = new createjs.Stage(canvas);
	}
	kroz.loadComplete = function(){
		console.log("done main.");
		this.hero = new Hero(this.assets);

		var flower_sprite = new createjs.SpriteSheet({	"images" : [this.assets.loader.getResult("flower")],
																	"frames" : [[0,0,24,24],[25,0,24,24]],
																	"animations":{"bounce":[0,1]}
																	},"bounce");
		flower_sprite.framerate = 2;
		var flower = new createjs.Sprite(flower_sprite,"bounce");
		flower.setTransform(300,121,0.5,0.5);

		this.stage.addChild(new createjs.Bitmap(this.assets.loader.getResult("grass")),
							new createjs.Bitmap(this.assets.loader.getResult("sign")).setTransform(500,400,0.7,0.7),
							flower,
							this.hero.hero_sprite);

		this.stage.addChild(this.hero.hero_sprite);

		createjs.Ticker.timingMode = createjs.Ticker.RAF;
		createjs.Ticker.addEventListener("tick",this.tick.bind(this));
	}
	kroz.tick = function(event){
		this.hero.move();
		this.stage.update(event);

	}
	return Kroz;
})();

window.onload = function(){
	kroz = new Kroz();
}