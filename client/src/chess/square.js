class Square {
// export default class Square {
  constructor(cords, color) {
    this.cords = cords;
    this.color = color;
    this.name = this.getName(cords);
  }

  getName(cords) {
    const alpha = 'abcdefgh';

    return alpha[cords[1]] + (cords[0] + 1);
  }
};

module.exports = Square;