import { useEffect, useState } from 'react';

// Стилизация
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

// Компоненты
import CartItem from '../cartItem/CartItem';
import CartAddItem from '../cartAddItem/CartAddItem';
import CartNoItems from '../cartNoItems/CartNoItems';
import Spinner from '../spinner/Spinner';

// Изображения
import backIcon from '../../resources/cart/back-icon.svg';

// Сервисы
import useLogosService from '../../services/LogosService';

const Cart = ({menu, cartItems, addToCart, removeToCart, deleteToCart}) => {
  const [cartItemsInfo, setCartItemsInfo] = useState([]),
        [totalPrice, setTotalPrice] = useState(0);
  const {loading, error} = useLogosService();

  useEffect(() => {
    setCartItemsInfo(() => getItemsInfo());
  }, [cartItems])

  useEffect(() => {
    setTotalPrice(() => calculatingTotalPrice(cartItemsInfo));
  }, [cartItemsInfo])

  const getItemsInfo = () => {

    let info = [];
    for(let itemId in cartItems) {

      for(let position in menu) {
        let positionData = menu[position].items;

        positionData.forEach(({id, name, description, price, src, alt}) => {
          if(id == itemId) {
            info.push({id, name, description, price, src, alt, count: cartItems[itemId]})
          }
        })
      }
    }

    return info;
  }

  const calculatingTotalPrice = (items) => {
    let sum = 0;
    items.forEach(({price, count}) => sum += count * price)
    return sum;
  }

  const renderCartItems = (items) => {
    return items.map(({id, name, description, price, src, alt, count}) => {
      return (
        <CartItem id={id}
                  name={name}
                  description={description}
                  price={price}
                  src={src}
                  alt={alt}
                  count={count}
                  addToCart={addToCart}
                  removeToCart={removeToCart}
                  deleteToCart={deleteToCart}/>
      )
    })
  }

  const spinner = loading ? <Spinner/> : null;
  const errorMessage = error ? <h1>Error</h1> : null;
  const cartItemsLayout = !(loading && error) ? renderCartItems(cartItemsInfo) : null;

  const cartItemsPrice = !(loading && error) ? totalPrice : null;

  return (
    <CartWrapper>
      <CartContainer>

        <BackBtn to={'/'} className="cart__link">
          <img src={backIcon} alt="back"/>
          <p>к выбору блюда</p>
        </BackBtn>

        <CartTitle>
          <p>Корзина</p>
          <p>(в корзине товаров: {Object.keys(cartItems).length})</p>
        </CartTitle>

        {Object.keys(cartItems).length == 0 ? <CartNoItems/> : <CartItems>

          {spinner}
          {errorMessage}
          {cartItemsLayout}

          </CartItems>}

        <CartAddTitle>Добавить к заказу</CartAddTitle>

        <CartAddItems>

          <CartAddItem/>
          <CartAddItem/>
          <CartAddItem/>
          <CartAddItem/>

        </CartAddItems>

        <CartTotal>

          <div>
            <CartPrice><span>Итого:</span> {cartItemsPrice} ₽</CartPrice>

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