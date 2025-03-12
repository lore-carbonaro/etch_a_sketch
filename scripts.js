function makeGrid(size) {
    let screen = document.querySelector("#container");
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
  
makeGrid(16);


const cell = document.querySelectorAll(".cell");

for(let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("mouseenter", () => {
        cell[i].style.backgroundColor = "black";
    });
}