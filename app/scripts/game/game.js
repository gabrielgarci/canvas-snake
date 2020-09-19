import { move, changeDirection } from './snake-animation.js';
import foodPiece from './food.js';

// Create snake and a foodPiece
const snake = { };
let isAlive = true;
let frameInterval;

const resetSnake = () => {
  snake.direction = 'right';
  snake.body = [
    { x: 15, y: 8, isFood: false },
    { x: 14, y: 8, isFood: false },
    { x: 13, y: 8, isFood: false },
    { x: 12, y: 8, isFood: false },
  ];
};

const endGame = () => {
  clearInterval( frameInterval );
};

const newGame = () => {
  resetSnake();
  foodPiece.replace( snake );
  frameInterval = setInterval( () => {
    isAlive = move( snake, foodPiece );
    if ( !isAlive ) endGame();
  }, 175 );

  window.onkeydown = ( key ) => changeDirection( key.keyCode );
};

export {
  newGame,
  snake,
  foodPiece,
};
