function isUnique(str) {
    let foundCharacters = {};
    for (let i = 0; i < str.length; i++) {
        if (foundCharacters[str[i]]) {
            return false;
        }
        foundCharacters[str[i]] = true;
    }
    return true;
}

function isUniqueNoDS(str) {
    let sorted = str.split('').sort().join('');
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i+1]) {
            return false;
        }
    }
    return true;
}

exports.isUnique = isUnique;
exports.isUniqueNoDS = isUniqueNoDS;

