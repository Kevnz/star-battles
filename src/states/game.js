module.exports = function(game) {

  var gameState = {};

  var player = require('../components/player')(game);
  gameState.create = function () {
  	player.init();
    //var logo = game.add.sprite(game.world.centerX, game.world.centerY + game.world.centerY/2, 'viper');
    //logo.anchor.setTo(0.5, 0.5);
  };
	gameState.update = function () {
		player.update();
	}
  return gameState;
};