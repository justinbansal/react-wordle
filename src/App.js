import './App.scss';

import words from './words';

import React from 'react';
import Row from './Row';
import Modal from './Modal';
import Header from './Header';

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

const rows = 6;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      guesses: ['', '', '', '', '', ''],
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

      // based on level set the guess
      const guesses = this.state.guesses.slice();
      guesses[this.state.level] = string;
      this.setState({
        guesses: guesses,
      })
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

      if (guess === wordle) {
        console.log('winner');
      } else {
        console.log('loser');
      }
    }

    if (letters.includes(e.key.toUpperCase())) {
      if (this.state.string.length < 5) {
        this.state.string.push(e.key.toUpperCase());
      }

      // based on level set the guess
      const guesses = this.state.guesses.slice();
      guesses[this.state.level] = this.state.string;
      this.setState({
        guesses: guesses,
      })
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
    const rowsBlock = [...Array(rows)].map((row, index) => {
      return (
        <Row
          id={index}
          key={index}
          indexes={[0, 1, 2, 3, 4]}
          squares={this.state.guesses[index]}
          wordle={wordle}
          level={this.state.level}
        />
      )
    })
    return (
      <div className="App">
        <Header />
        <div className="gameBoard">
          {rowsBlock}
          <Modal showModal={this.state.showModal}></Modal>
        </div>
        <div className="keyboard">

        </div>
      </div>
    );
  }
}

export default App;
