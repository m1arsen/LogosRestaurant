// Стилизация
import {CartNoItemsStyle,
        CartNoItemsPromoBtn,
        CartNoItemsMenuBtn} from './cartNoItems-style';

// Изображения
import emptyCartIcon from '../../resources/cart-is-empty-icon.svg';

// Компоненты
import { Link } from 'react-router-dom';

const CartNoItems = () => {
  return (
    <CartNoItemsStyle>
      <img src={emptyCartIcon} alt="Корзина пустая" />
      <h2>В корзине пока ничего нет</h2>

      <Link to={'/promotions'}>
        <CartNoItemsPromoBtn>Посмотреть скидки и акции</CartNoItemsPromoBtn>
      </Link>

      <Link to={'/'}>
        <CartNoItemsMenuBtn>Вернуться в меню</CartNoItemsMenuBtn>
      </Link>

    </CartNoItemsStyle>
  )
}

export default CartNoItems;