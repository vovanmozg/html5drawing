function isEqual(o1, o2) {
  return o1.r === o2.r && o1.g === o2.g && o1.b === o2.b;
}

// For example tranforms [-2, 1] to [[-1, 0], [-1, 0], [0, 1]]
function expandSum(ar) {
  const result = [];
  for (let i = 0; i < Math.abs(ar[0]); i++) {
    result.push([Math.sign(ar[0]), 0]);
  }

  for (let i = 0; i < Math.abs(ar[1]); i++) {
    result.push([0, Math.sign(ar[1])]);
  }
  return result;
}

function AgentRoadCreator(grid, x = 0, y = 0, r = 0, g = 100, b = 100) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.g = g;
  this.b = b;
  this.grid = grid;
  this.history = [];

  this.step = function step() {
    const sum = this.history.reduce((prev, m) => [m[0] + prev[0], m[1] + prev[1]], [0, 0]);

    const additionalItems = expandSum(sum);
    const items = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    items.push(...additionalItems);
    items.push(...additionalItems);
    items.push(...additionalItems);

    const item = items[Math.floor(Math.random() * items.length)];

    this.tryMove(
      item[0],
      item[1],
    );
  };

  this.tryMove = function tryMove(h = 0, v = 0) {
    // Check boundaries
    const newX = this.x + h;
    const newY = this.y + v;

    const cells = this.grid.matrix.cells;
    if (cells[newX] === undefined) return;
    if (cells[newX][newY] === undefined) return;

    const cellNew = cells[newX][newY];
    if (!isEqual(cellNew, this) && !isEqual(cellNew, { r: 0, g: 0, b: 0 })) {
      cellNew.r = 255;
      cellNew.g = 255;
      cellNew.b = 255;
      return;
    }

    this.history.push([h, v]);
    if (this.history.length > 3) {
      this.history.shift();
    }

    // const currentColor = this.grid.matrix.cells[this.x][this.y];

    cellNew.r = this.r;
    cellNew.g = this.g;
    cellNew.b = this.b;

    // Previous cell should be filled by gray
    // this.grid.matrix.cells[this.x][this.y] = currentColor;

    this.x = newX;
    this.y = newY;
  };
}

// function AgentWalker(grid, roadColor, x = 0, y = 0, r = 0, g = 100, b = 100) {
//   this.x = x;
//   this.y = y;
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   this.roadColor = roadColor;
//   this.grid = grid;

//   this.step = function step() {
//     const items = [[1, 0], [0, 1], [-1, 0], [0, -1]];
//     const item = items[Math.floor(Math.random() * items.length)];

//     this.move(
//       item[0],
//       item[1],
//     );
//   };

//   this.move = function move(h = 0, v = 0) {
//     // Check boundaries
//     const newX = this.x + h;
//     const newY = this.y + v;

//     const cells = this.grid.matrix.cells;
//     if (cells[newX] === undefined) return;
//     if (cells[newX][newY] === undefined) return;

//     const cellCurrent = cells[this.x][this.y];
//     const cellNew = cells[newX][newY];

//     if (!(isEqual(cellNew, this.roadColor) || isEqual(cellNew, this))) return;

//     cellNew.r = this.r;
//     cellNew.g = this.g;
//     cellNew.b = this.b;

//     // cellCurrent.r = 0;
//     // cellCurrent.g = 0;
//     // cellCurrent.b = 0;

//     this.x = newX;
//     this.y = newY;
//   };
// }

function Gamer(matrix) {
  this.matrix = matrix;
  this.drawColor = { r: 0, g: 100, b: 0 };
  // this.matrix.cells[this.x][this.y] = {r:0, g:100, b: 0};

  this.counter = 0;

  this.agents = [];
  const agentsCount = 30;
  for (let i = 0; i < agentsCount; i += 1) {
    const x = Math.floor(Math.random() * this.matrix.columns);
    const y = Math.floor(Math.random() * this.matrix.rows);
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    this.agents.push(
      new AgentRoadCreator(this, x, y, r, g, b),
    );
  }

  this.step = function step(grid) {
    this.agents.forEach((agent) => {
      agent.step();
      // const items = [[1, 0], [0, 1], [-1, 0], [0, -1]];
      // const item = items[Math.floor(Math.random() * items.length)];

      // this.move(
      //   agent,
      //   item[0],
      //   item[1],
      // );
    });

    grid.redraw();

    requestAnimationFrame(() => this.step(grid));
    // requestAnimationFrame(() => setTimeout(() => { this.step(grid); }, 1000));
  };

  this.move = function move(agent, h = 0, v = 0) {
    // Check boundaries
    const newX = agent.x + h;
    const newY = agent.y + v;

    if (this.matrix.cells[newX] === undefined) return;
    if (this.matrix.cells[newX][newY] === undefined) return;

    const currentColor = this.matrix.cells[agent.x][agent.y];
    // if (currentColor.r !== undefined && currentColor.g !== undefined
    //   && currentColor.b !== undefined) {
    //   currentColor.r += this.drawColor.r;
    //   currentColor.g += this.drawColor.g;
    //   currentColor.b += this.drawColor.b;
    // }

    currentColor.r = agent.r;
    currentColor.g = agent.g;
    currentColor.b = agent.b;

    // Previous cell should be filled by gray
    this.matrix.cells[agent.x][agent.y] = currentColor;

    agent.x = newX;
    agent.y = newY;

    //
    // matrix.cells[this.x][this.y] = {r:50, g:50, b: 50};
  };
}
