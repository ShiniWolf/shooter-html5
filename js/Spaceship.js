var Spaceship = function(image) {
	GameObject.call(this, image);
	this.size = { width: 48, height: 48 };
};

Spaceship.prototype = new GameObject();
Spaceship.prototype.constructor = Spaceship;