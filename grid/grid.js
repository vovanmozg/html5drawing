/* DRAWER

Using:

const matrix = new Matrix(70, 50);
grid = new Grid(matrix);
grid.redraw();
*/
function Grid(matrix, options = {}) {
  this.matrix = matrix;

  const defaultOptions = {
    backgroundColor: [0, 0, 0], // white
    gridColor: [50, 50, 50], // gray
    gridThickness: 1,
    stretch: true, // scale cells with windows size
  };

  // Merge default options with passed options
  this.options = Object.assign(defaultOptions, options);

  // Size of the grid is the same as size of the matrix
  this.columns = this.matrix.columns;
  this.rows = this.matrix.rows;

  if (options.cellSize) {
    this.options.stretch = false;
    this.cellWidth = options.cellSize; // pixels
    this.cellHeight = options.cellSize; // pixels
  } else {
    // TODO: Make cell-size-based generation
  }

  document.body.style.backgroundColor = `rgb(${this.options.backgroundColor.join(',')})`;
  // document.body.style.width = '100%';
  // document.body.style.height = '100%';

  this.createDrawer();
}

// Creates canvas handle (#cnv element should exist on page)
Grid.prototype.createDrawer = function () {
  const canvas = document.getElementById('cnv');
  // To correct scale (https://stackoverflow.com/questions/1664785/resize-html5-canvas-to-fit-window)
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;

  this.ctx = canvas.getContext('2d');
  canvas.style.position = 'absolute';

  this.recalcGeometry();
  window.addEventListener('resize', this.recalcGeometry.bind(this));
};

Grid.prototype.recalcGeometry = function () {
  if (this.options.stretch) {
    this.cellWidth = Math.floor(window.innerWidth / this.columns);
    this.cellHeight = Math.floor(window.innerHeight / this.rows);
  }

  // this.ctx.canvas.width = window.innerWidth;
  this.ctx.canvas.width = this.cellWidth * this.columns + this.options.gridThickness;
  // this.ctx.canvas.height = window.innerHeight;
  this.ctx.canvas.height = this.cellHeight * this.rows + this.options.gridThickness;
  this.ctx.canvas.style.left = (window.innerWidth - this.ctx.canvas.width) / 2;
  this.ctx.canvas.style.top = (window.innerHeight - this.ctx.canvas.height) / 2;
};

Grid.prototype.redraw = function (writeRect) {
  if (this.ctx === undefined) return;

  const imageData = this.ctx.createImageData(
    this.columns * this.cellWidth + this.options.gridThickness,
    this.rows * this.cellHeight + this.options.gridThickness,
  );
  // this.fillDefault(imageData);

  for (let i = 0; i < this.matrix.cells.length; i++) {
    for (let j = 0; j < this.matrix.cells[i].length; j++) {
      const cell = this.matrix.cells[i][j];
      if (cell.r === undefined) {
        cell.r = this.options.backgroundColor[0];
        cell.g = this.options.backgroundColor[1];
        cell.b = this.options.backgroundColor[2];
      } else {

      }
      this.drawItem(i, j, cell, imageData, writeRect);
      // {r: 100, g: 100, b: 255*Math.random()}
    }
  }
  this.ctx.putImageData(imageData, 0, 0);
};

// itemX, itemY  - scaled item x, y. If width = 200 and CELL_SIZE = 10, then 0 <= x,y < 20
Grid.prototype.drawItem = function (itemX, itemY, color, imageData, writeRect) {
  const x = itemX * this.cellWidth;
  const y = itemY * this.cellHeight;

  const lX = x + this.options.gridThickness;
  const rX = x + this.cellWidth - 1;
  const tY = y + this.options.gridThickness;
  const bY = y + this.cellHeight - 1;

  function writer(lt, rx, ty, by, newColor) {
    this.writeRectangle(lt, rx, ty, by, newColor, imageData);
  }
  if (writeRect) {
    // const { writeRectangle } = this;
    writeRect(lX, rX, tY, bY, color, writer.bind(this));
  } else {
    this.writeRectangle(lX, rX, tY, bY, color, imageData);
  }
};

Grid.prototype.writeRectangle = function (lX, rX, tY, bY, color, imageData) {
  for (let x = lX; x <= rX; x += 1) {
    for (let y = tY; y <= bY; y += 1) {
      this.writeImageDataPixel(x, y, color, imageData);
    }
  }
};

Grid.prototype.writeImageDataPixel = function (x, y, color, imageData) {
  let index = (y * (this.columns * this.cellWidth + this.options.gridThickness) + x) * 4;
  imageData.data[index] = color.r;
  index += 1;
  imageData.data[index] = color.g;
  index += 1;
  imageData.data[index] = color.b;
  index += 1;
  imageData.data[index] = color.a === undefined ? 255 : color.a;
};

Grid.prototype.fillDefault = function (imageData) {
  imageData.data.fill(255);

  // Fill entire canvas with gridColor
  const width = this.columns * this.cellWidth + this.options.gridThickness;
  const height = this.rows * this.cellHeight + this.options.gridThickness;
  const bitesCount = width * height * 4;
  for (let i = 0; i < bitesCount; i += 4) {
    imageData.data[i + 0] = this.options.gridColor[0];
    imageData.data[i + 1] = this.options.gridColor[1];
    imageData.data[i + 2] = this.options.gridColor[2];
    imageData.data[i + 3] = 255;
  }
};
