
export function analyzeArray(arr) {
    const length = arr.length
    
    let sum = 0;
    for (const num of arr) {
      sum += num;}

    const average = sum / length
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    return {average, min, max, length}
}


export function sum(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b
}


export function divide(a, b) {
    return a / b
}

export function multiply(a, b) {
    return a * b
}