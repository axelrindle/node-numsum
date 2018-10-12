// Import dependencies
const { crossProduct, validateVector } =  require('./analytical-geometry');

module.exports = class Plane {
  constructor(point, directionA, directionB) {
    validateVector(point);
    validateVector(directionA);
    validateVector(directionB);

    this.point = point;
    this.directionA = directionA;
    this.directionB = directionB;
  }

  toParameterForm() {
    let str = "";

    for (let i = 0; i < 3; i++) {
      let param1 = i === 1 ? '+ r *' : '     ';
      let param2 = i === 1 ? '+ s *' : '     ';
      let end = i !== 2 ? '\n' : '';
      str += `(${this.point[i]}) ${param1} (${this.directionA[i]}) ${param2} (${this.directionB[i]})${end}`;
    }

    return str;
  }

  getNormalVector() {
    return crossProduct(this.directionA, this.directionB);
  }
};
