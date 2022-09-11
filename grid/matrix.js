function Matrix(columns, rows) {
  this.columns = columns;
  this.rows = rows;

  this.cells = [];
  for (let c = 0; c < this.columns; c++) {
    this.cells[c] = [];
    for (let r = 0; r < this.rows; r++) {
      this.cells[c][r] = {};
    }
  }
}
