'use strict';

/*
 |----------------------------------------------------------------------------------------------------------------------
 | A partial to merge arrays.
 |----------------------------------------------------------------------------------------------------------------------
 */

/**
 * More information on [JavaScript Open Standards]{@link https://github.com/jsopenstd/jsopenstd}.
 *
 * @namespace js.partial
 * @version 0.0.1
 *
 * @author Richard King <richrdkng@gmail.com> [GitHub]{@link https://github.com/richrdkng}
 * @license [MIT]{@link https://github.com/jsopenstd/js-partial-foreach/blob/master/license.md}
 */

/**
 * UMD - [returnExports.js pattern]{@link https://github.com/umdjs/umd/blob/master/templates/returnExports.js}
 * For more information and license, check the link below:
 * [UMD GitHub Repository]{@link https://github.com/umdjs/umd}
 */
(function(root, factory) {
    // AMD
    /* istanbul ignore next: ignore coverage test for UMD */
    if (typeof define === 'function' && define.amd) {
        define([], factory);

    // CommonJS
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();

    // Browser
    } else {
        root.js_partial_arrayMerge = factory();
    }
}(this, function() {
    'use strict';

    /**
     * @param {Array}     array   A
     * @param {...Array} [arrays] B
     *
     * @returns {Array} C
     */
    return function arrayMerge(array) {
        if (Object.prototype.toString.call(array) === '[object Array]') {
            return array.concat.apply(
                array,
                Array.prototype.slice.call(arguments, 1)
            );
        }

        return [];
    };
}));
