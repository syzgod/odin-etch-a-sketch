/*
 TODO - divide problem into smaller pieces and solve them in smaller scale
 TODO - work with a smaller grid to reproduce the result
 TODO - ask for input(prompt from a button) to set up grid max 36*36
 TODO - setup functionality to color picker / shader so as the board reset

*/

const grids = document.querySelector(".grid-container");

function makeRows(rows, cols) {
  grids.style.setProperty("--grid-rows", rows);
  grids.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    // cell.innerText = c + 1;
    grids.appendChild(cell).className = "grid-item";
  }
}

makeRows(32, 32);

const mesh = [...grids.childNodes];

mesh.forEach(function (node) {
  node.addEventListener("mouseenter", function (e) {
    e.target.style.backgroundColor = "red";

    // setTimeout(() => {
    //   e.target.style.backgroundColor = "pink";
    // }, 300);
  });
});
