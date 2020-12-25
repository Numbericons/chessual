import React from 'react';
import Board from './board';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.board = this.makeBoard();
  }

  makeBoard(){
    return new Board();
  }

  showBoard(grid){
    for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < grid[i].length; j++){ 
        
       }
    }
  }

  render() {
    let board = '';
    if (this.board) { this.showBoard(this.board.grid) }

    return (
      <div className="border">
        <div className="table">
          <div className="table-head">
            <h1 className="table-head-title">Chessual</h1>
            <div className='board'>
              {board}
            </div>
          </div>
        </div>
      </div>
    )
  }
}