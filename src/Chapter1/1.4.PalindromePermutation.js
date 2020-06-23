function palindromePermutation(str) {
    if (str.length < 1) return true;
    let chars = {},
        isOdd = 0,
        lowerCase = str.toLowerCase();
    for (let i = 0; i < lowerCase.length; i++) {
        let currentChar = lowerCase[i];
        if (chars[currentChar]) {
            chars[currentChar]++;
        } else if (currentChar !== ' ') {
            chars[currentChar] = 1;
        }
    }
    for (let char in chars) {
        if (chars[char] % 2 !== 0) {
            isOdd++;
        }
    }
    return isOdd > 1 ? false : true;
}

exports.palindromePermutation = palindromePermutation;