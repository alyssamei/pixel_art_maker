function makeGrid(event) {
    // clears table content
    table.innerHTML = '';
    
    // define size and color inputs
    const height = document.getElementById('gridHeight').value;
    const width = document.getElementById('gridWidth').value;
    let color = document.getElementById('gridColor').value;
    
    // redefies color value upon user input
    gridColor.addEventListener('input', function() {
        color = document.getElementById('gridColor').value;
    });

    // creates a table based on user input of height i and width j
    for (i = 0; i < height; i++) {
        const row = document.createElement('tr');
        for (j = 0; j < width; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
            // allows user to change the background color of each cell
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = color;
            });
        };
        table.appendChild(row);
    };
    event.preventDefault();
};

// calls makeGrid() once user clicks submit
submit.addEventListener('click', makeGrid);
