/*
 - create grids
 - when hover over the cells change their colors, most likely need to loop over the cells and check e.target
 - limit cell size
 - divide problem into smaller pieces and solve them in smaller scale
 - work with a smaller grid to reproduce the result

*/

const grids = document.querySelector(".grid-container");

function makeRows(rows, cols) {
  grids.style.setProperty("--grid-rows", rows);
  grids.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    grids.appendChild(cell).className = "grid-item";
  }
}

makeRows(3, 3);

grids.addEventListener("mouseover", function (e) {
  console.log(e);
  e.style.backgroundColor = "red";
});
