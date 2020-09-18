import * as game from './game.js';

const canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');

const pixelSize = (1 / game.boardSize.x) * canvas.width;

const printCircle = (x, y, color, size) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};

const rectCorrection = (pixelSize / 2);

const printEye = (x, y) => printCircle(x, y, 'black', pixelSize / 5);

const printHead = (x, y) => {
  const headSize = pixelSize * 1.5;
  ctx.fillRect(
    x - rectCorrection - pixelSize * 0.25,
    y - rectCorrection - pixelSize * 0.25,
    headSize,
    headSize,
  );
  switch (game.snake.direction) {
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
    default:
      printEye(x + (headSize * (1 / 10) - rectCorrection), y + (headSize * (1 / 3)));
      printEye(x - (headSize * (1 / 10) - rectCorrection), y + (headSize * (1 / 3)));
      break;
  }
};

const printBody = (x, y) => {
  ctx.fillRect(
    x - rectCorrection,
    y - rectCorrection,
    pixelSize,
    pixelSize,
  );
};

const draw = (snake, food) => {
  snake.body.forEach((piece, index) => {
    const xCoord = (piece.x / game.boardSize.x) * canvas.width;
    const yCoord = (piece.y / game.boardSize.y) * canvas.height;
    if (!piece.isFood || index === 0) {
      ctx.beginPath();
      ctx.fillStyle = 'green';
      (index !== 0) ? printBody(xCoord, yCoord) : printHead(xCoord, yCoord);
      ctx.fill();
    } else {
      printCircle(xCoord, yCoord, 'green', pixelSize / 1.25);
    }
  });

  const xCoord = (food.x / game.boardSize.x) * canvas.width;
  const yCoord = (food.y / game.boardSize.y) * canvas.height;
  printCircle(xCoord, yCoord, 'red', pixelSize / 1.5);
};

export {
  ctx,
  draw,
};
