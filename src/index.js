/*
 TODO - divide problem into smaller pieces and solve them in smaller scale
 TODO - work with a smaller grid to reproduce the result
 TODO - ask for input(prompt from a button) to set up grid max 64*64
 TODO - setup functionality to color picker / shader so as the board reset

*/

const colorPicker = document.querySelector(".color-picker");
const clearBtn = document.querySelector(".btn-clear");
const randomBtn = document.querySelector(".btn-random");
const grids = document.querySelector(".grid-container");
const meshSize = document.querySelector(".board-size");

let rows;
let columns;
let color = colorPicker.value;

colorPicker.addEventListener("change", function (e) {
  color = colorPicker.value;
});

const boardSize = () => {
  grids.innerHTML = "";
  rows = Number(window.prompt("How many rows do you want?", 20));
  columns = Number(window.prompt("How many columns do you want?", 20));
  makeRows(rows, columns);
};

meshSize.addEventListener("click", boardSize);

function makeRows(rows, cols) {
  grids.style.setProperty("--grid-rows", rows);
  grids.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    grids.appendChild(cell).className = "grid-item";
  }
  const mesh = [...grids.childNodes];

  mesh.forEach(function (node) {
    node.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = color;

      // setTimeout(() => {
      //   e.target.style.backgroundColor = "pink";
      // }, 300);
    });
  });
}

clearBtn.addEventListener("click", () => {
  grids.innerHTML = "";
  makeRows(rows, columns);
});

randomBtn.addEventListener(
  "click",
  (randomColor = () => {
    color =
      "#" +
      Math.floor(Math.random() * (0xffffff + 1))
        .toString(16)
        .padStart(6, "0");
  })
);
