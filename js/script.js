$(document).ready(function() {
	var images = ['spaceship.png', 'enemy.png', 'fighter.png', 'bg_menu.png'];
	var game = new Game($('#canvas'), 500, 700);

	game.preload(images, function(imgs) {
		$('#settings').text('Appuyer sur Entrée pour commencer');

		// Create object menu
		var menu = new Menu(imgs[3]);
		menu.position.top = game.canvas.height - menu.size.height;

		// Create object player
		var player = new Player(imgs[0]);
		player.position.left = (game.canvas.width / 2) - (player.size.width / 2);
		player.position.top = game.canvas.height - menu.size.height - player.size.height;
		player.area.max_x = game.canvas.width - player.size.width;
		player.area.max_y = game.canvas.height - menu.size.height - player.size.height;

		menu.afterDraw = function() {
			var position_life = {
				top: this.position.top + 62,
				left: this.position.left + 115
			};

			this.ctx.save();
			// Draw player's life
			for (var i = 0; i < player.power; i++) {
				if(i == 0) this.ctx.fillStyle = 'red';
				else if(i == 1) this.ctx.fillStyle = 'orange';
				else this.ctx.fillStyle = 'green';

				this.ctx.fillRect(position_life.left, position_life.top, 10, 25);
				position_life.left += 20;
			}

			// Write player's score
			this.ctx.font = '22pt Tahoma, Arial';
			this.ctx.fillStyle = 'white';
			this.ctx.fillText(player.score, this.position.left + 115, this.position.top + 50);

			this.ctx.restore();
		};

		// Add objects to game
		game.addObjects([menu, player]);
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