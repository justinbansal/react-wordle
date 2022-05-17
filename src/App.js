import './App.scss';

import React from 'react';
import Row from './Row';
import Square from './Square';

const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'Y',
  'Z',
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstGuess: [],
      secondGuess: '',
      thirdGuess: '',
      fourthGuess: '',
      fifthGuess: '',
      squares: Array(30).fill(null),
      rows: [
        Array(5).fill(null),
        Array(5).fill(null),
        Array(5).fill(null),
        Array(5).fill(null),
        Array(5).fill(null),
      ],
      key: null,
      string: '',
      level: 0,
    }

    this.handleKeyboard = this.handleKeyboard.bind(this);
  }

  handleKeyboard(e) {
    if (letters.includes(e.key.toUpperCase())) {
      const firstGuess = [...this.state.firstGuess];
      if (firstGuess.length < 5) {
        firstGuess.push(e.key.toUpperCase());
      }

      this.setState({
        firstGuess,
      })
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboard)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboard);
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="header__left">
            <a href="#">Menu</a>
            <a href="#">Rules</a>
          </div>
          <div className="title">
            <h1>Wordle</h1>
          </div>
          <div className="header__right">
            <a href="#">Stats</a>
            <a href="#">Settings</a>
          </div>
        </div>
        <div className="gameBoard">
          <Row
            indexes={[0, 1, 2, 3, 4]}
            squares={this.state.firstGuess}
          />
          <Row
            indexes={[5, 6, 7, 8, 9]}
            squares={this.state.secondGuess}
          />
          <Row
            indexes={[10, 11, 12, 13, 14]}
            squares={this.state.thirdGuess}
          />
          <Row
            indexes={[15, 16, 17, 18, 19]}
            squares={this.state.fourthGuess}
          />
          <Row
            indexes={[20, 21, 22, 23, 24]}
            squares={this.state.fifthGuess}
          />
          <Row
            indexes={[25, 26, 27, 28, 29]}
            squares={this.state.sixthGuess}
          />
        </div>
        <div className="keyboard">

        </div>
      </div>
    );
  }
}

export default App;
