var Spaceship = function(image) {
	GameObject.call(this, image);
	this.size = { width: 48, height: 48 };
	this.speed = { x: 5, y: 5, reload: 500 };
	this.fire = false;
	this.rockets = [];
	this.rocket_ready = true;
};

Spaceship.prototype = new GameObject();
Spaceship.prototype.constructor = Spaceship;

Spaceship.prototype.shoot = function() {
	var that = this;
	that.rocket_ready = false;

	var rocket = new Rocket();
	rocket.init(that.canvas, that.ctx);
	rocket.position.left = (that.position.left + (that.size.width / 2) - 1);
	rocket.position.top = that.position.top - 15;
	rocket.speed.y = that.speed.y + 3;

	that.rockets.push(rocket);

	setTimeout(function() { that.rocket_ready = true; }, that.speed.reload);
};

Spaceship.prototype.afterDraw = function() {
	for (var i = 0; i < this.rockets.length; i++) {
		this.rockets[i].draw();
	}
};