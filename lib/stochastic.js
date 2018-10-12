/**
 * mi - Calculates the expected value for a probability distribution.
 *
 * @param {array} dists The probability distribution.
 * @returns {number} The expected value.
 *
 * @see https://en.wikipedia.org/wiki/Expected_value
 * @since 1.0.0
 */
exports.mi = (dists) => {
  let mi = 0;

  for (let dist of dists) {
    let x = dist.x;
    let p = dist.p;

    mi += x * p;
  }

  return mi;
};

/**
 * variance - Calculates the variance for a probability distribution.
 *
 * @param {array} dists The probability distribution.
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

/**
 * draw - Calculates the probability for the given named data to be drawn randomly
 *        from a container (e.g. a lottery draw).
 *
 * @param {array}  data    The probability data.
 * @param {object} options The options to apply on the calculation.
 * @return {number} The calculated probability.
 *
 * @see https://en.wikipedia.org/wiki/Urn_problem
 * @since 2.0.0
 */
exports.draw = (data, options) => {
  // default options
  let calcForName = options.calcForName;
  let draws = options.draws || 1;
  let putBackAfterDraw = options.putBackAfterDraw || true;

  // validations
  if (!calcForName)
    throw new Error("calcForName is a required option!");

  if (draws < 1)
    throw new Error("at least one draw is required!");

  // counts
  let reducer = (accu, curr) => accu + curr.count;
  let total = data.reduce(reducer, 0);
  let count = data.filter(el => el.name === options.calcForName)[0].count;

  // calculate!
  if (draws === 1) { // only one draw
    return count / total;
  } else if (draws > 1) { // multiple draws
    if (putBackAfterDraw) { // probabilities do NOT change
      let a = 0; // steps
      let b = count / total; // initial probability
      let p = 1; // calculated probability
      while (a++ < draws) { // multiply 'draws' times
        p *= b;
      }
      return p;
    } else { // probabilities DO change
      // TODO: Implement changing probabilities
      throw new Error("changing probabilities are not supported yet!")
    }
  }
};