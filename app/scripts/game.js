import { Snake, boardSize, directionInfo } from './utils.js';

// Create snake and a foodPiece
const snake = new Snake();

const foodPiece = { };

const moveFood = () => {
  foodPiece.x = Math.floor(Math.random() * boardSize.x);
  foodPiece.y = Math.floor(Math.random() * boardSize.y);
  if (
    snake.body.some((bodyPiece) => (bodyPiece.x === foodPiece.x && bodyPiece.y === foodPiece.y))
    || (foodPiece.x === 0 || foodPiece.y === 0)) {
    moveFood();
  }
};

// Snake functionality
let futureDirection;

const turnSnake = (newDirection) => {
  if (newDirection !== directionInfo[snake.direction].oposite) {
    snake.direction = newDirection;
  }
};

// Move to the oposite side of the board if snake is in the border
const checkBorders = (position) => {
  const correctedPosition = {};
  Object.keys(boardSize).forEach((axis) => {
    if (position[axis] === boardSize[axis]) {
      correctedPosition[axis] = 1;
    } else if (position[axis] === 0) {
      correctedPosition[axis] = boardSize[axis] - 1;
    } else {
      correctedPosition[axis] = position[axis];
    }
  });
  return correctedPosition;
};

const move = () => {
  const possiblePosition = {
    x: snake.body[0].x + directionInfo[snake.direction].vector[0],
    y: snake.body[0].y + directionInfo[snake.direction].vector[1],
  };

  const newPosition = checkBorders(possiblePosition);
  newPosition.isFood = false;

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
  }

  if (futureDirection && futureDirection !== snake.direction) {
    turnSnake(futureDirection);
  }
};

const newGame = () => {
  moveFood();
  setInterval(() => move(), 175);

  window.onkeydown = (key) => {
    switch (key.keyCode) {
      case 37:
        futureDirection = 'left';
        break;

      case 38:
        futureDirection = 'top';
        break;

      case 39:
        futureDirection = 'right';
        break;

      case 40:
        futureDirection = 'bottom';
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
