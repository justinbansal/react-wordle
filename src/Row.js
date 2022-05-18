import Square from './Square';

function Row(props) {
  const { id, level, indexes, squares } = props;

  let status;
  if (squares.length > 0 && id !== level) {
    status = 'row--guess-entered';
  } else {
    status = 'row--guess-not-entered';
  }

  const tiles = indexes.map(index => {
    return <Square
            key={`Square${index}`}
            position={index}
            squares={squares}
            wordle={props.wordle}
          />
  })

  return(
    <div className={`row ${status}`}>
      {tiles}
    </div>
  )
}

export default Row;
