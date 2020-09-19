import { newGame } from './game/game.js';
import draw from './canvas/canvas.js';

newGame();
document.body.onload = draw();
