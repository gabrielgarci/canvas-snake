import { snake, foodPiece } from '../game/game.js';
import {
  canvas, ctx, boardSize, pixelSize, printCircle,
} from '../utils.js';
import printTail from './snake/tail.js';
import printHead from './snake/head.js';
import printBody from './snake/body.js';

const printSnake = () => {
  snake.body.forEach( ( piece, index ) => {
    const xCoord = ( piece.x / boardSize.x ) * canvas.width;
    const yCoord = ( piece.y / boardSize.y ) * canvas.height;
    const color = ( index === 0 || index % 2 ) ? 'rgb(0, 102, 0)' : 'rgb(204, 204, 36)';
    if ( !piece.isFood || index === 0 ) {
      ctx.beginPath();
      ctx.fillStyle = color;
      switch ( index ) {
        case 0:
          printHead( xCoord, yCoord );
          break;
        case snake.body.length - 1:
          printTail( xCoord, yCoord );
          break;
        default:
          printBody( xCoord, yCoord );
          break;
      }
      ctx.fill();
    } else {
      printCircle( xCoord, yCoord, color, pixelSize / 1.25 );
    }
  } );
};

const printFood = () => {
  const xCoord = ( foodPiece.coords.x / boardSize.x ) * canvas.width;
  const yCoord = ( foodPiece.coords.y / boardSize.y ) * canvas.height;
  printCircle( xCoord, yCoord, 'red', pixelSize / 1.5 );
};

const draw = () => {
  ctx.clearRect( 0, 0, canvas.width, canvas.height );

  printSnake();
  printFood();

  window.requestAnimationFrame( draw );
};

export default draw;
