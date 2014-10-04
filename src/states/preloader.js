module.exports = function(game) {

  var preloader = {};

  preloader.preload = function () {
    game.load.image('logo', 'assets/preloader.gif#grunt-cache-bust');
    game.load.image('viper', 'assets/viper_mk2.png');
    game.load.image('viper_mk7', 'assets/viper_mk7.png');
    game.load.image('raider', 'assets/raider.png');
    game.load.image('alienblaster', 'assets/alienblaster.png');
    game.load.image('alienblaster_blue', 'assets/alienblaster_blue.png');
    game.load.image('alienblaster_green', 'assets/alienblaster_green.png');
    game.load.image('alienblaster_red', 'assets/alienblaster_red.png');
    game.load.image('starfighter', 'assets/starfighter.png');
  };

  preloader.create = function () {
    game.state.start('game');
  };

  return preloader;
};