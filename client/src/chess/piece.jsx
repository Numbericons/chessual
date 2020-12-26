import React from 'react';

export default class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.attr = this.props.attr;
  }

  render() {
    const piece = this.props.attr && this.props.attr.name || "";

    return (
      <div className={border}>
        {piece}
      </div>
    )
  }
}