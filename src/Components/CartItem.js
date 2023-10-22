import { getDefaultNormalizer } from "@testing-library/react";

function CartItem() {
  return (
    <div className="cartItem mb-20 d-flex align-center">
      <img className="m-15" width={70} height={70} src="/img/Rectangle6.svg" />
      <div className="d-flex flex-column mr-10">
        <p>Некое название товара и просто текст</p>
        <b>13500р</b>
      </div>
      <div className="remove-btn">
        <img className="mr-15" src="/img/btn-remove.svg" />
      </div>
    </div>
  );
}

export default CartItem;