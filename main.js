const gridContainer = document.getElementById("grid-container");

function createGrid(value) {
  gridContainer.innerHTML = "";

  const numRows = value;
  const numCols = value;

  gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const cell = document.createElement("div"); 
      cell.classList.add("grid-cell"); 
      gridContainer.appendChild(cell); 
    }
  }

  const cellSize = numCols;
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach((cell) => {
    cell.style.width = cellSize;
    cell.style.height = cellSize;
  });
}

const gridSizeRange = document.getElementById("gridSizeRange");
const gridSizeLabel = document.getElementById("gridSizeLabel");

function updateGridSizeLabel() {
  const value = gridSizeRange.value;
  gridSizeLabel.textContent = value + "x" + value;
  createGrid(value);
}

gridSizeRange.addEventListener("input", updateGridSizeLabel);

createGrid(gridSizeRange.value);
updateGridSizeLabel();
