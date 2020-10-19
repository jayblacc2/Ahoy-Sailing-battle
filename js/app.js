var x, y, direction;
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
let board = document.createElement("div");
board.classList.add("board");
// append the board to body
document.body.appendChild(board);
// create a button with an event handle and with textnode & append
let button = document.createElement("button");
button.classList.add("btn");
button.onclick = fire;

let btnText = document.createTextNode("Fire!");

document.body.appendChild(button);

button.appendChild(btnText);

// draw the board structure
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

x = prompt(
  "Where would you like to place your ship  Enter an X coordinate:(0-8)"
);
y = prompt(
  "Where would you like to place your ship  Enter an Y coordinate:(0-8)"
);
x = Number(x);
y = Number(y);
direction = prompt("Place (h)orizontally, (v)ertically");

if (direction[0] == "h") {
  var c;
  for (c = x; c < x + 4; c++) {
    game[y][c] = "#";
  }
}

if (direction[0] == "v") {
  var c;
  for (c = x; c < x + 4; c++) {
    game[c][x] = "#";
  }
}

board.innerHTML = drawBoard();

function fire() {
  var fireX = prompt(
    "Where would you like to fire? Enter an X coordinate: (0-8)"
  );
  var fireY = prompt(
    "Where would you like to fire? Enter an Y coordinate: (0-8)"
  );

  // converting the inputs to number

  fireX = Number(fireX);
  fireY = Number(fireY);

  if (game[fireY][fireX] == ".") {
    alert("You Missed.");
  } else if (game[fireY][fireX] == "*") {
    alert("You already hit a ship there");
  } else {
    alert("Kaboom! You hit a ship");
    game[fireY][fireX] == "*";
    board.innerHTML = drawBoard();
  }

  var shipfound, i, j;
  for (i = 0; i < 9; I++) {
    for (j = 0; j < 9; j++) {
      if (game[i][j] != "." && game[i][j] != "*") {
        shipfound = true;
      }
    }
  }
  if (!shipfound) {
    alert("All ships have been sunk. well done Captain! Game over");
    document.body.removeChild(button);
  }
}
