document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const gridSize = 4;
    let grid = [];

    // Инициализация игрового поля
    function initGrid() {
        grid = [];
        for (let i = 0; i < gridSize; i++) {
            grid[i] = [];
            for (let j = 0; j < gridSize; j++) {
                grid[i][j] = 0;
                const cell = document.createElement('div');
                cell.id = `cell-${i}-${j}`;
                cell.classList.add('cell');
                gameBoard.appendChild(cell);
            }
        }
        addRandomNumber();
        addRandomNumber();
        drawGrid();
    }

    // Добавление случайного числа
    function addRandomNumber() {
        let emptyCells = [];
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (grid[i][j] === 0) {
                    emptyCells.push({ x: i, y: j });
                }
            }
        }

        if (emptyCells.length > 0) {
            let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            grid[randomCell.x][randomCell.y] = 1; // Начинаем с числа 1
        }
    }

    // Отрисовка игрового поля
    function drawGrid() {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const cell = document.getElementById(`cell-${i}-${j}`);
                cell.textContent = grid[i][j] > 0 ? grid[i][j] : '';
            }
        }
    }


    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowLeft':
                moveLeft();
                break;
            case 'ArrowRight':
                moveRight();
                break;
            case 'ArrowUp':
                moveUp();
                break;
            case 'ArrowDown':
                moveDown();
                break;
        }
        addRandomNumber();
        drawGrid();
    });

    function moveLeft() {
        for (let i = 0; i < gridSize; i++) {
            let row = grid[i];
            let newRow = row.filter(val => val > 0); // Удаляем нули
            while (newRow.length < gridSize) {
                newRow.push(0); // Добавляем нули справа
            }
            for (let j = 0; j < gridSize - 1; j++) {
                if (newRow[j] === newRow[j + 1]) {
                    newRow[j] *= 2; // Слияние чисел
                    newRow[j + 1] = 0;
                }
            }
            newRow = newRow.filter(val => val > 0); // Удаляем нули
            while (newRow.length < gridSize) {
                newRow.push(0); // Добавляем нули справа
            }
            grid[i] = newRow;
        }
    }


    initGrid();
});
