const assert = require('assert');
const testFile = require('../src/Chapter1/1.1-isUnique');
const testFile2 = require('./')

describe('1.1. Is Unique', function () {

    describe('1.1.1. With Data Structure', function () {
        it('TRUE: "monkey"', function () {
            assert.equal(
                testFile.isUnique("monkey"),
                true
            );
        });

        it('FALSE: "banana"', function () {
            assert.equal(
                testFile.isUnique("banana"),
                false
            );
        });
    });

    describe('1.1.2. Without Data Structure', function () {
        xit('TRUE: "monkey"', function () {
            assert.equal(
                testFile.isUniqueNoDS("monkey"),
                true
            );
        });

        xit('FALSE: "banana"', function () {
            assert.equal(
                testFile.isUniqueNoDS("banana"),
                false
            );
        });
    });

});
