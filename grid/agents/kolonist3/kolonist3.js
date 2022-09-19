function isEqual(o1, o2) {
  return o1.r === o2.r && o1.g === o2.g && o1.b === o2.b;
}

function AgentRoadCreator(grid, x = 0, y = 0, r = 0, g = 100, b = 100) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.g = g;
  this.b = b;
  this.grid = grid;

  this.step = function step() {
    const items = [[1, 0], [0, 1], [-1, 0], [0, -1]];

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
      // if (this.r > cellNew.r && this.g > cellNew.g && this.b > cellNew.b) {
      if (this.r + this.g > cellNew.r && this.r + this.g > cellNew.g) {
        cellNew.r = this.r;
        cellNew.g = this.g;
        cellNew.b = this.b;
      }

      return;
    }

    cellNew.r = this.r;
    cellNew.g = this.g;
    cellNew.b = this.b;

    this.x = newX;
    this.y = newY;
  };
}

function Gamer(matrix) {
  this.matrix = matrix;
  this.drawColor = { r: 0, g: 100, b: 0 };
  // this.matrix.cells[this.x][this.y] = {r:0, g:100, b: 0};

  this.counter = 0;

  this.agents = [];
  const agentsCount = 50;
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
    for (let i = 0; i < 50; i++) {
      this.agents.forEach((agent) => agent.step());
    }

    grid.redraw();

    requestAnimationFrame(() => this.step(grid));
    // requestAnimationFrame(() => setTimeout(() => { this.step(grid); }, 1000));
  };
}
