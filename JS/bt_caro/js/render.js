let matrixGame = Array.from(Array(50), () => new Array(50));
let player = X;

function render() {
  const urlParam = new URLSearchParams(window.location.search);
  const row = urlParam.get("row");
  const column = urlParam.get("column");

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
  const row = Number(point[0]);
  const column = Number(point[1]);
  console.log("processClick");
  if (matrixGame[row][column] !== undefined) {
    console.log("!undefined");
    return;
  } else {
    if (player === X) {
      matrixGame[row][column] = X;
      document.getElementById(id).innerHTML = XText;
    }
    if (player === O) {
      matrixGame[row][column] = O;
      document.getElementById(id).innerHTML = OText;
    }
    // check win
    if (checkWin(player)) {
      return WIN;
    }

    // check draw
    if (checkDraw(player)) {
      return DRAW;
    }
    //   chuyen nguoi choi
    player = player === X ? O : X;
  }
}

function checkWin(player) {
  // todo
  return false;
}
function checkDraw(player) {
  // todo
  return false;
}

render();
