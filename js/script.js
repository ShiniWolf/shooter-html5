$(document).ready(function() {
	var images = ['spaceship.png', 'enemy.png', 'fighter.png'];
	var game = new Game($('#canvas'), 500, 700);
	game.preload(images, function() {
		$('#settings').text('Appuyer sur Entrée pour commencer');
		game.initEvent({
			onGameStart: function() { 
				$('#game_settings').hide();
				$('#canvas_container #background').addClass('animate');
			}
		});
	});
});