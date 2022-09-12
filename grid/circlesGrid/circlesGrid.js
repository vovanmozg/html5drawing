function Gamer(matrix) {
  this.matrix = matrix;
  this.x = 0;
  this.y = 0;
  this.drawColor = { r: 0, g: 100, b: 0 };
  // this.matrix.cells[this.x][this.y] = {r:0, g:100, b: 0};

  this.counter = 0;

  this.step = function step(grid) {
    const k = Math.floor(Date.now() / 10);
    // const items = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    // const item = items[Math.floor(Math.random() * items.length)];

    // this.move(
    //   item[0],
    //   item[1],
    // );

    for (let x = 0; x < this.matrix.cells.length; x++) {
      for (let y = 0; y < this.matrix.cells[x].length; y++) {
        const cell = this.matrix.cells[x][y];
        cell.r = 0;
        cell.g = 0;
        cell.b = 0;

        if ((x - 50) ** 2 + (y - 50) ** 2 < k % 1000) {
          cell.r = 100;
          if ((x & y) % 4 == (k / 10 + x ^ y) % 3) {
            cell.r = 200;
          }
        }

        if ((x - 80) ** 2 + (y - 50) ** 2 < (k + 666) % 1000) {
          cell.g = 100;
          if (4 & x * y - (k / 10) & 4) {
            cell.g = 150;
          }
        }

        if ((x - 65) ** 2 + (y - 40) ** 2 < (k + 333) % 1000) {
          cell.b = 100;
          if ((x + y) % 2) {
            cell.b = 150;
          }
        }

        // if (5 * y * x & 9 + ((k + 913) % 100) + 1 % 11 + 4) {
        //   cell.r = 100;
        // }
        // if (5 * y * x & 9 + ((k + 2222) % 100) + 1 % 11 + 4) {
        //   cell.g = 100;
        // }
        // if (5 * y * x & 9 + (k % 100) + 1 % 11 + 4) {
        //   cell.b = 100;
        // }
        // cell.g = (i * 10) % 255;
        // cell.b = (j * 10) % 255;

        // if ((((i) % 10 * j) ** 4) % (1 + k % 200)) {
        //   // cell.r = Math.floor(Math.random() * 255);
        //   // cell.g = Math.floor(Math.random() * 255);
        //   // cell.b = Math.floor(Math.random() * 255);

        //   cell.r = 50;
        //   cell.b = 50;
        // }

        // if ((((i) % 5 * j) ** 4) % (1 + k % 200)) {
        //   // cell.r = Math.floor(Math.random() * 255);
        //   // cell.g = Math.floor(Math.random() * 255);
        //   // cell.b = Math.floor(Math.random() * 255);

        //   cell.g = 50;
        //   cell.b = 50;
        // }
      }
    }

    grid.redraw();

    requestAnimationFrame(() => this.step(grid));
    // requestAnimationFrame(() => setTimeout(() => { this.step(grid); }, 1000));
  };

  this.isEqual = function isEqual(o1, o2) {
    return o1.r === o2.r && o1.g === o2.g && o1.b === o2.b;
  };

  this.move = function move(h = 0, v = 0) {
    // Check boundaries
    const newX = this.x + h;
    const newY = this.y + v;

    if (this.matrix.cells[newX] === undefined) return;
    if (this.matrix.cells[newX][newY] === undefined) return;

    const currentColor = this.matrix.cells[this.x][this.y];
    if (currentColor.r !== undefined && currentColor.g !== undefined
      && currentColor.b !== undefined) {
      currentColor.r += this.drawColor.r;
      currentColor.g += this.drawColor.g;
      currentColor.b += this.drawColor.b;
    }

    currentColor.r = currentColor.r > 255 ? 255 : currentColor.r;
    currentColor.g = currentColor.g > 255 ? 255 : currentColor.g;
    currentColor.b = currentColor.b > 255 ? 255 : currentColor.b;

    // Previous cell should be filled by gray
    this.matrix.cells[this.x][this.y] = currentColor;

    this.x = newX;
    this.y = newY;

    //
    // matrix.cells[this.x][this.y] = {r:50, g:50, b: 50};
  };
}
