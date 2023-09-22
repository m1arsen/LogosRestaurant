import {CartWrapper,
        CartContainer,
        CartTitle,
        BackBtn,
        CartItems,
        CartAddTitle,
        CartAddItems
      } from './cart-style';

import { Link } from 'react-router-dom';
import CartItem from '../cartItem/CartItem';
import CartAddItem from '../cartAddItem/CartAddItem';

import backIcon from '../../resources/cart/back-icon.svg';
import './cart.scss';

const Cart = () => {

  return (
    <CartWrapper>
      <CartContainer>

        <BackBtn to={'/'} className="cart__link">
          <img src={backIcon} alt="back"/>
          <p>к выбору блюда</p>
        </BackBtn>

        <CartTitle>
          <p>Корзина</p>
          <p>(в корзине товаров: <span>0</span>)</p>
        </CartTitle>

        <CartItems>

          <CartItem/>
          <CartItem/>
          <CartItem/>

        </CartItems>

        <CartAddTitle>Добавить к заказу</CartAddTitle>

        <CartAddItems>

          <CartAddItem/>
          <CartAddItem/>
          <CartAddItem/>
          <CartAddItem/>

        </CartAddItems>

        <div className="cart__total">

          <div className="cart__total_info">

            <div className="cart__total_price">
              <span>Итого: </span>
              <span>0</span>
              <span> ₽</span>
            </div>

            <p className="cart__total_delivery-price none">
              До бесплатной доставки не хватет: <span></span> <span>₽</span>
            </p>

            <p className="cart__total_sum">
              Минимальная сумма заказа 500 ₽
            </p>

          </div>

          <Link to={'order'} className="cart__total_btn disabled">Оформить заказ</Link>

        </div>

      </CartContainer>
    </CartWrapper>
  )
}

export default Cart;