const EMPTY = 0;
const AGENT = 1;

const matches = {};

function agentColor() {
  return { r: 0, g: 50, b: 0 };
}

function isEmpty(cell) {
  return cell.state === EMPTY || cell.state === undefined;
}

function clearCell(cell) {
  cell.state = EMPTY;
  cell.configuration = 0;
  cell.r = 0;
  cell.g = 0;
  cell.b = 0;
}

function frontCell(x, y, angle, cells) {
  const h = Math.round(Math.cos(angle));
  const v = Math.round(Math.sin(angle));

  return cells[x + h][y + v];
}

function behindCell(x, y, angle, cells) {
  const h = Math.round(Math.cos(angle + Math.PI));
  const v = Math.round(Math.sin(angle + Math.PI));

  return cells[x + h][y + v];
}

function rightCell(x, y, angle, cells) {
  const h = Math.round(Math.cos(angle - Math.PI / 2));
  const v = Math.round(Math.sin(angle - Math.PI / 2));

  return cells[x + h][y + v];
}

function leftCell(x, y, angle, cells) {
  const h = Math.round(Math.cos(angle + Math.PI / 2));
  const v = Math.round(Math.sin(angle + Math.PI / 2));

  return cells[x + h][y + v];
}

// 0000 - 1
// 0001 - 0
// 0002 - 0
// 0003 - 0
function regenerateMathes() {
  for (let i1 = 0; i1 <= 4; i1 += 1) {
    for (let i2 = 0; i2 <= 4; i2 += 1) {
      for (let i3 = 0; i3 <= 4; i3 += 1) {
        for (let i4 = 0; i4 <= 4; i4 += 1) {
          const id = `${i1}${i2}${i3}${i4}`;

          matches[id] = [0, 1, 2, 3, 4][Math.floor(Math.random() * 5)];
        }
      }
    }
  }
}

function neigToConfig(neighborhood) {
  return matches[neighborhood] || 0;
}

function AgentRoadCreator(grid, x = 0, y = 0, r = 0, g = 100, b = 100) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.g = g;
  this.b = b;
  this.grid = grid;
  this.angle = 0; // from 0 to Math.PI

  this.step = function step() {
    this.calcState();
    this.turnRight();

    if (this.tryMove()) return;

    this.turnLeft();

    if (this.tryMove()) return;

    this.turnLeft();
  };

  this.neighborhood = function neighborhood() {
    const cells = this.grid.matrix.cells;
    const lc = leftCell(this.x, this.y, this.angle, cells);
    const rc = rightCell(this.x, this.y, this.angle, cells);
    const fc = frontCell(this.x, this.y, this.angle, cells);
    const bc = behindCell(this.x, this.y, this.angle, cells);

    return `${fc?.configuration || 0}${rc?.configuration || 0}${bc?.configuration || 0}${lc?.configuration || 0}`;
  };

  this.calcState = function calcState() {
    const cells = this.grid.matrix.cells;

    const nh = this.neighborhood();
    cells[this.x][this.y].configuration = neigToConfig(nh);

    if (cells[this.x][this.y].configuration === 1) {
      cells[this.x][this.y].r = 80;
      cells[this.x][this.y].g = 70;
      cells[this.x][this.y].b = 0;
    } else if (cells[this.x][this.y].configuration === 2) {
      cells[this.x][this.y].r = 100;
      cells[this.x][this.y].g = 100;
      cells[this.x][this.y].b = 0;
    } else if (cells[this.x][this.y].configuration === 3) {
      cells[this.x][this.y].r = 20;
      cells[this.x][this.y].g = 20;
      cells[this.x][this.y].b = 20;
    } else if (cells[this.x][this.y].configuration === 4) {
      cells[this.x][this.y].r = 0;
      cells[this.x][this.y].g = 80;
      cells[this.x][this.y].b = 80;
    }
  };

  this.calcShift = function calcShift(angle) {
    const h = Math.round(Math.cos(angle));
    const v = Math.round(Math.sin(angle));

    return [this.x + h, this.y + v];
  };

  this.turnRight = function turnRight() {
    this.angle += Math.PI / 2;
  };

  this.turnLeft = function turnLeft() {
    this.angle -= Math.PI / 2;
  };

  this.tryMove = function tryMove() {
    const cells = this.grid.matrix.cells;

    const [newX, newY] = this.calcShift(this.angle);

    if (this.isOutOfBorders(newX, newY, cells)) return false;

    const cellNew = cells[newX][newY];

    if (!isEmpty(cellNew)) return false;

    this.writeAgent(cellNew, this);
    this.x = newX;
    this.y = newY;

    return true;
  };

  this.isOutOfBorders = function isOutOfBorders(testX, testY, cells) {
    // Check boundaries
    if (cells[testX] === undefined) {
      this.angle += Math.PI / 2;
      return true;
    }
    if (cells[testX][testY] === undefined) {
      this.angle += Math.PI / 2;
      return true;
    }
    return false;
  };

  this.writeAgent = function writeAgent(cell, agent) {
    cell.state = AGENT;

    cell.r = agent.r;
    cell.g = agent.g;
    cell.b = agent.b;
  };
}

function Gamer(matrix) {
  this.matrix = matrix;
  this.drawColor = { r: 0, g: 100, b: 0 };
  // this.matrix.cells[this.x][this.y] = {r:0, g:100, b: 0};

  this.counter = 0;

  this.agents = [];
  const agentsCount = 1;
  for (let i = 0; i < agentsCount; i += 1) {
    const x = Math.floor(this.matrix.columns / 2);
    const y = Math.floor(this.matrix.rows / 2);

    this.agents.push(
      new AgentRoadCreator(this, x, y, agentColor().r, agentColor().g, agentColor().b),
    );
  }

  // Clear matrix to redraw (not working)
  this.clearConfigs = function clearConfigs() {
    this.agents[0].x = Math.floor(this.matrix.columns / 2);
    this.agents[0].y = Math.floor(this.matrix.rows / 2);
    this.agents[0].angle = 0;

    this.matrix.cells.forEach((row) => {
      row.forEach((cell) => clearCell(cell));
    });
  };

  this.step = function step(grid) {
    this.clearConfigs();
    regenerateMathes();

    const stepsAmount = 40000;
    for (let i = 0; i < stepsAmount; i++) {
      this.agents.forEach((agent) => agent.step());
    }

    grid.redraw(this.writeRect.bind(this));

    // requestAnimationFrame(() => this.step(grid));
    requestAnimationFrame(() => setTimeout(() => { this.step(grid); }, 500));
  };

  this.writeRect = function writeRect(lX, rX, tY, bY, cell, writer) {
    writer(lX, rX, tY, bY, cell);
  };
}
