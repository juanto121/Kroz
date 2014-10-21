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
		
		this.stage.addChild(new createjs.Bitmap(this.assets.loader.getResult("grass")),
							new createjs.Bitmap(this.assets.loader.getResult("sign")),
							this.hero.hero_sprite);

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