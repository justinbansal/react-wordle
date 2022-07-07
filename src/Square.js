function Square(props) {
  const { position, squares, wordle } = props;

  let status;
  if (squares.length === 0) {
    status = 'square--no-entry';
  }


  if (wordle.charAt(position) === squares[position]) {
    status = 'square--correct-position';
  } else if (wordle.includes(squares[position])) {
    status = 'square--incorrect-position';
  } else {
    status = 'square--no-match';
  }

  let hasLetter = squares[position] ? 'square--has-letter' : null;

  let transitionDelay = ((position + 1) * 2 / 10) + 0.8 + 's';

  return (
    <div className={`square ${status} ${hasLetter}`}>
      <div
        className="square-inner"
        style={{transitionDelay: `${transitionDelay}`}}
      >
        <div className="square-front">
          {squares ? squares[position] : null}
        </div>
        <div className="square-back">
          {squares ? squares[position] : null}
        </div>
      </div>
    </div>
  )
}

export default Square;
