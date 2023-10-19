document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("grid-container");
  const gridSizeRange = document.getElementById("gridSizeRange");
  const gridSizeLabel = document.getElementById("gridSizeLabel");
  let mouseDown = false;
  const colorPicker = document.getElementById("colors");
  let currentColor = "black";
  const brush = document.getElementById("paint-brush");
  const eraser = document.getElementById("eraser");
  const clear = document.getElementById("clear");
  let enableDraw = true;

  gridSizeRange.value = "16";
  createGrid();

  gridSizeRange.addEventListener("input", function () {
    createGrid();
    gridSizeLabel.textContent = gridSizeRange.value + "x" + gridSizeRange.value;
  });

  colorPicker.addEventListener("input", function () {
    currentColor = colorPicker.value;
  });

  brush.addEventListener("click", function () {
    enableDraw = true;
  });

  eraser.addEventListener("click", function () {
    enableDraw = false;
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

        cell.addEventListener("mousedown", function () {
          mouseDown = true;
          cell.style.backgroundColor = currentColor;
          if (enableDraw == false) {
            mouseDown = true;
            cell.style.backgroundColor = "white";
          }
        });

        cell.addEventListener("mouseover", function () {
          if (mouseDown == true && enableDraw == true) {
            cell.style.backgroundColor = currentColor;
          } else if (mouseDown == true && enableDraw == false) {
            mouseDown = true;
            cell.style.backgroundColor = "white";
          }
        });

        cell.addEventListener("mouseup", function () {
          mouseDown = false;
        });

        clear.addEventListener("click", function () {
          cell.style.backgroundColor = "white";
        });

        grid.appendChild(cell);
      }
    }
  }
});
