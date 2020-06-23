function checkPermutation (str1, str2) {
    if (str1.length !== str2.length) return false;

    let chars = {};

    for (let i = 0; i < str1.length; i++) {
        let currentChar = str1[i];
        if (chars[currentChar]) {
            chars[currentChar]++;
        }  else {
            chars[currentChar] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        let currentChar = str2[i];
        if (!chars[currentChar]) {
            return false;
        } else {
            chars[currentChar]--;
            if (chars[currentChar] === -1) {
                return false;
            }
        }
    }
    return true;
}

exports.checkPermutation = checkPermutation;
