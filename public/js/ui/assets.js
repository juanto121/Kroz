var Assets = (function(){
	function Assets(handleComplete){
		this.init(handleComplete);
	}
	var assets = Assets.prototype;
	assets.init = function(handleComplete){
		this.completed = handleComplete;
		this.manifest = [{src:"assets/gandor_sprite.png",id:"gandor"}];
		this.loader = new createjs.LoadQueue(false);
		this.startPreload();
	}
	assets.startPreload = function(){
		this.loader.on("complete", this.completed);
		this.loader.on("error", this.loadError);
		this.loader.loadManifest(this.manifest);
	}
	assets.loadError = function(event){
		console.log("Error loading Assets");
	}
	return Assets;
})();

