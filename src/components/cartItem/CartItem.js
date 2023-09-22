// Стилизация
import {
  CartItemStyles,
  CartItemImg,
  CartItemInfo,
  CartItemCounter,
  CartItemDecreaseBtn,
  CartItemIncreaseBtn,
  CartItemPrice,
  CartItemDeleteBtn
} from './cartItem-style';

// Изображения
import cartItemImg from '../../resources/cart/cart-item.jpg';
import increaseIcon from '../../resources/cart/increase-icon.svg';
import decreaseIcon from '../../resources/cart/decrease-icon.svg';
import deleteIcon from '../../resources/cart/delete-icon.svg';

const CartItem = () => {
  return (
    <CartItemStyles>

      <CartItemImg>
        <img src={cartItemImg} alt="item image" />
      </CartItemImg>

      <CartItemInfo>
        <h3>ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</h3>
        <p>Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто</p>
      </CartItemInfo>

      <CartItemCounter>

        <CartItemDecreaseBtn src={decreaseIcon} alt="decrease" />
        <input type="number" value={1}/>
        <CartItemIncreaseBtn src={increaseIcon} alt="increase" />

      </CartItemCounter>

      <CartItemPrice>1640 ₽</CartItemPrice>

      <CartItemDeleteBtn src={deleteIcon} alt='delete'/>

    </CartItemStyles>
  )
}

export default CartItem;