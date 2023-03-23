import {CartWrapper,
        CartContainer,
        CartTitle,
        BackBtn,
        CartItems,
        CartItem} from './cart-style';

import './cart.scss';

import backIcon from '../../resources/cart/back-icon.svg';

const Cart = () => {

  return (
    <CartWrapper>
      <CartContainer>

        <BackBtn href="/" className="cart__link">
          <img src={backIcon} alt="back"/>
          <p>к выбору блюда</p>
        </BackBtn>

        <CartTitle>
          <p>Корзина</p>
          <p>(в корзине товаров: <span></span>)</p>
        </CartTitle>

        <CartItems></CartItems>

        <h2 className="cart__add_title">Добавить к заказу</h2>

        <div className="cart__add_items"></div>

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

          <a href='/order' className="cart__total_btn disabled">Оформить заказ</a>

        </div>

      </CartContainer>
    </CartWrapper>
  )
}

export default Cart;