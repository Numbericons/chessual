export default class Board {
  constructor() {
    this.grid = this.makeGrid();
  }

  getName(cords) {
    const alpha = 'abcdefgh';

    return alpha[cords[1]] + (cords[0] + 1);
  }

  startPiece(j) {
    if (j === 0 || j === 7) return 'rook';
    if (j === 1 || j === 6) return 'knight';
    if (j === 2 || j === 5) return 'bishop';
    if (j === 3) return 'queen';
    if (j === 4) return 'king';
  }
  
  startBackRank(arr, color) {
    for (let j=0; j<arr.length; j++){
      const name = this.startPiece(j);
      arr[j].piece = { name: name, color: color } 
    }
    return arr;
  }

  startPawns(arr, color) {
    for (let j = 0; j < arr.length; j++) {
      arr[j].piece = { name: "pawn", color: color } }
    return arr;
  }
  
  startPos(arr) {
    for (let i=0; i<arr.length; i++){
      let color = i < 2 ? 'white' : 'black';
      if (i === 1 || i === 6) arr[i] = this.startPawns(arr[i], color);
      if (i === 0 || i === 7) arr[i] = this.startBackRank(arr[i], color)
    }
    return arr;
  }

  makeGrid() {
    const gridArr = [];
    for (let i=0; i<8; i++) { 
      let row = [];

      for (let j=0; j<8; j++){
        const color = (i + j) % 2 !== 0 ? 'white' : 'black';
        const square = { cords: [i,j], color: color, name: this.getName([i,j]) }
        row.push(square);
      }
      gridArr.push(row);
    };

    this.startPos(gridArr);
    return gridArr;
  }
}