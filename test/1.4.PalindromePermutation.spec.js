const assert = require('assert');
const testFile = require('../src/Chapter1/1.4.PalindromePermutation');

describe('1.4. Palindrome Permutation', function () {
    describe('1.4.1. Odd Length Palindrome', function () {
        it ('TRUE: "Tact Coa"', function () {
            assert.equal(
                testFile.palindromePermutation("Tact Coa"),
                true
            );
        });

        it('TRUE: ""', function () {
            assert.equal(testFile.palindromePermutation(""),
            true);
        })
        
        it ('FALSE: "bact Coa"', function () {
            assert.equal(
                testFile.palindromePermutation("bact Coa"),
                false
            );
        });
    });

    describe('1.4.2 Even Length Palindrome', function() {
        it ('TRUE: "bambam"', function () {
            assert.equal(
                testFile.palindromePermutation("bambam"),
                true
            );
        });

        it ('FALSE: "banger"', function () {
            assert.equal(
                testFile.palindromePermutation("banger"),
                false
            );
        });
    });
});