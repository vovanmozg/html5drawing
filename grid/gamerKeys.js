function Gamer(matrix, x, y) {
  this.matrix = matrix;
  this.x = x;
  this.y = y;
  this.matrix.cells[this.x][this.y] = { r: 0, g: 100, b: 0 };

  this.step = function (grid) {
    grid.redraw();

    requestAnimationFrame(() => this.step(grid));
  };

  this.move = function (h = 0, v = 0) {
    this.matrix.cells[this.x][this.y] = { r: 220, g: 220, b: 220 };

    const newX = this.x + h;
    const newY = this.y + v;

    if (this.matrix.cells[newX] === undefined) return;
    if (this.matrix.cells[newX][newY] === undefined) return;

    this.x = newX;
    this.y = newY;

    this.matrix.cells[this.x][this.y] = { r: 0, g: 100, b: 0 };
  };

  const gamer = this;
  document.body.addEventListener('keydown', (evt) => {
    if (evt.keyCode == 37) gamer.move(-1, 0);
    if (evt.keyCode == 38) gamer.move(0, -1);
    if (evt.keyCode == 39) gamer.move(1, 0);
    if (evt.keyCode == 40) gamer.move(0, 1);

    if (evt.keyCode == 32) a = 1;// _this.shot();
  }, false);
}
