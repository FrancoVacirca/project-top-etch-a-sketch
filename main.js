document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("grid-container");
  const gridSizeRange = document.getElementById("gridSizeRange");
  const gridSizeLabel = document.getElementById("gridSizeLabel");

  gridSizeRange.value = "16";
  createGrid();

  gridSizeRange.addEventListener("input", function () {
    createGrid();
    gridSizeLabel.textContent = gridSizeRange.value + "x" + gridSizeRange.value;
  });

  function createGrid() {
    const currentValue = gridSizeRange.value;
    grid.innerHTML = "";
    grid.style.gridTemplateRows = `repeat(${currentValue}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${currentValue}, 1fr)`;

    for (let i = 0; i < currentValue; i++) {
      for (let j = 0; j < currentValue; j++) {
        const cell = document.createElement("div");
        cell.style.border = "1px solid black";
        cell.style.backgroundColor = "white";
        cell.style.width = "100%";
        cell.style.height = "100%";

        grid.appendChild(cell);

        const colorPicker = document.getElementById("colors");
        colorPicker.addEventListener("input", function () {
          const colorPicked = colorPicker.value;

          cell.addEventListener("click", function () {
            cell.style.backgroundColor = colorPicked;
            //TODO: give an initial value to the event listener draw function so it doesn't have to wait until the user gives him an input color to start drawing 
          });
        });
      }
    }
  }
});
