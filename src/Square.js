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

  return (
    <div className={`square ${status} ${hasLetter}`}>
      {squares ? squares[position] : null}
    </div>
  )
}

export default Square;
