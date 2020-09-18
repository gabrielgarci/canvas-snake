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
    vector: [0, 1],
  },
  bottom: {
    oposite: 'top',
    vector: [0, -1],
  },
};

// Create snake and a foodPiece
const snake = { };

const foodPiece = { };

const moveFood = () => {
  foodPiece.x = Math.floor(Math.random() * boardSize.x);
  foodPiece.y = Math.floor(Math.random() * boardSize.y);
  if (snake.body.some(bodyPiece => (bodyPiece.x === foodPiece.x && bodyPiece.y === foodPiece.y))) {
    moveFood();
  }
};

const newGame = () => {
  snake.direction = 'right';
  snake.body = [
    { x: 16, y: 13, isFood: false },
    { x: 16, y: 12, isFood: false },
    { x: 16, y: 11, isFood: false },
    { x: 16, y: 10, isFood: true },
    { x: 16, y: 9, isFood: false },
    { x: 16, y: 8, isFood: false },
    { x: 15, y: 8, isFood: false },
  ];
  moveFood();
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
    newPosition.x = 1;
  }

  if (newPosition.y === boardSize.y) {
    newPosition.y = 1;
  }

  if (!snake.body.some((position) => position.x === newPosition.x && position.y === newPosition.y)) {
    if (newPosition.x === foodPiece.x && newPosition.y === foodPiece.y) {
      newPosition.isFood = true;
      moveFood();
    }

    if (!snake.body[snake.body.length - 1].isFood) {
      snake.body.splice(-1, 1);
    }

    snake.body.unshift(newPosition);

    return true;
  }

  return false;
};

export {
  boardSize,
  newGame,
  snake,
  foodPiece,
  changeDirection,
  move,
};
