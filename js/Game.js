// generic way to set animation up
window.requestAnimFrame = (function(callback){
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback){
		window.setTimeout(callback, 1000 / 60);
	};
})();

var Game = function(container, width, height) {
	this.container = container;
	this.canvas = this.container.get(0);
	this.ctx = this.canvas.getContext('2d');
	this.game_started = false;
	this.objects = [];
	this.gameloader = new GameLoader();
}

Game.prototype.preload = function(images, callback) {
	this.gameloader.preload(images, callback);
};

Game.prototype.initEvent = function(options) {
	var that = this;
	var settings = {
		onGameStart: function() {}
	};
	settings = $.extend(true, settings, options);

	$(document).on('keydown', function(event) {
		if(event.keyCode == 13 && that.game_started == false) {
			settings.onGameStart();
			that.game_started = true;
			that.start();
		}
	});
};

Game.prototype.addObjects = function(objects) {
	for (var i = 0; i < objects.length; i++) {
		objects[i].init(this.canvas, this.ctx);
		this.objects.push(objects[i]);
	}
};

Game.prototype.start = function() {
	this.update();
};

Game.prototype.update = function() {
	var that = this;
	that.ctx.save();
	that.ctx.fillStyle = 'black';
	that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
	that.ctx.restore();

	for (var i = 0; i < that.objects.length; i++) {
		that.objects[i].draw();
	}

	requestAnimFrame(function() {
		that.update();
	});
};