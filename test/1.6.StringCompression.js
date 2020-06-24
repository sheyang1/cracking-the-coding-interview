const assert = require('assert');
const testFile = require('../src/Chapter1/1.6.StringCompression');

describe('1.6 StringCompression', function () {
    
    it ('"aabcccccaaa" -> "a2b1c5a3"', function () {
        assert.equal(
            testFile.stringCompression("aabcccccaaa"),
            "a2b1c5a3"
        );
    });

    it ('"abc" -> "a1b1c1"', function () {
        assert.equal(
            testFile.stringCompression("abc"),
            "abc"
        );
    });

    it ('"aaaaaaaaaaaaa" -> "a13"', function () {
        assert.equal(
            testFile.stringCompression("aaaaaaaaaaaaa"),
            "a13"
        );
    });

    it ('"abcdef" -> "abcdef"', function () {
        assert.equal(
            testFile.stringCompression('abcdef'),
            'abcdef'
        );
    });
});