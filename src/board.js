//
// Start of a tic-tac-toe example
//

const BOARD_SIZE = 9

const EMPTY = '-'
const X = 'X'
const O = 'O'

class Board {
  constructor() {
    this.board = Array(BOARD_SIZE).fill(EMPTY)
    this.currentPlayer = X
    this.turnsTaken = 0
  }

  placeMove(position) {
    // Error checks
    if (position < 0 || position >= BOARD_SIZE) return false
    if (this.board[position] !== EMPTY) return false

    // Place the symbol on the board
    this.board[position] = this.currentPlayer

    this.turnsTaken++

    // Change to the next player
    if (this.currentPlayer === X) {
      this.currentPlayer = O
    } else {
      this.currentPlayer = X
    }

    return true
  }
}

module.exports = {
  Board,
  X,
  O
}
