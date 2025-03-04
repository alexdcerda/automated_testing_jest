import {caesarCipher} from '../ceasarCipher.js'


test('xyz to shift to abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

