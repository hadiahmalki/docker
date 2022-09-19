/* eslint-disable no-undef */
const findAverage = require('../calculator')

// eslint-disable-next-line no-undef
describe('calculator library', () => {
  // eslint-disable-next-line no-undef
  test('division of 12 to 3 should return 4', () => {
    const expectedOutput = 4
    const actualOutput = findAverage(12, 3)
    // eslint-disable-next-line no-undef
    expect(actualOutput).toBe(expectedOutput)
  })

  test('division of 12 to -4 should return 0', () => {
    const expectedOutput = 0
    const actualOutput = findAverage(12, -4)
    expect(actualOutput).toBe(expectedOutput)
  })

  test(`average of string format 'users' to 'photos' should return 0`, () => {
    expect(() => findAverage('users', 'photos')).toThrow(TypeError)
  })
})
