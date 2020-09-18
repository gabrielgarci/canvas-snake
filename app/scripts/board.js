import { snake, foodPiece } from './game.js';
import { boardSize, directionInfo } from './utils.js';

const canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');

const pixelSize = (1 / boardSize.x) * canvas.width;

const printCircle = (x, y, color, size) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};

const rectCorrection = (pixelSize / 2); // Used to center the prints

const printEye = (x, y) => printCircle(x, y, 'black', pixelSize / 5);

const printHead = (x, y) => {
  const headSize = pixelSize * 1.5;
  ctx.fillRect(
    x - rectCorrection - pixelSize * 0.25,
    y - rectCorrection - pixelSize * 0.25,
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

const printBody = (x, y) => {
  ctx.fillRect(
    x - rectCorrection,
    y - rectCorrection,
    pixelSize,
    pixelSize,
  );
};

const printTail = (x, y, tailDirection) => {
  switch (tailDirection) {
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

const printSnake = () => {
  snake.body.forEach((piece, index) => {
    const xCoord = (piece.x / boardSize.x) * canvas.width;
    const yCoord = (piece.y / boardSize.y) * canvas.height;
    if (!piece.isFood || index === 0) {
      ctx.beginPath();
      ctx.fillStyle = 'green';
      switch (index) {
        case 0:
          printHead(xCoord, yCoord);
          break;
        case snake.body.length - 1:
          printTail(xCoord, yCoord, getTailDirection());
          break;
        default:
          printBody(xCoord, yCoord);
          break;
      }
      ctx.fill();
    } else {
      printCircle(xCoord, yCoord, 'green', pixelSize / 1.25);
    }
  });
};

const printFood = () => {
  const xCoord = (foodPiece.x / boardSize.x) * canvas.width;
  const yCoord = (foodPiece.y / boardSize.y) * canvas.height;
  printCircle(xCoord, yCoord, 'red', pixelSize / 1.5);
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  printSnake();
  printFood();

  window.requestAnimationFrame(draw);
};

export {
  ctx,
  draw,
};
