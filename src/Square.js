function Square(props) {
  const { position, squares } = props;

  return (
    <div className="square">
      {squares ? squares[position] : null}
    </div>
  )
}

export default Square;
