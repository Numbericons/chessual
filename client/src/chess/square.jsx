import React from 'react';
import Piece from './piece';

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.attr = this.props.attr;
  }

  showPiece(){
    if (this.props.attr && this.props.attr.piece) return <Piece attr={this.props.attr.piece}></Piece>

    return "";
  }

  render() {
    const border = 'sq-' + this.attr.color;
    const piece = this.showPiece();

    return (
      <div className={border}>
        {piece}
      </div>
    )
  }
}