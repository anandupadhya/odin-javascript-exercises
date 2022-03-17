const reverseString = function(string) {
    const length = string.length
    const chars = string.split("")
    let reverseChars = []
    for (i = length - 1; i >= 0; i--) {
        reverseChars.push(chars[i])
    }
    return reverseChars.join('')
};

// console.log(reverseString('hello there'))
// Do not edit below this line
module.exports = reverseString;
