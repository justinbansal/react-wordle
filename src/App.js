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
      secondGuess: [],
      thirdGuess: [],
      fourthGuess: [],
      fifthGuess: [],
      sixthGuess: [],
      string: [],
      level: 0,
    }

    this.handleKeyboard = this.handleKeyboard.bind(this);
  }

  handleKeyboard(e) {
    if (e.keyCode === 13 && this.state.string.length === 5) {
      if (this.state.string === 'house') {
        console.log('winner');
      } else {
        console.log('loser');
        this.setState({
          level: this.state.level + 1,
          string: [],
        })
      }
    }

    if (letters.includes(e.key.toUpperCase())) {
      if (this.state.string.length < 5) {
        this.state.string.push(e.key.toUpperCase());
      }

      if (this.state.level === 0) {
        this.setState({
          firstGuess: this.state.string,
        })
      }

      if (this.state.level === 1) {
        this.setState({
          secondGuess: this.state.string,
        })
      }

      if (this.state.level === 2) {
        this.setState({
          thirdGuess: this.state.string,
        })
      }

      if (this.state.level === 3) {
        this.setState({
          fourthGuess: this.state.string,
        })
      }

      if (this.state.level === 4) {
        this.setState({
          fifthGuess: this.state.string,
        })
      }

      if (this.state.level === 5) {
        this.setState({
          sixthGuess: this.state.string,
        })
      }
    }
  }

  componentDidMount() {
    this.setState({
      string: [],
    })
    document.addEventListener('keydown', this.handleKeyboard);
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
            indexes={[0, 1, 2, 3, 4]}
            squares={this.state.secondGuess}
          />
          <Row
            indexes={[0, 1, 2, 3, 4]}
            squares={this.state.thirdGuess}
          />
          <Row
            indexes={[0, 1, 2, 3, 4]}
            squares={this.state.fourthGuess}
          />
          <Row
            indexes={[0, 1, 2, 3, 4]}
            squares={this.state.fifthGuess}
          />
          <Row
            indexes={[0, 1, 2, 3, 4]}
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
