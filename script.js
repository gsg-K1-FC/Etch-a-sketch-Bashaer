//append divs to the main div in html
let container = document.getElementById("container");
// create main 16*16 div
function generateGrid(pixles)
{ 
    container.style.setProperty('--grid-rows', pixles);
    container.style.setProperty('--grid-cols', pixles);
    for (let i = 0; i < (pixles*pixles); i++)
    {
        let square = document.createElement("div");
        container.appendChild(square).className = "grid-item";
    }
    // First event: hovering on grids, colors change from white to black
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener('mouseover', () => { item.style.backgroundColor = 'black'; });
    })
}
generateGrid(16);
//reset button
function clearGrid() {
    document.querySelectorAll('.grid-item').forEach(item => item.style = '')
  };
  document.querySelector(".reset-btn").addEventListener('click', clearGrid);

// New grid button
document.querySelector(".grid-btn").addEventListener("click",newGrid)
function newGrid() {
       
        let differentGridSize = prompt("Enter a new grid size(1-100):");
        if (differentGridSize >= 1 && differentGridSize <= 100) {
            generateGrid(differentGridSize);
            clearGrid(differentGridSize)
        } else {
        alert("please enter a size  within 1-100 pixles")  
        }
};
// game instruction's alert
document.querySelector(".menu").addEventListener('click',message)
function message() {
    alert("welcome to the Etch A Sketch game , it's so simple, hover on the  boxes,  colors will change from white to black.")
}
    
