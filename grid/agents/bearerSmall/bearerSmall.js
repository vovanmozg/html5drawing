function isEqual(o1, o2) {
  return o1.r === o2.r && o1.g === o2.g && o1.b === o2.b;
}

function cargoColor() {
  return { r: 200, g: 200, b: 200 };
}

function agentColor() {
  return { r: 200, g: 200, b: 0 };
}

function agentHoleColor() {
  return { r: 0, g: 0, b: 0 };
}

function cargo() {
  return {
    cargo: true, r: cargoColor().r, g: cargoColor().g, b: cargoColor().b,
  };
}

function isCargo(cell) {
  return cell.cargo === true;
  // return isEqual(cell, cargo());
}

function isAgent(cell) {
  return cell.agent === true;
}

function AgentRoadCreator(grid, x = 0, y = 0, r = 0, g = 100, b = 100) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.g = g;
  this.b = b;
  this.grid = grid;
  this.bringCargo = false;
  this.angle = 0; // from 0 to Math.PI

  this.shiftAngle = function shiftAngle() {
    // const angleChanges = [1, -1];
    // const angleChange = angleChanges[Math.floor(Math.random() * angleChanges.length)];
    // const angleChange = Math.round(Math.cos(Math.random() * Math.PI)) * 20;
    const sign = Math.round(Math.cos(Math.random() * Math.PI));
    const angleChange = sign * Math.PI / 7;
    this.angle += angleChange;
  };

  this.step = function step() {
    let moved = false;
    do {
      this.shiftAngle();
      moved = this.tryMove();
    } while (!moved);
  };

  this.tryMove = function tryMove() {
    const h = Math.round(Math.cos(this.angle));
    const v = Math.round(Math.sin(this.angle));

    if (Math.abs(h + v) !== 1) return false;

    const cells = this.grid.matrix.cells;
    const newX = this.x + h;
    const newY = this.y + v;
    // Check boundaries
    if (cells[newX] === undefined) {
      this.angle += Math.PI / 2;
      return false;
    }
    if (cells[newX][newY] === undefined) {
      this.angle += Math.PI / 2;
      return false;
    }

    const cellNew = cells[newX][newY];
    const cellOld = cells[this.x][this.y];

    if (isAgent(cellNew)) {
      return false;
    }
    // if (!isEqual(cellNew, this) && !isEqual(cellNew, { r: 0, g: 0, b: 0 })) {
    //   return;
    // }

    if (isCargo(cellNew)) {
      this.angle += Math.PI / 2;
      if (this.bringCargo === false) {
        // console.log('I will get cargo from', newX, newY, 'Agent on position',
        //  this.x, this.y, 'direction', h, v);
        this.getCargo(cellNew);
      } else {
        // console.log('There is cargo in', newX, newY, 'I will put cargo to', this.x, this.y);
        this.putCargo(cellOld);
        return true;
      }
    } else {
      // console.log('No cargo in cell', newX, newY, cellNew);
    }

    // If agent put cargo on same position
    // if (isCargo(cellOld) && this.bringCargo === false) {

    // } else {

    // }

    this.writeAgent(cellNew, this);

    cellOld.r = 0;
    cellOld.g = 0;
    cellOld.b = 0;
    cellOld.agent = false;
    cellOld.bringCargo = false;

    // console.log(this);
    this.x = newX;
    this.y = newY;

    return true;
  };

  this.getCargo = function getCargo(cell) {
    this.bringCargo = true;
    cell.cargo = false;
    cell.r = 0;
    cell.g = 0;
    cell.b = 0;

    this.r = agentColor().r;
    this.g = agentColor().g;
    this.b = agentColor().b;
  };

  this.putCargo = function putCargo(cell) {
    this.bringCargo = false;
    cell.cargo = true;
    cell.r = cargo().r;
    cell.g = cargo().g;
    cell.b = cargo().b;

    this.r = agentColor().r;
    this.g = agentColor().g;
    this.b = agentColor().b;
  };

  this.writeAgent = function writeAgent(cell, agent) {
    cell.agent = true;
    cell.bringCargo = agent.bringCargo;
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
  const agentsCount = 5;
  for (let i = 0; i < agentsCount; i += 1) {
    const x = Math.floor(Math.random() * this.matrix.columns);
    const y = Math.floor(Math.random() * this.matrix.rows);
    // const r = 0; // Math.floor(Math.random() * 255);
    // const g = 200; // Math.floor(Math.random() * 255);
    // const b = 200; // Math.floor(Math.random() * 255);

    this.agents.push(
      new AgentRoadCreator(this, x, y, agentColor().r, agentColor().g, agentColor().b),
    );
  }

  // add cargos
  this.initialCargosCount = 10;
  let initialCargosCount = this.initialCargosCount;
  while (initialCargosCount > 0) {
    const x = Math.floor(Math.random() * this.matrix.columns);
    const y = Math.floor(Math.random() * this.matrix.rows);

    if (!isCargo(this.matrix.cells[x][y])) {
      this.matrix.cells[x][y] = cargo();
      initialCargosCount--;
    }
  }

  this.calculateCargos = function calculateCargos() {
    let cargos = 0;

    for (let x = 0; x < this.matrix.columns; x++) {
      for (let y = 0; y < this.matrix.rows; y++) {
        if (this.matrix.cells[x][y].cargo) {
          cargos++;
        }
      }
    }
    if (cargos < 100 - this.agents.length) {
      console.log(cargos);
      debugger;
    }
  };

  this.step = function step(grid) {
    this.agents.forEach((agent) => agent.step());
    // this.calculateCargos();

    grid.redraw(this.writeRect.bind(this));

    requestAnimationFrame(() => this.step(grid));
    // requestAnimationFrame(() => setTimeout(() => { this.step(grid); }, 100));
  };

  this.writeRect = function writeRect(lX, rX, tY, bY, cell, writer) {
    if (cell.cargo == true) {
      cell = cargo();
    }

    writer(lX, rX, tY, bY, cell);
    if (isAgent(cell)) {
      let borderX = Math.floor((rX - lX) / 10);
      let borderY = Math.floor((bY - tY) / 10);

      if (borderX < 1) borderX = 1;
      if (borderY < 1) borderY = 1;

      // debugger;
      if (cell.bringCargo) {
        writer(lX + borderX, rX - borderX, tY + borderY, bY - borderY, cargoColor());
      } else {
        writer(lX + borderX, rX - borderX, tY + borderY, bY - borderY, agentHoleColor());
      }
    }
  };
}
