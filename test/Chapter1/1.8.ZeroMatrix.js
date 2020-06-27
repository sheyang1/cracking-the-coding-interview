const assert = require('assert');
const testFile = require ('../../src/Chapter1/1.8.ZeroMatrix');

describe('1.8 ZeroMatrix', function () {
    
    it ('handles a 2D array with integers', function () {
        let inputMatrix = [
            [1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4],
            [1, 1, 1, 1, 1]
        ],
        outputMatrix = [
            [0, 2, 3, 4, 5],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1]
        ];
        assert.deepEqual(
            testFile.zeroMatrix(inputMatrix),
            outputMatrix
        );
    });

    it ('handles a 2D array with different data types', function () {
        let inputMatrix = [
            [1, 2, 3, 4, 5],
            [0, 1, '2', 3, 4],
            [1, 1, 1, 1, null]
        ],
        outputMatrix = [
            [0, 2, 3, 4, 5],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, null]
        ];
        assert.deepEqual(
            testFile.zeroMatrix(inputMatrix),
            outputMatrix
        );
    });

    it ('handles rows and columns with multiple 0s', function () {
        let inputMatrix = [
            [0, 2, 3, 0, 5],
            [0, 1, 0, 3, 4],
            [1, 1, 1, 1, null]
        ],
        outputMatrix = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 0, 0, null]
        ];
        assert.deepEqual(
            testFile.zeroMatrix(inputMatrix),
            outputMatrix
        );
    });

    it ('handles an empty matrix', function () {
        let inputMatrix = [
            []
        ],
        outputMatrix = [
            []
        ];
        assert.deepEqual(
            testFile.zeroMatrix(inputMatrix),
            outputMatrix
        );
    });
});