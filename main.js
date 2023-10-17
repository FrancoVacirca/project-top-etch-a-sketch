// Wait for the DOM to load before accessing elements
document.addEventListener('DOMContentLoaded', function () {
  const grid = document.getElementById('grid-container');
  const gridSizeRange = document.getElementById('gridSizeRange');
  const gridSizeLabel = document.getElementById('gridSizeLabel'); // Added this line

  gridSizeRange.value = '16';
  createGrid();
  
  gridSizeRange.addEventListener('input', function() {
      createGrid();
      gridSizeLabel.textContent = gridSizeRange.value + 'x' + gridSizeRange.value; // Update the label
  });

  function createGrid() {
      const currentValue = gridSizeRange.value;
      grid.innerHTML = '';
      grid.style.gridTemplateRows  = `repeat(${currentValue}, 1fr)`;
      grid.style.gridTemplateColumns  = `repeat(${currentValue}, 1fr)`;

      for (let i = 0; i < currentValue; i++) {
          for (let j = 0; j < currentValue; j++) {

              const cell = document.createElement('div');
              cell.style.border = '1px solid black';
              cell.style.backgroundColor = 'white';
              cell.style.width = '10px';
              cell.style.height = '10px';

              grid.appendChild(cell);
          }
      }
  }
});
