import React, { Component } from 'react';
import Square from './Square';

class Row extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.row.map((number, i) => {
            return (<Square number={number} key={i} />)
          })
        }
      </div>
    );
  }
}

export default Row;
