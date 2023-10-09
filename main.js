const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div'); //creates a new div when called
        cell.classList.add('grid-cell'); //add the cell a style for css
        gridContainer.appendChild(cell); //append cell to gridContainer
    } 
}