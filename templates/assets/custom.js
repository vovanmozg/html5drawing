function render(t = 0) {
  
  const index = (t * 10) % (dotsX * dotsY);
  const x = Math.floor(index % dotsX);
  const y = Math.floor(index / dotsX);
  pointRC(x, y)
}