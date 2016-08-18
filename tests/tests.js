'use strict';

const assert     = require('assert'),
      vars       = require('./variables'),
      arrayMerge = require(vars.path);

module.exports = {
    'js-partial-array-merge' : () => {
        assert.deepStrictEqual(
            arrayMerge(),
            []
        );

        let a = [1, 2, 3],
            b = [4, 5, 6];

        assert.deepStrictEqual(
            arrayMerge(a),
            [
                1, 2, 3
            ]
        );

        assert.deepStrictEqual(
            arrayMerge(b),
            [
                4, 5, 6
            ]
        );

        assert.deepStrictEqual(
            arrayMerge(a, b),
            [
                1, 2, 3, 4, 5, 6
            ]
        );

        assert.deepStrictEqual(
            arrayMerge(a, a),
            [
                1, 2, 3, 1, 2, 3
            ]
        );

        assert.deepStrictEqual(
            arrayMerge(b, b),
            [
                4, 5, 6, 4, 5, 6
            ]
        );
    }
};
