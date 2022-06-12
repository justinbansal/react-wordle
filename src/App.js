import './App.scss';

import words from './words';

import React from 'react';
import Row from './Row';
import Modal from './Modal';

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

let wordle;
let today;
let date;

function fetchWord() {
  wordle = words[Math.floor(Math.random() * words.length)]
  return wordle.toUpperCase();
}

function resetWord() {
  wordle = fetchWord();
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
  const wordleData = {wordle, date}

  window.localStorage.setItem('wordleData', `${JSON.stringify(wordleData)}`);
}

const getWordOfTheDay = () => {

  const wordleData = window.localStorage.getItem('wordleData');

  if (!wordleData) {
    resetWord()
  }

  if (wordleData) {
    let parsedData = JSON.parse(wordleData);

    // Check date
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();

    if (parsedData.date !== date) {
      resetWord()
    } else {
      wordle = parsedData.wordle;
    }
  }
}

getWordOfTheDay();

console.log(wordle);

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
      showModal: false,
    }

    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  handleKeyboard(e) {
    if (e.keyCode === 8 && this.state.string.length > 0) {

      const string = this.state.string.slice();
      string.pop();

      this.setState({
        string: string,
      })

      if (this.state.level === 0) {
        this.setState({
          firstGuess: string,
        })
      }

      if (this.state.level === 1) {
        this.setState({
          secondGuess: string,
        })
      }

      if (this.state.level === 2) {
        this.setState({
          thirdGuess: string,
        })
      }

      if (this.state.level === 3) {
        this.setState({
          fourthGuess: string,
        })
      }

      if (this.state.level === 4) {
        this.setState({
          fifthGuess: string,
        })
      }

      if (this.state.level === 5) {
        this.setState({
          sixthGuess: string,
        })
      }
    }

    if (e.keyCode === 13 && this.state.string.length < 5) {
      this.showModal();
    }

    if (e.keyCode === 13 && this.state.string.length === 5) {
      const guess = this.state.string.join('');

      this.setState({
        level: this.state.level + 1,
        string: [],
      })

      console.log(guess);

      if (guess === 'HOUSE') {
        console.log('winner');
      } else {
        console.log('loser');
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

  showModal() {
    this.setState({
      showModal: true,
    })

    setTimeout(() => {
      this.setState({
        showModal: false
      })
    }, 2000)
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
            id={0}
            indexes={[0, 1, 2, 3, 4]}
            squares={this.state.firstGuess}
            wordle={wordle}
            level={this.state.level}
          />
          <Row
            id={1}
            indexes={[0, 1, 2, 3, 4]}
            squares={this.state.secondGuess}
            wordle={wordle}
            level={this.state.level}
          />
          <Row
            id={2}
            indexes={[0, 1, 2, 3, 4]}
            squares={this.state.thirdGuess}
            wordle={wordle}
            level={this.state.level}
          />
          <Row
            id={3}
            indexes={[0, 1, 2, 3, 4]}
            squares={this.state.fourthGuess}
            wordle={wordle}
            level={this.state.level}
          />
          <Row
            id={4}
            indexes={[0, 1, 2, 3, 4]}
            squares={this.state.fifthGuess}
            wordle={wordle}
            level={this.state.level}
          />
          <Row
            id={5}
            indexes={[0, 1, 2, 3, 4]}
            squares={this.state.sixthGuess}
            wordle={wordle}
            level={this.state.level}
          />
          <Modal showModal={this.state.showModal}></Modal>
        </div>
        <div className="keyboard">

        </div>
      </div>
    );
  }
}

export default App;
