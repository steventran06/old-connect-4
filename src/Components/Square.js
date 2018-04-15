import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white' 
    };
  }
  componentWillMount() {
    if (this.props.number === 0) {
      this.setState({
        color: 'light gray'
      });
    } else if (this.props.number === 1) {
      this.setState({
        color: 'red'
      });
    } else {
      this.setState({
        color: 'black'
      })
    }
  }

  render() {
    var color;
    if (this.props.number === 0) {
      color = '#d3d3d3';
    } else if (this.props.number === 1) {
      color = 'red';
    } else {
      color = 'black';
    }
    var style = {
      backgroundColor: color
    };
    return (
      <div style={style} className="col-sm-1 connect-space">

      </div>
    );
  }
}

export default Square;
