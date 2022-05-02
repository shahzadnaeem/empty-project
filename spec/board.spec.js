const Board = require('../src/board')

describe('Board', () => {
  it('Create a new board', () => {
    const board = new Board.Board()

    expect(board.board.length).toBe(9)
  })

  it('Can place an X at 0 on a new board', () => {
    const board = new Board.Board()

    const result = board.placeMove(0)

    expect(result).toBe(true)
  })
})
