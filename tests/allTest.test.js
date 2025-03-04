// npm test
import {subtract, sum, divide, multiply, analyzeArray} from '../sum.js';
import {capitalize, reverseString} from '../capitalize.js'


test('analyze array of numbers', () => {
    const result = analyzeArray([1, 8, 3, 4, 2,6])
    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})


test('adds 1 + 2 === 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('capitalizes the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });


test('reverse a string', () => {
    expect(reverseString('blue')).toBe('eulb')
})

test('subtracts 5 - 4 === 1', () => {
    expect(subtract(5,4)).toBe(1)
})

test('divides 50 / 10 to === 5', () => {
    expect(divide(50,10)).toBe(5)
}) 


test('multiply 10 * 5 === 50', () => {
    expect(multiply(10,5)).toBe(50)
})


