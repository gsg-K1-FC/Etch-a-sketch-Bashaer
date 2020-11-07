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
        let differentGridSize = prompt("Enter a single value for the grid's size between (1-100), for example 10 will give you a 10x10 matrix" );
        if (differentGridSize >= 1 && differentGridSize <= 100) {
            
            generateGrid(differentGridSize) ;
            clearGrid(differentGridSize)
        }  
        else if ( differentGridSize > 100) {
            alert("please enter a size within 1-100 ")
        }
        else if  (isNaN (differentGridSize) || differentGridSize.trim()==="") {
            alert("Invalid border size .");
        }
        else {
            clearGrid();
        }
    
      
};
// game instruction's alert
document.querySelector(".menu").addEventListener('click',message)
function message() {
    alert("welcome to the Etch A Sketch game ! It's so simple, hover on the  boxes,  colors will change from white to black (defult color), you can pick another color by clickng the (A random Color)button")
}
// generate random color
document.querySelector(".random-btn").addEventListener("click",generateColor) 
function generateColor() {
    let randomColor = Math.floor(Math.random() * 16777216).toString(16);
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener('mouseover', () => { item.style.backgroundColor = `#${randomColor}`});
    })
}
// return to the default color which is black
document.querySelector(".black-btn").addEventListener("click", returnBlack)
function returnBlack() {
    
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener('mouseover', () => { item.style.backgroundColor = 'black'; });
    })
}