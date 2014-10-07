$(document).ready(function() {
	var images = ['spaceship.png', 'enemy.png', 'fighter.png', 'bg_menu.png'];
	var game = new Game($('#canvas'), 500, 700);

	game.preload(images, function(imgs) {
		var menu = new Menu(imgs[3]);
		menu.position.top = game.canvas.height - menu.size.height;

		$('#settings').text('Appuyer sur Entrée pour commencer');
		game.addObjects([menu]);
		game.initEvent({
			onGameStart: function() { 
				$('#game_settings').hide();
				$('#canvas_container #background').addClass('animate');
			}
		});
	});
});

var debug = function(str) {
	console.log(str);
}