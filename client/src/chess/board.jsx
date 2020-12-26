// class Board {
export default class Board {
  constructor() {
    this.grid = this.grid();
  }

  getName(cords) {
    const alpha = 'abcdefgh';

    return alpha[cords[1]] + (cords[0] + 1);
  }

  startPawns(arr, color) {
    for (let j=0; j<arr.length; j++){ arr[j].piece = { name: "pawn", color: color } }
  }

  startPiece(j) {
    if (j === 0 || j === 7) return 'rook';
    if (j === 1 || j === 6) return 'knight';
    if (j === 2 || j === 5) return 'bishop';
    if (j === 3) return 'queen';
    if (j === 4) return 'king';
  }
  
  startBackRank(arr, color, i) {
    for (let j=0; j<arr.length; j++){
      const name = this.startPiece(j);
      arr[j].piece = { name: name, color: color } 
    }
  }
  
  startPos(arr) {
    if (!arr.length) debugger;
    // for (let i=0; i<arr.length; i++){
    //   let color = i < 2 ? 'white' : 'black';
    //   if (i === 1 || 6) arr = this.startPawns(arr, color);
    //   startBackRank(arr, color, i)
    // }
    return arr;
  }

  grid() {
    const gridArr = [];
    for (let i=0; i<8; i++) { 
      let row = [];

      for (let j=0; j<8; j++){
        const color = (i + j) % 2 !== 0 ? 'white' : 'black';
        // const square = new Square([i,j], );
        const square = { cords: [i,j], color: color, name: this.getName([i,j]) }
        row.push(square);
      }
      gridArr.push(row);
    };

    if (!gridArr.length) debugger;

    // this.startPos(gridArr);
    return gridArr;
    // return this.setUp(gridArr);
  }
}

// module.exports = Board;