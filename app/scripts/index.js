import { newGame } from './game.js';
import { draw } from './board.js';

newGame();
document.body.onload = draw();
