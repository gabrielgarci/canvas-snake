const canvas = document.getElementById( 'playground' );
const ctx = canvas.getContext( '2d' );

const boardSize = {
  x: 30,
  y: 15,
};

const pixelSize = ( 1 / boardSize.x ) * canvas.width;

const rectCorrection = ( pixelSize / 2 );

const printCircle = ( x, y, color, size ) => {
  ctx.beginPath();
  ctx.arc( x, y, size, 0, 2 * Math.PI );
  ctx.fillStyle = color;
  ctx.fill();
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

export {
  canvas,
  ctx,
  pixelSize,
  boardSize,
  rectCorrection,
  printCircle,
  directionInfo,
};
