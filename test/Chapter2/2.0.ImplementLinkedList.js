const assert = require('assert');
const testFile = require ('../../src/Chapter2/1.0.ImplementLinkedList');

describe('1.8 ZeroMatrix', function () {
    
    xit ('creates a linked list', function () {
        let linkedLList = new testFile.Node(1);
        assert.deepEqual(
            testFile.zeroMatrix(inputMatrix),
            outputMatrix
        );
    });
});