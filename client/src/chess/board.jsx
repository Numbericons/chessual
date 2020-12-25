// import Square from './square';

const Square = require("./square") 

// class Board {
export default class Board {
  constructor() {
    this.grid = this.grid();
  }

  grid() {
    const gridArr = [];
    for (let i=0; i<8; i++) { 
      let row = [];

      for (let j=0; j<8; j++){
        const color = (i + j) % 2 !== 0 ? 'white' : 'black';
        const square = new Square([i,j], );
        row.push(square);
      }
      gridArr.push(row);
    };

    return gridArr;
  }
}

// module.exports = Board;