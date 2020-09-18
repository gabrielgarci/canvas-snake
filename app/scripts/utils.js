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
    vector: [0, -1],
  },
  bottom: {
    oposite: 'top',
    vector: [0, 1],
  },
};

class Snake {
  constructor() {
    this.direction = 'right';
    this.body = [
      { x: 15, y: 8, isFood: false },
      { x: 14, y: 8, isFood: false },
      { x: 13, y: 8, isFood: false },
      { x: 12, y: 8, isFood: false },
    ];
  }
}

export {
  boardSize,
  directionInfo,
  Snake,
};
