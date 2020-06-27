const assert = require('assert');
const testFile = require ('../../src/Chapter8/8.4.PowerSet');

describe('8.4 Power Set', function () {
    it ('[]', function () {
        assert.deepEqual(
            testFile.powerset([]),
            [[]]
        );
    }),
    it ('[1,2]', function () {
        assert.deepEqual(
            testFile.powerset([1, 2]),
            [[], [1], [2], [1,2]]
        );
    });
});

