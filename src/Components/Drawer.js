function Drawer(props) {
  return (<div className="overlay">
    <div className="drawer">
      <div className="d-flex justify-between">
        <h2 className="mt-5">Корзина</h2>
        <img onClick={props.onClickClose} className="mt-5 cu-p" src="/img/btn-remove.svg" height={32} />
      </div>
      <div className="items mt-20">
      </div>
      <div className="cardTotalBlock">
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>27000р</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1350р</b>
          </li>
        </ul>
        <button className="blackBtn">Офромить заказ <img src="/img/arrow.svg" /></button>
      </div>
    </div>
  </div>);
}

export default Drawer;