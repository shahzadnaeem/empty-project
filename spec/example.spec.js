const Example = require('../src/example')

const NUM_VAL = 2

describe('example', () => {
  let subject

  beforeEach(() => {
    subject = new Example(NUM_VAL)
  })

  it('Test 1', () => {
    expect(subject.getNum()).toBe(NUM_VAL)
  })
})
