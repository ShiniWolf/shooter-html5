var GameLoader = function() {
	this.images_loaded = 0;
	this.images = [];
}

GameLoader.prototype.preload = function(images, callback) {
	var that = this;
	for (var i = 0; i < images.length; i++) {
		that.images[i] = new Image();
		that.images[i].src = '../images/'+ images[i];
		that.images[i].onload = that.imageLoaded(callback);
		that.images[i].onerror = that.imageLoaded(callback);
	};
};

GameLoader.prototype.imageLoaded = function(callback) {
	var that = this;
	that.images_loaded++;
	if(that.images_loaded == that.images.length) {
		if(typeof(callback) == 'function') {
			callback(that.images);
		}
	}
};