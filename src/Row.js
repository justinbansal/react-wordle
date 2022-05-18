import Square from './Square';

function Row(props) {
  const { indexes, squares } = props;
  const tiles = indexes.map(index => {
    return <Square
            key={`Square${index}`}
            position={index}
            squares={squares}
            wordle={props.wordle}
          />
  })

  return(
    <div className="row">
      {tiles}
    </div>
  )
}

export default Row;
