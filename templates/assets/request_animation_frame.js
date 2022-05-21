// Предпочтительный метод рендеринга фреймов
function loop() {
  requestAnimationFrame(loop);
  render((new Date() - startT) / 1000);
};
