function Modal(props) {
  const { showModal } = props;
  return (
    <div className={`modal ${showModal ? 'modal--fade-in' : 'modal--fade-out'}`}>
      <h2>Not enough letters</h2>
    </div>
  )
}

export default Modal;
