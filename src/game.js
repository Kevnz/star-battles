require('Phaser'); //assume it puts it in global scope



var properties = require('./properties');
var game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.AUTO, 'game');
var boot = require('./states/boot');
var preloader = require('./states/preloader');
var mainGame = require('./states/game');
game.state.add('boot', boot(game));
game.state.add('preloader', preloader(game));
game.state.add('game', mainGame(game));

game.state.start('boot');
