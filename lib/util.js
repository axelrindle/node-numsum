// Require modules
const roundTo = require('round-to');
const flatten = require('flatten');

/**
 * Round a number to a specific number of decimal places.
 *
 * @param {number} number    The number to round.
 * @param {number} precision The mathematical precision.
 * @returns {number} The rounded number.
 *
 * @since 1.0.0
 */
exports.round = (number, precision = 1) => {
  return roundTo(number, precision);
};

/**
 * Calculates the sum of the given numbers. This might be an array or multiple
 * parameters of numbers.
 *
 * @param {array} nums An array of numbers.
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
 * Calculates the sum of all numbers in the given range (both inclusive).
 *
 * @param {number} from The start index.
 * @param {number} to   The end index.
 * @returns {number} The calculated sum.
 *
 * @since 1.0.0
 */
exports.range = (from, to) => {
  let sum = 0;
  for (let i = from; i <= to; i++) sum += i;
  return sum;
};