import './App.scss';

import Row from './Row';

function App() {
  return (
    <div className="App">
      <div className="header">efefef
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
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
      <div className="keyboard">

      </div>
    </div>
  );
}

export default App;
