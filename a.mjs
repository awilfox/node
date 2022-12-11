import { describe, it } from 'node:test'
import { deepStrictEqual, fail } from 'node:assert'
function sum(num1, num2) {
  return num1 + num2
}

describe('Math test suite', () => {
  it('it should sum two integers', () => {
    const expected = 10
    const current = sum(8, 2)
    deepStrictEqual(current, expected)
  })
  it('ok', () => {
  })
  it('fail', () => {
    throw new Error('fail')
    fail()
  })
})
it('ok', () => {
})
it('fail', () => {
  deepStrictEqual(1, 2)
})