import { snake } from '../../game.js';
import { ctx, pixelSize, rectCorrection, directionInfo } from '../../utils.js';

const getTailDirection = () => {
  const index = snake.body.length - 1;
  const tailVector = [
    snake.body[index - 1].x - snake.body[index].x,
    snake.body[index - 1].y - snake.body[index].y,
  ];
  const directionArr = Object.keys(directionInfo).map((direction) => directionInfo[direction]);
  const matchIndex = directionArr.indexOf(
    directionArr.find((direction) => direction.vector[0] === tailVector[0] && direction.vector[1] === tailVector[1]),
  );
  const tailDirection = Object.keys(directionInfo)[matchIndex];
  return tailDirection;
};

const printTail = (x, y) => {
    switch (getTailDirection()) {
      case 'right':
        ctx.moveTo(x + rectCorrection, y + rectCorrection);
        ctx.lineTo(x + rectCorrection, y - rectCorrection);
        ctx.lineTo(x - rectCorrection, y - rectCorrection + (pixelSize / 2));
        break;
      case 'left':
        ctx.moveTo(x - rectCorrection, y + rectCorrection);
        ctx.lineTo(x - rectCorrection, y - rectCorrection);
        ctx.lineTo(x + rectCorrection, y - rectCorrection + (pixelSize / 2));
        break;
      case 'top':
        ctx.moveTo(x - rectCorrection, y - rectCorrection);
        ctx.lineTo(x + rectCorrection, y - rectCorrection);
        ctx.lineTo(x - rectCorrection + (pixelSize / 2), y + rectCorrection);
        break;
      case 'bottom':
        ctx.moveTo(x - rectCorrection, y + rectCorrection);
        ctx.lineTo(x + rectCorrection, y + rectCorrection);
        ctx.lineTo(x - rectCorrection + (pixelSize / 2), y - rectCorrection);
        break;
      default:
        break;
    }
    ctx.closePath();
  };
  
export {
    printTail,
}
