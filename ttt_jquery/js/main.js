const View = require('./ttt-view.js');
const Game = require('./solution/game.js');

$( () => {
  // Your code here
  const game = new Game();
  const view = new View(game, $('.ttt'));

  view.bindEvents();
});
