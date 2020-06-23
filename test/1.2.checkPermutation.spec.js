const assert = require('assert');
const testFile = require('../src/chapter1/1.2.checkPermutation');

describe('1.1.2 Check Permutation', function (){
    it('TRUE: "abc", "cba"', function () {
        assert.equal(
            testFile.checkPermutation("abc", "cba"),
            true
        )
    });

    it('TRUE: "", ""', function () {
        assert.equal(
            testFile.checkPermutation("", ""),
            true
        )
    });

    it('TRUE: "", ""', function () {
        assert.equal(
            testFile.checkPermutation("", ""),
            true
        )
    });

    it('TRUE: "catchy", "yatchc"', function () {
        assert.equal(
            testFile.checkPermutation("catchy", "yatchc"),
            true
        );
    });

    it('TRUE: "Abc", "cba"', function () {
        assert.equal(
            testFile.checkPermutation("Abc", "cba"),
            false
        );
    });

    it('TRUE: "ab c", "b ac"', function () {
        assert.equal(
            testFile.checkPermutation("ab c", "b ac"),
            true
        );
    });
    
    it ('FALSE: "banana", "phone"', function () {
        assert.equal(
            testFile.checkPermutation("banana", "phone"),
            false
        );       
    });

});


