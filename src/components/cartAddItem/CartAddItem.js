import {  CartAddItemStyles,
          CartAddImg,
          CartAddBtn,
          CartAddPrice
        } from "./cartAddItem-style";

import increaseIcon from '../../resources/cart/increase-icon.svg';

import { Link } from "react-router-dom";

const CartAddItem = ({id, src, alt, name, price, addToCart}) => {
  return (
    <CartAddItemStyles>

        <CartAddImg>
          <Link to={`/product/${id}`}>
            <img src={src} alt={alt}/>
          </Link>
        </CartAddImg>

      <h3>{name}</h3>

      <CartAddBtn data-id={id} onClick={(e) => addToCart(e.target.attributes['data-id'].value)}>
        <p data-id={id}>Добавить</p>
        <img data-id={id} src={increaseIcon} alt="increase" />
      </CartAddBtn>

      <CartAddPrice>{price} ₽</CartAddPrice>

    </CartAddItemStyles>
  )
}

export default CartAddItem;