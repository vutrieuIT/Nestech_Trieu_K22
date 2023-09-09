let matrixGame;
let player;
let rows, columns;
let count;

function render() {
  const urlParam = new URLSearchParams(window.location.search);
  rows = urlParam.get("row");
  columns = urlParam.get("column");

  // set variable game
  count = 0;
  matrixGame = Array.from(Array(51), () => new Array(51));
  player = X;

  const table = document.getElementById("table_game");
  table.innerHTML = "";

  for (let i = 1; i <= rows; i++) {
    const rowTable = document.createElement("tr");
    for (let j = 1; j <= columns; j++) {
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
  switch (processClick(id)) {
    case WIN:
      alert("win");
      break;
    case DRAW:
      setTimeout(function () {
        alert("game hòa!!!");

        // reset game
        render();
      }, 100);
      break;
      break;
    default:
      break;
  }
}

function processClick(id) {
  const point = id.split("-");
  const row = Number(point[0]);
  const column = Number(point[1]);
  console.log("processClick");
  if (matrixGame[row][column] !== undefined) {
    console.log("!undefined");
    return;
  } else {
    count++;
    if (player === X) {
      matrixGame[row][column] = X;
      document.getElementById(id).innerHTML = XText;
    }
    if (player === O) {
      matrixGame[row][column] = O;
      document.getElementById(id).innerHTML = OText;
    }
    // check win
    if (checkWin(row, column)) {
      return WIN;
    }

    // check draw
    if (checkDraw(count)) {
      return DRAW;
    }
    //   chuyen nguoi choi
    player = player === X ? O : X;
  }
}

function checkWin(row, column) {
  // todo
  return false;
}
function checkDraw(count) {
  if (count === rows * columns) return true;
  return false;
}

render();
