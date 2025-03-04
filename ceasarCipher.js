/**
A Caesar cipher is a simple substitution cipher used by Julius Caesar. In this cipher, 
each letter in the plaintext is shifted a certain number of places down (or up) the 
alphabet. For example, with a shift factor of 3

'a' becomes 'd'
'b' becomes 'e'
 */

export function caesarCipher(str, shift) {
    const effectiveShift = shift % 26;
  
    return String(str)
      .split('')
      .map(char => {
        if (!/[a-zA-Z]/.test(char)) return char;
  
        const isUpperCase = char === char.toUpperCase();
        const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  
        const shiftedCode = ((char.charCodeAt(0) - base + effectiveShift + 26) % 26) + base;
  
        return String.fromCharCode(shiftedCode);
      })
      .join('');
  }
