import React from 'react';
import Board from './board';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    const board = this.makeBoard();

    this.setState({board: board});
  }

  makeBoard(){

  }

  render() {
    return (
      <div className="border">
        <div className="table">
          <div className="table-head">
            <h1 className="table-head-title">Chessual</h1>
            <div className='board'>
            </div>
          </div>
        </div>
      </div>
    )
  }
}