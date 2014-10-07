var Menu = function(image) {
	GameObject.call(this, image);

	this.size = { width: 500, height: 100 };
};

Menu.prototype = new GameObject();
Menu.prototype.constructor = Menu;