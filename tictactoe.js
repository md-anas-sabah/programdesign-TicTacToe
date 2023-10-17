"use strict";

const createTicTacToeGame = (xName, oName) => {
  let currentPlayer = "X";
  let gameStatus = "ongoing";

  const players = {
    X: xName,
    O: oName,
  };

  const board = Array(10).fill(null);

  const checkForWin = (player) => {
    const winPatterns = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    return winPatterns.some(
      ([a, b, c]) =>
        board[a] === player && board[b] === player && board[c] === player
    );
  };

  const isBoardFull = () => board.slice(1).every((cell) => cell !== null);

  const isValidMove = (move) => move >= 1 && move <= 9 && board[move] === null;

  const computeStatus = () => {
    if (checkForWin("X")) {
      return "win-X";
    } else if (checkForWin("O")) {
      return "win-O";
    } else if (isBoardFull()) {
      return "draw";
    } else {
      return "ongoing";
    }
  };

  const makeMove = (player, move) => {
    if (gameStatus !== "ongoing") {
      return [false, "The game has already ended."];
    }

    if (player !== currentPlayer) {
      return [false, `It's not ${player}'s turn.`];
    }

    if (!isValidMove(move)) {
      return [false, "Invalid move. Try again."];
    }

    board[move] = currentPlayer;
    gameStatus = computeStatus();
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    return [true, board.slice(1)];
  };

  return makeMove;
};

module.exports = { createTicTacToeGame };
