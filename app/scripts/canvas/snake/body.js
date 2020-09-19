import { ctx, pixelSize, rectCorrection } from '../../utils.js';

const printBody = (x, y) => {
    ctx.fillRect(
      x - rectCorrection,
      y - rectCorrection,
      pixelSize,
      pixelSize,
    );
  };

export {
  printBody
}