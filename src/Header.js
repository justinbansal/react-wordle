function Header(props) {
  return (
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
  )
}

export default Header;
