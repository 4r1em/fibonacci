/**
* @param {ingeger} input  valut to calculate the Fibonacci number
* @returns {number} value of max fibonaccis number 
*/
module.exports = (input) => {
    // myAwsesomeAlgorithm
    if (!Number.isInteger(input)) throw new Error('Number must be int');
    if (input < 0) throw new Error('Number must be positive')
    if (input <= 1) return input

    let start = 0
    let point = 1
    let end

    for (let i = 1; i < input; i++) {
        end = start + point
        start = point
        point = end

    }
    return point
}

