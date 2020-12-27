import React from 'react';

export default class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.attr = this.props.attr;
  }

  picTable() {
    return {
      'w-pawn': '\u2659', 'w-rook': '\u2656', 'w-knight': '\u2658', 'w-bishop': '\u2657', 'w-queen': '\u2655', 'w-king': '\u2654',
      'b-pawn': '\u265F', 'b-rook': '\u265C', 'b-knight': '\u265E', 'b-bishop': '\u265D', 'b-queen': '\u265B', 'b-king': '\u265A'
    }
  }

  image() {
    const picName = this.props.attr.color[0] + '-' + this.props.attr.name;

    return this.picTable()[picName];
  }

  render() {
    let piece = "";
    if (this.props.attr && this.props.attr.name) piece = this.image();

    return (
      <div className='piece'>
        {piece}
      </div>
    )
  }
}