var Hero = (function(){
	function Hero(assets){
		this.init(assets);
	}
	var hero = Hero.prototype;
	hero.init = function(assets){
		this.loader = assets.loader;
		
		/*
		frames:
			walk down: 0
			walk left: 1
			walk rigth: 2
			walk up: 3
		*/

		this.data = new createjs.SpriteSheet({
			"images": [this.loader.getResult("gandor")],
			"frames": [
				[0,0,30,32],
				[32,0,30,32],
				[63,0,30,32]
			],
			"animations": {"run": [0, 2]}
		});



		this.x = 0;
		this.y = 0;
	}

	return Hero;
})();
