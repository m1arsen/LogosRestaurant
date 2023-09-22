import {  CartAddItemStyles,
          CartAddImg,
          CartAddBtn,
          CartAddPrice
        } from "./cartAddItem-style";

import cartAdd from '../../resources/cart/cart-add.jpg';
import increaseIcon from '../../resources/cart/increase-icon.svg';

const CartAddItem = () => {
  return (
    <CartAddItemStyles>

      <CartAddImg>
        <img src={cartAdd} alt="image" />
      </CartAddImg>

      <h3>КВАС АНАНАСОВЫЙ</h3>

      <CartAddBtn>
        <p>Добавить</p>
        <img src={increaseIcon} alt="increase" />
      </CartAddBtn>

      <CartAddPrice>1640 ₽</CartAddPrice>

    </CartAddItemStyles>
  )
}

export default CartAddItem;