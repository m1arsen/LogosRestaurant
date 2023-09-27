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
        CartDeliveryFreePrice,
        CartTotalSum,
        CartTotalBtn,
        CartTotalBtnDisabled
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
import { getRandomMenuItems } from '../Functions';

const Cart = ({cartItems, addToCart, removeToCart, deleteToCart}) => {
  const [menu, setMenu] = useState([]),
        [cartItemsInfo, setCartItemsInfo] = useState([]), // информация по товарам в корзине
        [totalPrice, setTotalPrice] = useState(0), // общая стоимость корзины
        [randomCards, setRandomCards] = useState([]);

  const {loading, error, getMenu} = useLogosService();

  useEffect(() => {
    getMenu()
      .then((menu) => {
        setMenu(menu);
        setCartItemsInfo(() => getItemsInfo(menu, cartItems));
        setRandomCards(() => getRandomMenuItems(menu, 4));
      })
  }, [])

  useEffect(() => {
    setCartItemsInfo(() => getItemsInfo(menu, cartItems));
  }, [cartItems])

  useEffect(() => {
    setTotalPrice(() => calculatingTotalPrice(cartItemsInfo));
  }, [cartItemsInfo])

  // Получение информации по продуктам из коллекции id
  const getItemsInfo = (menu, cartItems) => {
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

  // Вычисление общей стоимости корзины
  const calculatingTotalPrice = (items) => {
    let sum = 0;
    items.forEach(({price, count}) => sum += count * price)
    return sum;
  }

  // Рендер верстки дополнительных карточек
  const renderCartAddItems = (items) => {
    return items.map(({id, src, alt, name, price}) => {
      return (
        <CartAddItem  id={id}
                      src={src}
                      alt={alt}
                      name={name}
                      price={price}
                      addToCart={addToCart}/>
      )
    })
  }

  // Рендер верстки карточек в корзине
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

          {spinner}
          {errorMessage}
          {renderCartAddItems(randomCards)}

        </CartAddItems>

        <CartTotal>

          <div>
            <CartPrice><span>Итого:</span> {cartItemsPrice} ₽</CartPrice>

            {/* Рендерится в случае нехватки до бесплатной доставки */}

            {totalPrice < 2500 && totalPrice > 0 ?
              <CartDeliveryFreePrice>
                До бесплатной доставки не хватет: <span>{2500 - totalPrice}</span> ₽
              </CartDeliveryFreePrice>

              : null
            }

            {totalPrice < 2500 && totalPrice > 0 ?
              <CartDeliveryPrice>
                Доставка будет стоить <span>500</span> ₽
              </CartDeliveryPrice>
                : totalPrice >= 2500 ?
              <CartDeliveryPrice>
                Доставка будет <span>беслпатной</span>
              </CartDeliveryPrice>
                : null
            }

            {totalPrice < 500 && totalPrice > 0 ?
              <CartTotalSum>
                Минимальная сумма заказа <span>500</span> ₽
              </CartTotalSum>
              : null
            }


          </div>

          {totalPrice > 500 ?
            <CartTotalBtn to={'order'}>Оформить заказ</CartTotalBtn> :
            <CartTotalBtnDisabled>Оформить заказ</CartTotalBtnDisabled>
          }

        </CartTotal>

      </CartContainer>
    </CartWrapper>
  )
}

export default Cart;