import { move, changeDirection } from './snake-animation.js';
import foodPiece from './food.js';

const snake = { };
let frameInterval;

const resetSnake = () => {
  snake.direction = 'right';
  snake.body = [
    { x: 15, y: 8, isFood: false },
    { x: 14, y: 8, isFood: false },
    { x: 13, y: 8, isFood: false },
    { x: 12, y: 8, isFood: false },
  ];
  snake.isAlive = true;
};

const endGame = () => {
  clearInterval( frameInterval );
  const snakeBodyCopy = [...snake.body];
  let blinkNumber = 0;
  const blinkInterval = setInterval( () => {
    snake.body = blinkNumber % 2 ? snakeBodyCopy : [];
    blinkNumber < 7 ? blinkNumber += 1 : clearInterval( blinkInterval );
  }, 175 );
};

const newGame = () => {
  resetSnake();
  foodPiece.replace( snake );
  frameInterval = setInterval( () => {
    snake.isAlive = move( snake, foodPiece );
    if ( !snake.isAlive ) endGame();
  }, 175 );

  window.onkeydown = ( key ) => changeDirection( key.keyCode );
};

export {
  newGame,
  snake,
  foodPiece,
};
