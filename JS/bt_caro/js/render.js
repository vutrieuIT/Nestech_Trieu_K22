import { Constants } from "./Constants.js";
const constants = new Constants();
let matrixGame = [50][50];

function render() {
  const urlParam = new URLSearchParams(window.location.search);
  const row = urlParam.get("row");
  const column = urlParam.get("column");

  // set constants game
  constants.setRow(row);
  constants.setColumn(column);
  constants.setCount(0);

  const table = document.getElementById("table_game");
  for (let i = 1; i <= row; i++) {
    const rowTable = document.createElement("tr");
    for (let j = 1; j <= column; j++) {
      const cell = document.createElement("td");
      cell.classList.add("td_game");
      const content = document.createElement("div");
      content.setAttribute("id", `${i}-${j}`);
      content.classList.add("fixed");
      content.addEventListener("click", () => handleClick(`${i}-${j}`));
      cell.append(content);
      rowTable.append(cell);
    }
    table.append(rowTable);
  }
}

function handleClick(id) {
  processClick(id);
}

function processClick(id) {
  const point = id.split("-");
  console.log(point);
  //   console.log(matrixGame[Number(point[0])][Number(point[1])]);
}

render();
