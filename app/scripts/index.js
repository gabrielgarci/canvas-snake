import * as game from './game.js';
import * as board from './board.js';

game.newGame();
document.body.onload = board.draw();
