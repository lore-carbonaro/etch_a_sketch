const body = document.querySelector("body")
const button = document.createElement("button");
button.classList.add("btn");
body.appendChild(button);

/* Create grid */
function makeGrid(size) {
    let container = document.querySelector("#container");
    for (let i = 0; i < size; i++) {
      let column = document.createElement("div");
      column.classList.add("column");
      for (let j = 0; j < size; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        column.appendChild(cell);
      }
      container.appendChild(column);
    }
}



/* Clear container */
function clearBox(elementID)
{
    document.querySelector(elementID).innerHTML = "";
}



/* User input to create grid */
button.addEventListener("click", () => {
    clearBox("#container");
    let size = prompt("How big should the grid be?");

    if (size > 100) {
        alert("Too big, please choose a smaller value");
    } else {
        makeGrid(size);
        const cell = document.querySelectorAll(".cell");

        for(let i = 0; i < cell.length; i++) {
            cell[i].addEventListener("mouseenter", () => {
            cell[i].style.backgroundColor = "black";
            });
        }
    }
})