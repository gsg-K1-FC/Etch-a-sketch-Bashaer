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
        item.addEventListener("mouseover", event => {
            item.style.backgroundColor = "black";
        })
    })
  
}
generateGrid(16);
