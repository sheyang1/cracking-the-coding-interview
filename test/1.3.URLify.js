const assert = require('assert');
const testFile = require('../src/Chapter1/1.3.URLify');

describe('1.3. URLify', function () {

    it ('TRUE: "Mr John Smith" -> "Mr%20John%20Smith"', function () {
        assert.equal(
            testFile.URLify("Mr John Smith", 13),
            "Mr%20John%20Smith"
        );       
    });
 
});