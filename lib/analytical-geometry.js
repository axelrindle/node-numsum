// Require modules
const { sum } = require('./util');

/**
 * Checks whether a given object is a valid vector.
 * An object is a valid vector when it is an array and contains three numbers.
 *
 * @param obj The object to check.
 * @throws When the given object is not a valid vector.
 *
 * @see https://en.wikipedia.org/wiki/Euclidean_vector
 * @since 2.0.0
 */
exports.validateVector = validateVector = (obj) => {
  const isValid = Array.isArray(obj) && obj
    .map(el => Number.parseFloat(el))
    .filter(el => !Number.isNaN(el))
    .length === 3;

  if (!isValid) throw new Error(`${obj} is not a valid vector!`);
};

/**
 * Calculates the scalar product for two vectors.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns {number} The scalar product.
 * @throws When the given objects are not valid vectors.
 *
 * @see https://en.wikipedia.org/wiki/Euclidian_vector#Dot_product
 * @since 2.0.0
 */
exports.scalarProduct = (a, b) => {
  // make sure we have valid vectors
  validateVector(a);
  validateVector(b);

  // calculate the scalar product from the two vectors
  let result = 0;
  for (let i = 0; i <= 3; i++) {
    result += sum(a[i], b[i]);
  }

  return result;
};

/**
 * Calculates the length of a vector.
 *
 * @param vector The vector to calculate the length for.
 * @returns {number} The length.
 * @throws When the given object is not a valid vector.
 *
 * @see https://en.wikipedia.org/wiki/Euclidean_vector#Length
 * @since 2.0.0
 */
exports.length = (vector) => {
  // make sure we have a valid vector
  validateVector(vector);

  // calculate the amount of the vector
  return Math.sqrt(
    sum(
      vector[0] * vector[0],
      vector[1] * vector[1],
      vector[2] * vector[2]
    )
  );
};

/**
 * Calculates the cross product for two vectors.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns {number} A new vector, which represents the cross product
 *                   from the two given vectors.
 * @throws When the given objects are not valid vectors.
 *
 * @see https://en.wikipedia.org/wiki/Euclidean_vector#Cross_product
 * @since 2.0.0
 */
exports.crossProduct = (a, b) => {
  // make sure we have valid vectors
  validateVector(a);
  validateVector(b);

  // TODO: Calculate the cross product
};

// Export separate plane module
exports.Plane = require('./plane');