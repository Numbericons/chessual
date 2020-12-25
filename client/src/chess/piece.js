import React from 'react';
// import Deck from './deck';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
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