const { ticTacToe } = require("./tictactoe");

const play = ticTacToe("Messi", "Ronaldo");

let [result, board] = play("X", 1);

const printBoard = (board) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 1; j <= 3; j++) {
      process.stdout.write(`${board[3 * i + j] || "."}`);
    }
    process.stdout.write("\n");
  }
};

printBoard(board);
