function stringCompression(str) {
    let compressedStr = '',
        currentCharCount = 1;
    for (let i = 0; i < str.length; i++) { 
        if (str[i] === str[i + 1]) {
            currentCharCount++;
        } else {
            compressedStr += str[i] + currentCharCount.toString();
            currentCharCount = 1;
        }
        if (compressedStr.length > str.length) {
            return str;
        }
    }
    return compressedStr;
}

exports.stringCompression = stringCompression;
