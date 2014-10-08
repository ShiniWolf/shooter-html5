var Rocket = function(image) {
	GameObject.call(this, image);
	this.size = { width: 2, height: 10 };
	this.speed = { x: 0, y: 8 };
	this.color = '#00f0ff';
};

Rocket.prototype = new GameObject();
Rocket.prototype.constructor = Rocket;

Rocket.prototype.draw = function() {
	var that = this;

	that.beforeUpdate();
	that.update();
	that.afterUpdate();

	that.beforeDraw();
	that.ctx.save();
	that.ctx.fillStyle = that.color;
	that.ctx.fillRect(that.position.left, that.position.top, that.size.width, that.size.height);
	that.ctx.restore();
	that.afterDraw();
};

Rocket.prototype.update = function() {
	this.position.left += this.speed.x;
	this.position.top -= this.speed.y;
};