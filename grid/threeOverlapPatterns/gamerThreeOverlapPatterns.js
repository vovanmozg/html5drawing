function Gamer(matrix, x, y, drawColor, subRectPosition) {
  this.matrix = matrix;
  this.x = x;
  this.y = y;
  this.drawColor = drawColor;
  this.subRectPosition = subRectPosition;
  // this.matrix.cells[this.x][this.y] = {r:0, g:100, b: 0};

  this.counter = 0;

  this.step = function step(grid) {
    const items = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const item = items[Math.floor(Math.random() * items.length)];

    this.move(
      item[0],
      item[1],
    );

    grid.redraw(this.writeRect.bind(this));
    // grid.redraw();

    // requestAnimationFrame(() => this.step(grid));
    requestAnimationFrame(() => setTimeout(() => { this.step(grid); }, 200));
  };

  this.writeRect = function writeRect(lX, rX, tY, bY, color, writer) {
    const q = this.subRectPosition;
    const leftX = lX + (rX - lX) / 2 * q[0];
    const rightX = lX + (rX - lX) / 2 * q[0] + (rX - lX) / 2;
    const topY = tY + (bY - tY) / 2 * q[1];
    const bottomY = tY + (bY - tY) / 2 * q[1] + (bY - tY) / 2;

    // if (lX === 1 && tY === 1) {
    //   console.log(lX, rX, tY, bY, q, leftX, rightX, topY, bottomY);
    // }
    // debugger;
    writer(leftX, rightX, topY, bottomY, color);
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
