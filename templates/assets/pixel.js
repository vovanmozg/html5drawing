function init() {
  // Virtual point size (in pixels)
  DOTSIZE = 20;

  // Canvas relation
  c = document.querySelector("#c");
  X = c.getContext("2d");
  // Size in pixels
  W = c.width = 1920;
  H = c.height = 1080;
  // Shorthands
  S = Math.sin;
  C = Math.cos;
  T = Math.tan;
  I = parseInt;
  R = (value) => Math.random() * value
  RI = (value) => I(R(value))

  dotsX = W/DOTSIZE;
  dotsY = H/DOTSIZE - 3;

  startT = new Date();
  //////////////////////////////////////////

  // loopInterval();
  loop();
}

// Draw pixel
function point(dotX, dotY, color = '#fff') {
  X.fillStyle = color;
  realX = dotX * DOTSIZE;
  realY = dotY * DOTSIZE;
  X.fillRect(realX, realY, DOTSIZE, DOTSIZE);
}

// Draw pixel with random color
function pointRC(dotX, dotY) {
  point(dotX, dotY, color = `rgb(${RI(255)}, ${RI(255)}, ${RI(255)}, 50%)`);
}


// Fill all field with random color points
function example1() {
  for(i = 0; i<dotsX; i++) {
    for(j=0;j<dotsY;j++) {
      pointRC(i, j)
    }
  }
}

// Draw random point
function example2() {
  pointRC(Math.floor(R(dotsX)), Math.floor(R(dotsY)));
}

function example3(t) {
  const index = (t * 151) % (dotsX * dotsY);
  const x = Math.floor(index % dotsX);
  const y = Math.floor(index / dotsX);
  // const color = `rgb(0, ${Math.floor(((t * 100) % (dotsX * dotsY)) / (dotsX * dotsY) * 255) }, 0, 50%)`
  // const color = `rgb(0, ${255 - (x / (dotsX * dotsY) * 255) }, 0, 50%)`
  pointRC(x, y)
}

function example4(t) {
  for(i = 0; i<dotsX; i++) {
    for(j=0;j<dotsY;j++) {
      point(i, j, `rgb(${RI(255)}, ${RI(255)}, ${RI(255)}, ${I(t) % 100}%)`)
    }
  }
}