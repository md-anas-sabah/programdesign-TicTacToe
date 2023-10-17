const { createTicTacToeGame } = require("./tictactoe");

const play = createTicTacToeGame("Messi", "Ronaldo");

let currentPlayer = "X";
let gameStatus = "ongoing";

while (gameStatus === "ongoing") {
  const [validMove, board] = play(currentPlayer, getInput());

  if (validMove) {
    printBoard(board);
    gameStatus = board[0];
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  } else {
    console.log("Invalid move. Try again.");
  }
}

if (gameStatus === "win-X") {
  console.log("Messi wins!");
} else if (gameStatus === "win-O") {
  console.log("Ronaldo wins!");
} else {
  console.log("It's a draw!");
}

function getInput() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readline.question(`Enter a valid move for ${currentPlayer}: `, (move) => {
      readline.close();
      resolve(parseInt(move));
    });
  });
}

function printBoard(board) {
  for (let i = 0; i < 3; i++) {
    for (let j = 1; j <= 3; j++) {
      process.stdout.write(`${board[3 * i + j] || "."}`);
    }
    process.stdout.write("\n");
  }
}
