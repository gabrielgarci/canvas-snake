import { directionInfo, boardSize } from '../utils.js';

let futureDirection;

const turnSnake = ( snake, newDirection ) => {
  if ( newDirection !== directionInfo[snake.direction].oposite ) {
    snake.direction = newDirection;
  }
};

const changeDirection = ( code ) => {
  switch ( code ) {
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

// Move to the oposite side of the board if snake is in the border
const checkBorders = ( position ) => {
  const correctedPosition = {};
  Object.keys( boardSize ).forEach( ( axis ) => {
    if ( position[axis] === boardSize[axis] ) {
      correctedPosition[axis] = 1;
    } else if ( position[axis] === 0 ) {
      correctedPosition[axis] = boardSize[axis] - 1;
    } else {
      correctedPosition[axis] = position[axis];
    }
  } );
  return correctedPosition;
};

const move = ( snake, foodPiece ) => {
  const possiblePosition = {
    x: snake.body[0].x + directionInfo[snake.direction].vector[0],
    y: snake.body[0].y + directionInfo[snake.direction].vector[1],
  };

  const newPosition = checkBorders( possiblePosition );
  newPosition.isFood = false;

  if ( !snake.body.some( ( position ) => position.x === newPosition.x && position.y === newPosition.y ) ) {
    if ( newPosition.x === foodPiece.coords.x && newPosition.y === foodPiece.coords.y ) {
      newPosition.isFood = true;
      document.getElementById( 'points' ).innerHTML = snake.body.length - 3;
      foodPiece.replace( snake );
    }

    if ( !snake.body[snake.body.length - 1].isFood ) {
      snake.body.splice( -1, 1 );
    } else {
      snake.body[snake.body.length - 1].isFood = false;
    }

    snake.body.unshift( newPosition );
  } else {
    return false;
  }

  if ( futureDirection && futureDirection !== snake.direction ) {
    turnSnake( snake, futureDirection );
  }

  return true;
};

export {
  move,
  changeDirection,
};
