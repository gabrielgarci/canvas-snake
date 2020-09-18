// Create board settings and direction dictionary
const boardSize = {
  x: 30,
  y: 15,
};

const directionInfo = {
  right: {
    oposite: 'left',
    vector: [1, 0],
  },
  left: {
    oposite: 'right',
    vector: [-1, 0],
  },
  top: {
    oposite: 'bottom',
    vector: [0, -1],
  },
  bottom: {
    oposite: 'top',
    vector: [0, 1],
  },
};

// Create snake and a foodPiece
const snake = { };

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
const changeDirection = (newDirection) => {
  if (newDirection !== directionInfo[snake.direction].oposite) {
    snake.direction = newDirection;
  }
};

const move = () => {
  const newPosition = {
    x: snake.body[0].x + directionInfo[snake.direction].vector[0],
    y: snake.body[0].y + directionInfo[snake.direction].vector[1],
    isFood: false,
  };

  if (newPosition.x === boardSize.x) {
    newPosition.x = 0;
  } else if (newPosition.x === 0) {
    newPosition.x = boardSize.x;
  }

  if (newPosition.y === boardSize.y) {
    newPosition.y = 0;
  } else if (newPosition.y === 0) {
    newPosition.y = boardSize.y;
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
  snake.direction = 'right';
  snake.body = [
    { x: 15, y: 8, isFood: false },
    { x: 14, y: 8, isFood: false },
    { x: 13, y: 8, isFood: false },
    { x: 12, y: 8, isFood: false },
  ];
  moveFood();
  setInterval(() => move(), 200);
  window.onkeydown = (key) => {
    switch (key.keyCode) {
      case 37:
        changeDirection('left');
        break;
      case 38:
        changeDirection('top');
        break;
      case 39:
        changeDirection('right');
        break;
      case 40:
        changeDirection('bottom');
        break;
      default:
        break;
    }
  };
};

export {
  boardSize,
  newGame,
  snake,
  foodPiece,
  changeDirection,
};
