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
import increaseIcon from '../../resources/cart/increase-icon.svg';
import decreaseIcon from '../../resources/cart/decrease-icon.svg';
import deleteIcon from '../../resources/cart/delete-icon.svg';

// Компненты
import { Link } from 'react-router-dom';

const CartItem = ({id, name, description, price, src, alt, count, addToCart, removeToCart, deleteToCart}) => {
  return (
    <CartItemStyles>

      <CartItemImg>
        <Link to={`/product/${id}`}>
          <img src={src} alt={alt} />
        </Link>
      </CartItemImg>

      <CartItemInfo>
        <h3>{name}</h3>
        <p>{description}</p>
      </CartItemInfo>

      <CartItemCounter>

        <CartItemDecreaseBtn
          src={decreaseIcon}
          alt="decrease"
          data-id={id}
          data-deleteBtn={'notDeleteBtn'}
          onClick={(e) => removeToCart(e.target.attributes['data-id'].value, e.target.attributes['data-deleteBtn'].value)}/>
        <p>{count}</p>
        <CartItemIncreaseBtn
          src={increaseIcon}
          alt="increase"
          data-id={id}
          onClick={(e) => addToCart(e.target.attributes['data-id'].value)}/>

      </CartItemCounter>

      <CartItemPrice>{price * count} ₽</CartItemPrice>

      <CartItemDeleteBtn
        src={deleteIcon}
        alt='delete'
        data-id={id}
        onClick={(e) => deleteToCart(e.target.attributes['data-id'].value)}/>

    </CartItemStyles>
  )
}

export default CartItem;