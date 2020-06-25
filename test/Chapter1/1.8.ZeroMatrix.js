const assert = require('assert');
const testFile = require ('../Chapter1/');

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
        assert.equal(
            testFile.zeroMatrix("inputMatrix"),
            outputMatrix
        );
    });

    
});




/*

console.log(
    implementZeroMatrix(
    [
        [1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
        [1, 1, 1, 1, 'bad']
    ]
    )
    // implementZeroMatrix(
    //     [
    //         [0, 2, 3, 4, 5],
    //         [0, 1, 2, 3, 4, 5],
    //         [1, 1, 1, 1, 'bad']
    //     ]
    // ) 
)





*/