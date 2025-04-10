// Script to first generate 16 x 16 divs to go in container
const gridDim = 16;
const numberOfElements = gridDim * gridDim;
const container = document.querySelector('div.container');

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
