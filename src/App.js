import React, { Component } from 'react';
import Row from './Components/Row';

var checkDown = function(matrix, i, j) {
  var count = 1;
  var curr = matrix[i][j];
  while(i + count < matrix.length && matrix[i + count][j] === curr) {
    count++;
  }

  return count === 4 ? true : false;
};

var checkHorizontal = function(matrix, i, j) {
  var count = 0;
  var curr = matrix[i][j];
  while (matrix[i][j] === curr) {
    j--;
  }
  j++;
  while(matrix[i][j + count] === curr) {
    count++;
  }

  return count === 4 ? true : false;
};

var checkDiagonalMajor = function(matrix, i, j) {
  var count = 0;
  var curr = matrix[i][j];
  while (i >= 0 && matrix[i][j] === curr) {
    i--;
    j--;
  }
  i++;
  j++;
  while(i + count < matrix.length && matrix[i + count][j + count] === curr) {
    count++;
  }
  return count === 4 ? true : false;
};

var checkDiagonalMinor = function(matrix, i, j) {
  var count = 0;
  var curr = matrix[i][j];
  while (i >= 0 && matrix[i][j] === curr) {
    i--;
    j++;
  }
  i++;
  j--;
  while(i + count < matrix.length && matrix[i + count][j - count] === curr) {
    count++;
  }
  return count === 4 ? true : false;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
      ],
      turn: 1,
      message: 'start the game'
    };
  }

  dropOne(col) {
    var newBoard = this.state.board;
    var turn = this.state.turn;
    var count = 0;
    while (count < newBoard.length && newBoard[count][col] === 0) {
      count++;
    }
    count--;
    newBoard[count][col] = turn;
    if (checkDown(newBoard, count, col) || checkHorizontal(newBoard, count, col) || checkDiagonalMajor(newBoard, count, col) || checkDiagonalMinor(newBoard, count, col)) {
      this.setState({
        message: 'WINNER - PLAYER '+ turn,
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ]
      });
    } else {
      turn = turn === 1 ? 2 : 1;
      var message = "Player " + turn + "'s' turn";
      this.setState({
        board: newBoard,
        turn: turn,
        message: message
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>{ this.state.message }</h2>
        </div>
        <div className="row">
          {
            this.state.board[0].map((num, i) => {
              return (<div className="col-sm-1 drop-spot" key={i} onClick={this.dropOne.bind(this, i)} ></div>)
            })
          }
        </div>
        {
          this.state.board.map((row, i) => {
            return (<Row row={row} key={i} />)
          })
        }

      </div>
    );
  }
}

export default App;
