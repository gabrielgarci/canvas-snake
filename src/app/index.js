import '../public/styles/styles.css';

import { newGame, restartGame } from './game/game.js';
import draw from './canvas/canvas.js';
import { changeDirection } from './game/snake-animation.js';

newGame();
document.getElementById( 'restartBtn' ).onclick = restartGame;
document.getElementById( 'topBtn' ).onclick = () => changeDirection( 'top' );
document.getElementById( 'rightBtn' ).onclick = () => changeDirection( 'right' );
document.getElementById( 'bottomBtn' ).onclick = () => changeDirection( 'bottom' );
document.getElementById( 'leftBtn' ).onclick = () => changeDirection( 'left' );
document.body.onload = () => {
  draw();
  if ( 'ontouchstart' in window ) document.getElementById( 'controls' ).style.display = 'flex';
};
