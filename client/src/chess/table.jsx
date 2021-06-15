import React from 'react';
import Board from './board';
import Square from './square';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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
      grid[i] = grid[i].map((square,j) => <Square key={j} attr={square}></Square>)
    }

    return (
      <div className='board'>
        <div className='board-rows'>
          <div className='board-rows-row'>{grid[7]}</div>
          <div className='board-rows-row'>{grid[6]}</div>
          <div className='board-rows-row'>{grid[5]}</div>
          <div className='board-rows-row'>{grid[4]}</div>
          <div className='board-rows-row'>{grid[3]}</div>
          <div className='board-rows-row'>{grid[2]}</div>
          <div className='board-rows-row'>{grid[1]}</div>
          <div className='board-rows-row'>{grid[0]}</div>
        </div>
      </div>
    )
  }

  render() {
    let board = '';
    if (this.board) { 
      board = this.showBoard(this.board.grid) }

    return (<DndProvider backend={HTML5Backend}><div className="border">
      <div className="table">
        <div className="table-head">
          <h1 className="table-head-title">Chessual</h1>
          {board}
        </div>
      </div>
      </div ></DndProvider >
    )
    // return (
    //   <div className="border">
    //     <div className="table">
    //       <div className="table-head">
    //         <h1 className="table-head-title">Chessual</h1>
    //           {board}
    //       </div>
    //     </div>
    //   </div>
    // )
  }
}