function URLify(str) {
    return str.split(' ').join('%20');
}

exports.URLify = URLify;
