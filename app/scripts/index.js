import * as game from './game.js';
import * as board from './board.js';

game.newGame();
// board.draw();
document.body.onload = board.draw(game.snake, game.foodPiece);
