var Hero = (function(){
	function Hero(assets){
		this.init(assets);
	}
	var hero = Hero.prototype;
	hero.init = function(assets){
		this.loader = assets.loader;
		
		/*
		frames:
			walk down: 0-2
			walk left: 3-5
			walk rigth: 6-8
			walk up: 9-11
		*/

		this.data = new createjs.SpriteSheet({
			"images": [this.loader.getResult("gandor")],
			"frames": [
				[0,0,30,32],
				[32,0,30,32],
				[63,0,30,32],

				[0,33,30,32],
				[32,33,30,32],
				[63,33,30,32],

				[0,64,30,32],
				[32,64,30,32],
				[63,64,30,32],

				[0,95,30,32],
				[32,95,30,32],
				[63,95,30,32],
			],
			"animations": {
				"walk_down": [0, 2],
				"walk_left":[3,5],
				"walk_right":[6,8],
				"walk_up":[9,11]
			}
		});



		this.x = 0;
		this.y = 0;
	}

	return Hero;
})();
