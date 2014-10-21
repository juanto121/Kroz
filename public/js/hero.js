var Hero = (function(){
	function Hero(assets){
		this.init(assets);
		this.initEvents();
	}

	var hero = Hero.prototype;
	hero.init = function(assets){
		this.x = 30;
		this.y = 30;
		this.direction_y = 0;
		this.direction_x = 0;
		this.velocity = 2;
		this.in_animation = false;
		this.loader = assets.loader;
		this.data = new createjs.SpriteSheet({
			"images": [this.loader.getResult("gandor")],
			"frames": [
				[0,0,30,32],
				[32,0,30,32],
				[63,0,30,32],

				[0,33,30,32],
				[32,33,30,32],
				[63,33,30,32],

				[0,65,30,32],
				[32,65,30,32],
				[63,65,30,32],

				[0,96,30,32],
				[32,96,30,32],
				[63,96,30,32],
			],
			"animations": {
				"walk_down": [0, 2],
				"walk_left":[3,5],
				"walk_right":[6,8],
				"walk_up":[9,11]
			}
		});
		this.hero_sprite = new createjs.Sprite(this.data, "walk_down");
		this.hero_sprite.framerate = 8;
		this.hero_sprite.setTransform(this.x,this.y,1,1);
	}

	hero.initEvents = function(){
		$(window).keydown(this.changeDirection.bind(this));
		$(window).keyup(this.stayIdle.bind(this));
	}
	hero.stayIdle = function(event){
		this.direction_y = 0;
		this.direction_x = 0;
		this.hero_sprite.gotoAndStop("walk_down");
		this.in_animation = false;
	}
	hero.changeDirection = function(event){
		console.log(event.keyCode)

		if(!this.in_animation){
			this.in_animation = true;
			switch(event.keyCode){
				case 87:
					this.direction_y = -this.velocity;
					this.direction_x = 0;
					this.hero_sprite.gotoAndPlay("walk_up");
					break;
				case 65:  
					this.direction_y = 0;
					this.direction_x = -this.velocity;
					this.hero_sprite.gotoAndPlay("walk_left");
					break;
				case 83:
					this.direction_y = this.velocity;
					this.direction_x = 0;
					this.hero_sprite.gotoAndPlay("walk_down");
					break;
				case 68:
					this.direction_y = 0;
					this.direction_x = this.velocity;
					this.hero_sprite.gotoAndPlay("walk_right");
					break;
			}
		}
	
	}

	hero.move = function(event){
		this.hero_sprite.x = this.hero_sprite.x + this.direction_x;
		this.hero_sprite.y = this.hero_sprite.y + this.direction_y;
	}
	return Hero;
})();
