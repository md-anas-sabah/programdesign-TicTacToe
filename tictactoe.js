"use strict";

const ticTacToe = (xName, oName) => {
  const X = "X"; // 🐍
  const O = "O"; // 🪜

  const players = {
    X: xName,
    O: oName,
  };

  //   Visual representation of Data Structure
  const board = [
    "ongoing", // ongoing, win-x,win-o,draw
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ];

  const currentPlayer = X;

  // concept's lookup table
  const nextPlayer = {
    X: O,
    O: X,
  };

  function isValidMove(move) {
    // move should bet the right index not already taken one
    return 1 <= move && move <= 9 && board[move] === "";
  }

  function computeStatus() {
    const result = "ongoing";

    const winningCombos = [
      // rows
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      // columns
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      //diagonals
      [1, 5, 9],
      [3, 5, 8],
    ];

    // check for a win X
    //  check for a win O
    winningCombos.forEach(([i1, i2, i3]) => {
      if (
        board[i1] === board[i2] &&
        board[i2] === board[i3] &&
        board[i3] === currentPlayer
      ) {
        result = `win-${currentPlayer}`;
      }
    });
    // check for draw
    let isTaken = false;
    for (let i = 0; i <= 9; i++) {
      if (board[i] !== "") {
        isTaken = true;
      }
    }
    if (isTaken) return "draw";

    // continue the game
    return result;
  }

  return (player, move) => {
    // validate right player : return <error> if not
    if (player !== currentPlayer) {
      return [false, `Not your turn. It's ${currentPlayer}'s turn.`];
    }
    // validate the right move: return <error> if not
    if (!isValidMove(move)) {
      return [false, "Invalid move, try again!"];
    }
    board[move] = currentPlayer;
    board[0] = computeStatus();
    currentPlayer = nextPlayer[currentPlayer];
    // progress the game:
    // 1. update the game
    // 2. update the game status
    // 3. change the current player
    // return player
    return [true, board];
  };
};

module.exports = { ticTacToe };
