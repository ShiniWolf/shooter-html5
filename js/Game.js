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
			that.game_started = true;
			settings.onGameStart();
		}
	});
};