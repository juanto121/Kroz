var Flower = (function(){
  
  function Flower(assets){
		this.init(assets);
	}

	var flower = Flower.prototype;
	flower.init = function(assets)
	{
		    this.loader = assets.loader;
     		this.data = new createjs.SpriteSheet({
			"images": [this.loader.getResult("flower")],
			"frames": [
				[0,0,24,24],
				[25,0,24,24]
			],
			"animations": {
				"bounce":[0,1]
			}
		});
		this.flower_sprite = new createjs.Sprite(this.data,"bounce");
		this.flower_sprite.framerate = 2;
		this.flower_sprite.setTransform(300,121,0.5,0.5);
	}

	return Flower;
})();




		
		
		