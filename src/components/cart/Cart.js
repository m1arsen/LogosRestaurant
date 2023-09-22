import {CartWrapper,
        CartContainer,
        CartTitle,
        BackBtn,
        CartItems,
        CartAddTitle,
        CartAddItems,
        CartTotal,
        CartPrice,
        CartDeliveryPrice,
        CartTotalSum,
        CartTotalBtn
      } from './cart-style';

import CartItem from '../cartItem/CartItem';
import CartAddItem from '../cartAddItem/CartAddItem';

import backIcon from '../../resources/cart/back-icon.svg';

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

        <CartTotal>

          <div>
            <CartPrice><span>Итого:</span> 500 ₽</CartPrice>

            {/* Рендерится в случае нехватки до бесплатной доставки */}
            <CartDeliveryPrice>
              До бесплатной доставки не хватет: <span></span> <span>₽</span>
            </CartDeliveryPrice>

            <CartTotalSum>
              Минимальная сумма заказа 500 ₽
            </CartTotalSum>

          </div>

          {/* Кнопка в пассивном состоянии имеет другие стили, они ниже */}
          {/*  {
                  background: #433f3e;
                  cursor: not-allowed;
                } */}
          <CartTotalBtn to={'order'}>Оформить заказ</CartTotalBtn>

        </CartTotal>

      </CartContainer>
    </CartWrapper>
  )
}

export default Cart;