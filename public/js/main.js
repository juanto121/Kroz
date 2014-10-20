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
		this.hero_sprite = new createjs.Sprite(this.hero.data, "walk_down");
		this.hero_sprite.framerate = 8;
		this.hero_sprite.setTransform(0,0,1.5,1.5);
		this.stage.addChild(this.hero_sprite);

		createjs.Ticker.timingMode = createjs.Ticker.RAF;
		createjs.Ticker.addEventListener("tick",this.tick.bind(this));
	}
	kroz.tick = function(event){
		this.stage.update(event);
	}
	return Kroz;
})();

window.onload = function(){
	kroz = new Kroz();
}