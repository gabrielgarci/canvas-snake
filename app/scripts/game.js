import * as utils from './utils.js';

// Create snake and a foodPiece
const snake = new utils.Snake();

const foodPiece = { };

const moveFood = () => {
  foodPiece.x = Math.floor(Math.random() * utils.boardSize.x);
  foodPiece.y = Math.floor(Math.random() * utils.boardSize.y);
  if (
    snake.body.some((bodyPiece) => (bodyPiece.x === foodPiece.x && bodyPiece.y === foodPiece.y))
    || (foodPiece.x === 0 || foodPiece.y === 0)) {
    moveFood();
  }
};

// Snake functionality
const turnSnake = (newDirection) => {
  if (newDirection !== utils.directionInfo[snake.direction].oposite) {
    snake.direction = newDirection;
  }
};

const move = () => {
  const newPosition = {
    x: snake.body[0].x + utils.directionInfo[snake.direction].vector[0],
    y: snake.body[0].y + utils.directionInfo[snake.direction].vector[1],
    isFood: false,
  };

  if (newPosition.x === utils.boardSize.x) {
    newPosition.x = 0;
  } else if (newPosition.x === 0) {
    newPosition.x = utils.boardSize.x;
  }

  if (newPosition.y === utils.boardSize.y) {
    newPosition.y = 0;
  } else if (newPosition.y === 0) {
    newPosition.y = utils.boardSize.y;
  }

  if (!snake.body.some((position) => position.x === newPosition.x && position.y === newPosition.y)) {
    if (newPosition.x === foodPiece.x && newPosition.y === foodPiece.y) {
      newPosition.isFood = true;
      moveFood();
    }

    if (!snake.body[snake.body.length - 1].isFood) {
      snake.body.splice(-1, 1);
    } else {
      snake.body[snake.body.length - 1].isFood = false;
    }

    snake.body.unshift(newPosition);

    return true;
  }

  return false;
};

const newGame = () => {
  moveFood();
  setInterval(() => move(), 200);

  window.onkeydown = (key) => {
    switch (key.keyCode) {
      case 37:
        turnSnake('left');
        break;
      case 38:
        turnSnake('top');
        break;
      case 39:
        turnSnake('right');
        break;
      case 40:
        turnSnake('bottom');
        break;
      default:
        break;
    }
  };
};

export {
  newGame,
  snake,
  foodPiece,
  turnSnake,
};
