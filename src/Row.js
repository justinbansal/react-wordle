import Square from './Square';

function Row(props) {
  const { indexes, squares } = props;
  const tiles = indexes.map(index => {
    return <Square
            key={index}
            position={index}
            squares={squares}
          />
  })

  return(
    <div className="row">
      {tiles}
    </div>
  )
}

export default Row;
