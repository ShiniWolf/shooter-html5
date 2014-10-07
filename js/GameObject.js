var GameObject = function(image) {
	this.position = { top: 0, left: 0};
	this.size = { width: 0, height: 0};
	this.image = image;
};

GameObject.prototype.init = function(canvas, ctx) {
	this.canvas = canvas;
	this.ctx = ctx;
};

GameObject.prototype.draw = function() {
	var that = this;
	that.update();
	that.ctx.drawImage(that.image, that.position.left, that.position.top, that.size.width, that.size.height);
};

GameObject.prototype.update = function() {};