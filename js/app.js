let game = [
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

// create an element
let board = document.createElement("PRE");
// append the board to body
document.body.appendChild(board);
// create a button with an event handle and with textnode & append
let button = document.createElement("button");

// button.onclick = fire;

let btnText = document.createTextNode("Fire!");

document.body.appendChild(button);

button.appendChild(btnText);

// draw the board

function drawBoard() {
  var boardContents = "";
  var i, j;
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      boardContents = boardContents + game[i][j];
      // appends the array contents for each board square
    }
    boardContents = boardContents + "<br>";
    // Appends line breakat end of each horizontakl line
  }
  return boardContents;
}

board.innerHTML = drawBoard();
