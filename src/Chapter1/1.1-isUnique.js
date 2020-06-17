function isUnique(str) {
    let foundCharacters = {};
    for (let i = 0; i < str.length; i++) {
        if (foundCharacters[str[i]]) {
            return false;
        }
        foundCharacters[str[i]] = true;
    };
    return true;
}

exports.isUnique = isUnique;

