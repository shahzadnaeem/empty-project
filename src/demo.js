//
// Demo of initial tic-tac-toe implementation
//

const Board = require('./board')

const board = new Board.Board()

console.log(board)

board.placeMove(0)
board.placeMove(3)
board.placeMove(2)
board.placeMove(5)
board.placeMove(1)

console.log(board)
