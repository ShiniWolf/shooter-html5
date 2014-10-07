var GameLoader = function() {
	this.images_loaded = 0;
	this.images = [];
	this.new_images = [];
}

GameLoader.prototype.preload = function(images, callback) {
	var that = this;
	that.images = images;
	for (var i = 0; i < images.length; i++) {
		that.new_images[i] = new Image();
		that.new_images[i].src = '../images/'+ images[i];
		that.new_images[i].onload = function() { that.imageLoaded(callback); };
		that.new_images[i].onerror = function() { that.imageLoaded(callback); };
	}
};

GameLoader.prototype.imageLoaded = function(callback) {
	var that = this;
	that.images_loaded++;
	if(that.images_loaded == that.images.length) {
		if(typeof(callback) == 'function') {
			callback(that.new_images);
		}
	}
};