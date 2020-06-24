const assert = require('assert');
const testFile = require('../src/Chapter1/1.5.OneAway');

describe('1.5 One Away', function () {
    
    it ('TRUE: "", ""', function () {
        assert.equal(
            testFile.oneAway("", ""),
            true
        );
    });

    it ('TRUE: "pale", "ple', function () {
        assert.equal(
            testFile.oneAway("pale", "ple"),
            true
        );
    });
    
    it ('TRUE: "aaab", "abab', function () {
        assert.equal(
            testFile.oneAway("aaab", "abab"),
            true
        );
    });

    it('TRUE: "pale, bale', function () {
        assert.equal(
            testFile.oneAway("pale", "bale"),
            true
        );
    })
    
    it('FALSE: "pale, "bake"', function () {
        assert.equal(
            testFile.oneAway("pale", "bake"),
            false
        );
    })

    it('FALSE: "pale, "bales"', function () {
        assert.equal(
            testFile.oneAway("pale", "bales"),
            false
        )
    })
    
});