function Gamer(matrix, x, y, drawColor) {
  this.matrix = matrix;
  this.x = x;
  this.y = y;
  this.drawColor = drawColor;
  // this.matrix.cells[this.x][this.y] = {r:0, g:100, b: 0};

  this.counter = 0;

  this.step = function step(grid) {
    const items = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const item = items[Math.floor(Math.random() * items.length)];

    this.move(
      item[0],
      item[1],
    );

    grid.redraw();

    requestAnimationFrame(() => this.step(grid));
  };

  this.isEqual = function isEqual(o1, o2) {
    return o1.r === o2.r && o1.g === o2.g && o1.b === o2.b;
  }

  this.move = function(h = 0, v = 0) {
  
    // Check boundaries
    const newX = this.x + h;
    const newY = this.y + v;
    
    if (matrix.cells[newX] === undefined) return;
    if (matrix.cells[newX][newY] === undefined) return;
    
    
    const currentColor = matrix.cells[this.x][this.y];
    currentColor.r = currentColor.r === undefined ? this.drawColor.r : currentColor.r + this.drawColor.r;
    currentColor.g = currentColor.g === undefined ? this.drawColor.g : currentColor.g + this.drawColor.g;
    currentColor.b = currentColor.b === undefined ? this.drawColor.b : currentColor.b + this.drawColor.b;

    currentColor.r = currentColor.r > 255 ? 255 : currentColor.r;
    currentColor.g = currentColor.g > 255 ? 255 : currentColor.g;
    currentColor.b = currentColor.b > 255 ? 255 : currentColor.b;

    // Previous cell should be filled by gray
    matrix.cells[this.x][this.y] = currentColor;
    
    
    this.x = newX;
    this.y = newY;

    //
    //matrix.cells[this.x][this.y] = {r:50, g:50, b: 50};
  }
}      