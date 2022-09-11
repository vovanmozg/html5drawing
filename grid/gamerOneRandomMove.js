function Gamer(matrix, x, y, oldColor) {
  this.matrix = matrix;
  this.x = x;
  this.y = y;
  this.oldColor = oldColor;
  this.matrix.cells[this.x][this.y] = { r: 0, g: 100, b: 0 };

  this.step = function (grid) {
    const items = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const item = items[Math.floor(Math.random() * items.length)];

    this.move(
      item[0],
      item[1],
    );
    grid.redraw();

    requestAnimationFrame(() => this.step(grid));
  };

  this.isEqual = function (o1, o2) {
    return o1.r == o2.r && o1.g == o2.g && o1.b == o2.b;
  };

  this.move = function (h = 0, v = 0) {
    // Check boundaries
    const newX = this.x + h;
    const newY = this.y + v;
    if (matrix.cells[newX] === undefined) return;
    if (matrix.cells[newX][newY] === undefined) return;

    if (!this.isEqual(matrix.cells[newX][newY], this.oldColor) && !this.isEqual(matrix.cells[newX][newY], {}) && !this.isEqual(matrix.cells[newX][newY], { r: 255, g: 255, b: 255 })) {
      return;
    }

    // Previous cell should be filled by gray
    matrix.cells[this.x][this.y] = this.oldColor;

    this.x = newX;
    this.y = newY;

    //
    matrix.cells[this.x][this.y] = { r: 50, g: 100, b: 50 };
  };
}
