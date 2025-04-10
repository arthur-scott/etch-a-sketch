// Script to first generate 16 x 16 divs to go in container
const container = document.querySelector('div.container');
const dim = 10;
genGrid(dim);

// Generates grid of requested dimension
function genGrid(gridDim) {
    for (let i = 0; i < gridDim; i++) {
        const column = document.createElement('div');
        column.classList.add('column');

        for (let j = 0; j < gridDim; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            column.appendChild(square);
        }
        container.appendChild(column);
    }
}

// Removes all columns from grid
function removeGrid() {
    const columnNodes = document.querySelectorAll('.column'); // ! unsure if this is correct here.

    columnNodes.forEach((column) => {
        column.remove();
    });
}

// Hook up button to regen requested grid size
const regenButton = document.querySelector('#regenerate');

regenButton.addEventListener('click', () => {
    const newDim = prompt('Choose new dimension of grid (must be < 100): ');

    if (Number(newDim) === NaN || Number(newDim) > 100) {
        return;
    }
    removeGrid();
    genGrid(Number(newDim));
});
