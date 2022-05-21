// рендеринг через ровные интервалы времени
function loop() {
  setInterval( () => render((new Date() - startT) / 1000), 1000)
}
