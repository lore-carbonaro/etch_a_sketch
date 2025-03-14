const body = document.querySelector("body")
const button = document.createElement("button");
button.classList.add("btn");
button.textContent = "Create a grid!";
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


/* Function to get random number in specified range */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


/* Function to get random color */
function randomHsl() {
    return 'hsla(' + getRandomArbitrary(255, 280) + ', ' + getRandomArbitrary(50, 75) + '%, ' + getRandomArbitrary(25, 75) + '%, 1)';
}


/* Function that gives cells a different color when moused over */
function colorCells() {
    const cell = document.querySelectorAll(".cell");
    for(let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("mouseover", () => {
        cell[i].style.backgroundColor = randomHsl();
        });
    }
}


/* Initialize */
button.addEventListener("click", () => {
    clearBox("#container");
    let size = prompt("How big should the grid be?");

    if (size > 100) {
        alert("Too big, please choose a smaller value");
    } else {
        makeGrid(size);
        colorCells();
    }
});