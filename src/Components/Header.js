function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-30">
      <div className="d-flex align-center">
        <img width={35} height={40} src="/img/ankh.png" />
        <div className="pl-10">
          <h3>Заголовок</h3>
          <p>Одежда для ценителей</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li onClick={props.onClickCart} className="mr-20">
          <img width={15} height={15} src="/img/shopping-cart_318-932181.avif" />
          <span className="cu-p ml-5">2400р</span>
        </li>
        <li >
          <img width={15} height={15} src="/img/709722.png" />
        </li>
      </ul>
    </header>
  );
}

export default Header;