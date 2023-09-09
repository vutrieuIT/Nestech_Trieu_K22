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
  const modal = document.getElementById("modal");
  const contentEndGame = document.getElementById("content-end-game");
  switch (processClick(id)) {
    case WIN:
      contentEndGame.innerHTML = `${player} thắng`;
      modal.style.display = "block";

      break;
    case DRAW:
      //   const modal = document.getElementById("modal");
      contentEndGame.innerHTML = `game hòa`;
      modal.style.display = "block";
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

    const displayPlayer = document.getElementById("player");
    displayPlayer.innerHTML = `PLAYER : ${player}`;
  }
}

function checkWin(row, column) {
  return (
    checkWin1(row, column) ||
    checkWin2(row, column) ||
    checkWin3(row, column) ||
    checkWin4(row, column)
  );
}
function checkDraw(count) {
  if (count === rows * columns) return true;
  return false;
}

// check doc
function checkWin1(row, column) {
  let cnt = 1;
  for (let i = 1; i < 5; i++)
    if (row + i <= rows && matrixGame[row + i][column] === player) cnt++;
    else break;

  for (let i = 1; i < 5; i++)
    if (row - i > 0 && matrixGame[row - i][column] === player) cnt++;
    else break;

  return cnt >= 5 ? true : false;
}

// check ngang
function checkWin2(row, column) {
  let cnt = 1;
  for (let i = 1; i < 5; i++)
    if (column + i <= columns && matrixGame[row][column + i] === player) cnt++;
    else break;

  for (let i = 1; i < 5; i++)
    if (column - i > 0 && matrixGame[row][column - i] === player) cnt++;
    else break;

  return cnt >= 5 ? true : false;
}

// check cheo trai tren - phai duoi
function checkWin3(row, column) {
  let cnt = 1;
  for (let i = 1; i < 5; i++)
    if (
      row + i <= rows &&
      column + i <= columns &&
      matrixGame[row + i][column + i] === player
    )
      cnt++;
    else break;

  for (let i = 1; i < 5; i++)
    if (
      row - i > 0 &&
      column - i > 0 &&
      matrixGame[row - i][column - i] === player
    )
      cnt++;
    else break;
  return cnt >= 5 ? true : false;
}

// check cheo trai duoi - phai tren ()
function checkWin4(row, column) {
  let cnt = 1;
  for (let i = 1; i < 5; i++)
    if (
      row - i > 0 &&
      column + i <= columns &&
      matrixGame[row - i][column + i] === player
    )
      cnt++;
    else break;

  for (let i = 1; i < 5; i++)
    if (
      row + i > rows &&
      column - i > 0 &&
      matrixGame[row + i][column - i] === player
    )
      cnt++;
    else break;
  return cnt >= 5 ? true : false;
}

function playAgain(play) {
  if (play) {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    render();
  } else {
    window.location =
      "http://127.0.0.1:5500/Nestech_Trieu_K22/JS/bt_caro/home.html";
  }
}

render();
