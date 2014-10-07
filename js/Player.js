var Player = function(image) {
	Spaceship.call(this, image);
	this.size = { width: 48, height: 48 };
	this.direction = { left: false, right: false, top: false, bottom: false };
	this.area = { min_x: 0, max_x: 0, min_y: 0, max_y: 0 };
	this.speed = { x: 5, y: 5 };
	this.score = 0;
	this.power = 1;

	this.initEvent();
};

Player.prototype = new Spaceship();
Player.prototype.constructor = Player;

Player.prototype.initEvent = function() {
	var that = this;
	$(document).on('keydown', function(event) {
		switch(event.keyCode) {
			case 37:
				that.direction.left = true;
				break;
			case 38:
				that.direction.top = true;
				break;
			case 39:
				that.direction.right = true;
				break;
			case 40:
				that.direction.bottom = true;
				break;
		}
	});

	$(document).on('keyup', function(event) {
		switch(event.keyCode) {
			case 37:
				that.direction.left = false;
				break;
			case 38:
				that.direction.top = false;
				break;
			case 39:
				that.direction.right = false;
				break;
			case 40:
				that.direction.bottom = false;
				break;
		}
	});
};

Player.prototype.update = function() {
	if(this.direction.left && this.position.left > this.area.min_x)
		this.position.left -= this.speed.x;
	if(this.direction.right && this.position.left < this.area.max_x)
		this.position.left += this.speed.x;
	if(this.direction.top && this.position.top > this.area.min_y)
		this.position.top -= this.speed.y;
	if(this.direction.bottom && this.position.top < this.area.max_y)
		this.position.top += this.speed.y;
};