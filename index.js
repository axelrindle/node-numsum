/**
 * Calculate the sum for given numbers.
 * @module numsum
 * @version 1.0.0
 * @copyright 2018 Axel Rindle <axel.rindle@gmx.de>
 * @author Axel Rindle <axel.rindle@gmx.de>
 * @license MIT
 */
'use strict';

// Require modules
const roundTo = require('round-to');

/**
 * flatten - Removes all nested arrays from an array and stores the values from
 * the nested array in the top-level array.
 *
 * @param {array} arr An array which contains nested arrays.
 *
 * @returns {array} An array with all nested arrays removed.
 *
 * @see https://stackoverflow.com/a/43892140/5423625
 * @since 1.0.0
 */
const flatten = arr => arr.reduce((acc, next) => acc.concat(Array.isArray(next) ? flatten(next) : next), []);


/**
 * round - Round a number to a specific number of decimal places.
 *
 * @param {number} number    The number to round.
 * @param {number} precision The mathematical precision.
 *
 * @returns {number} The rounded number.
 *
 * @since 1.0.0
 */
exports.round = (number, precision = 1) => {
  return roundTo(number, precision);
};

/**
 * sum - Calcualtes the sum of the given numbers. This might be an array or multiple
 * parameters of numbers.
 *
 * @param {array} nums An array of numbers.
 *
 * @returns {number} The sum of all given numbers.
 *
 * @since 1.0.0
 */
exports.sum = (...nums) => {
  // Check for arguments
  if (nums.length < 1) return 0;

  // Flatten array
  nums = flatten(nums);

  // Calculate sum
  let sum = 0;
  for (let num of nums) sum += num;

  // Return
  return sum;
};


/**
 * range - Calculates the sum of all numbers in the given range (both inclusive).
 *
 * @param {number} from The start index.
 * @param {number} to   The end index.
 *
 * @returns {number} The calculated sum.
 *
 * @since 1.0.0
 */
exports.range = (from, to) => {
  let sum = 0;
  for (var i = from; i <= to; i++) sum += i;
  return sum;
};


/**
 * mi - Calculates the expected value for a probability distribution.
 *
 * @param {array} dists The probability distribution.
 *
 * @returns {number} The expected value.
 *
 * @see https://en.wikipedia.org/wiki/Expected_value
 * @since 1.0.0
 */
const mi = exports.mi = (dists) => {
  let mi = 0;

  for (let dist of dists) {
    let x = dist.x;
    let p = dist.p;

    mi += x * p;
  }

  return mi;
}


/**
 * variance - Calculates the variance for a probability distribution.
 *
 * @param {array} dists The probability distribution.
 *
 * @returns {number} The variance value.
 *
 * @see https://en.wikipedia.org/wiki/Variance
 * @since 1.0.0
 */
exports.variance = (dists) => {
  let _mi = mi(dists);
  let variance = 0;

  for (let dist of dists) {
    let x = dist.x;
    let p = dist.p;

    variance += ( (x - _mi) * (x - _mi) ) * p;
  }

  return variance;
};
