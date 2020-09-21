import '../public/styles/styles.css';

import { newGame, restartGame } from './game/game.js';
import draw from './canvas/canvas.js';

newGame();
document.getElementById( 'restartBtn' ).onclick = restartGame;
document.body.onload = draw();
