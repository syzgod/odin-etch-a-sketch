/*
 TODO - divide problem into smaller pieces and solve them in smaller scale
 TODO - work with a smaller grid to reproduce the result
 TODO - check prompt numbers are valid or not (maximize grid size)
 TODO - setup functionality to shader
 TODO - click and hold drawing
 TODO - random color toggle
 TODO - color shading toggle
 TODO - state management to control functionality

*/

const colorPicker = document.querySelector(".color-picker");
const clearBtn = document.querySelector(".btn-clear");
const randomBtn = document.querySelector(".btn-random");
const randomToggle = document.querySelector(".btn-random-toggle");
const grids = document.querySelector(".grid-container");
const meshSize = document.querySelector(".board-size");
const shadeToggle = document.querySelector(".btn-shade-toggle");

let mesh = [...grids.childNodes];
let rows;
let columns;
let color = "#000000"; // default value

const randomColor = () => {
  color = "#" + Math.floor(Math.random() * 16777215).toString(16);
};

colorPicker.addEventListener("change", function (e) {
  color = colorPicker.value;
  cellColoring();
});

const boardSize = () => {
  grids.innerHTML = "";
  rows = Number(window.prompt("How many rows do you want?", 20));
  columns = Number(window.prompt("How many columns do you want?", 20));
  if (rows > 100 || columns > 100) {
    alert("Maximum 100 can be entered");
  } else makeRows(rows, columns);
};

meshSize.addEventListener("click", boardSize);

function makeRows(rows, cols) {
  grids.style.setProperty("--grid-rows", rows);
  grids.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    grids.appendChild(cell).className = "grid-item";
  }
  mesh = [...grids.childNodes];
  cellColoring();
}

const cellColoring = () => {
  mesh.forEach((node) => {
    node.addEventListener("mouseenter", function () {
      node.style.backgroundColor = color;

      // setTimeout(() => {
      //   e.target.style.backgroundColor = "pink";
      // }, 300);
    });
  });
};

clearBtn.addEventListener("click", () => {
  grids.innerHTML = "";
  randomBtn.style.backgroundColor = "";
  color = "#000000";
  console.log(color);
  makeRows(rows, columns);
});

randomBtn.addEventListener("click", function () {
  randomToggleActive = false;
  if (randomToggleActive === false) {
    randomColor();
    console.log(color);
    cellColoring();
    randomBtn.style.backgroundColor = color;
  }
});

let randomToggleActive = false;

randomToggle.addEventListener("click", function () {
  randomToggleActive = true;
  if (randomToggleActive) {
    mesh.forEach((node) => {
      node.addEventListener("mouseover", function () {
        randomColor();
        console.log(color);
        node.style.backgroundColor = color;
      });
    });
  }
});

shadeToggle.addEventListener("click", function () {
  mesh.forEach((node) => {
    node.addEventListener("mouseover", function () {
      let grabbedColor = node.getAttribute("style");
      node.style.backgroundColor = color + "60";
      console.log(node.style.backgroundColor);
    });
  });
});
