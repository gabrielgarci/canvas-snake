import { boardSize } from '../utils.js';

const foodPiece = {
  coords: { },
  replace: ( snake ) => {
    foodPiece.coords.x = Math.floor( Math.random() * boardSize.x );
    foodPiece.coords.y = Math.floor( Math.random() * boardSize.y );
    if (
      snake.body.some( ( bodyPiece ) => ( bodyPiece.x === foodPiece.coords.x && bodyPiece.y === foodPiece.coords.y ) )
        || ( foodPiece.coords.x === 0 || foodPiece.coords.y === 0 ) ) {
      foodPiece.replace( snake );
    }
  },
};

export default foodPiece;
