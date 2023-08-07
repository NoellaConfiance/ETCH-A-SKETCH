let gridSize = 16;


function creategrid () { 
        
    const userInput = prompt('Enter number of squares per side (max 100):', gridSize);

    if (userInput === null) return; 
    const newGridSize= parseInt(userInput, 10);

    if ( newGridSize >0 && newGridSize<= 100){
    gridSize=newGridSize;
    document.getElementById('grid-container').innerHTML = '';
    generateGrid(gridSize);

     } else {
        alert('please enter a valid number between 1 and 100' );
     }
}




function generateGrid(size) {
    const container = document.getElementById('grid-container');
   
    for (let i = 0; i < size * size; i++) {
        const gridsquare = document.createElement('div');
        gridsquare.classList.add('grid-square');

    container.appendChild(gridsquare);
    gridsquare.addEventListener('mouseover' , () => {
        gridsquare.style.backgroundColor ="blue"
    })
}
}
generateGrid(gridSize)

    