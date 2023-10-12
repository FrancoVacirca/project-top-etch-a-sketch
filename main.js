const gridContainer = document.getElementById("grid-container");

function createGrid(value) {
  gridContainer.innerHTML = "";

  const numRows = value;
  const numCols = value;

  gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const cell = document.createElement("div"); //creates a new div when called
      cell.classList.add("grid-cell"); //add the cell a style for css
      gridContainer.appendChild(cell); //append cell to gridContainer
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
  createGrid(value); //recreate the grid with the new size
}

gridSizeRange.addEventListener("input", updateGridSizeLabel);

//initialize the grid with the default size
createGrid(gridSizeRange.value);
updateGridSizeLabel();
