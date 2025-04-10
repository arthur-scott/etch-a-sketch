// Script to first generate 16 x 16 divs to go in container
const gridDim = 16;
const numberOfElements = gridDim * gridDim;
const container = document.querySelector("div.container");

for (let i = 0; i < numberOfElements; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}
