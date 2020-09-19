import { snake } from '../../game.js';
import { ctx, pixelSize, rectCorrection, printCircle } from '../../utils.js';

const printEye = (x, y) => printCircle(x, y, 'black', pixelSize/5)

const printHead = (x, y) => {
  const headSize = pixelSize * 1.5;
  const headCorrection = headSize / 2
  ctx.fillRect(
    x - headCorrection,
    y - headCorrection,
    headSize,
    headSize,
  );
  switch (snake.direction) {
    case 'right':
      printEye(x + (headSize * (1 / 3)), y + (headSize * (1 / 10) - rectCorrection));
      printEye(x + (headSize * (1 / 3)), y - (headSize * (1 / 10) - rectCorrection));
      break;
    case 'left':
      printEye(x - (headSize * (1 / 3)), y + (headSize * (1 / 10) - rectCorrection));
      printEye(x - (headSize * (1 / 3)), y - (headSize * (1 / 10) - rectCorrection));
      break;
    case 'top':
      printEye(x + (headSize * (1 / 10) - rectCorrection), y - (headSize * (1 / 3)));
      printEye(x - (headSize * (1 / 10) - rectCorrection), y - (headSize * (1 / 3)));
      break;
    case 'bottom':
      printEye(x + (headSize * (1 / 10) - rectCorrection), y + (headSize * (1 / 3)));
      printEye(x - (headSize * (1 / 10) - rectCorrection), y + (headSize * (1 / 3)));
      break;
    default:
      break;
  }
};

export {
    printHead,
}