import {ItemCard, ItemCardImgContainer, ItemCardInfo, ItemCardInfoBlock, ItemCardBtns, ItemCardPrice, ItemCardCart, ItemCardAddBtn, ItemCardRemoveBtn, ItemCardCounter } from './menuCard-style';

import cartIcon from "../../resources/item_cards/cart-icon.svg";
import addIcon from "../../resources/item_cards/add-icon.svg";
import removeIcon from "../../resources/item_cards/remove-icon.svg";

import { Link } from 'react-router-dom';

const MenuCard = ({id, src, alt, name, weight, description, price, count, addToCart, removeToCart}) => {
  return (
    <ItemCard>

      <Link to={`/product/${id}`}>
        <ItemCardImgContainer>
          <img src={src} alt={alt}/>
        </ItemCardImgContainer>
      </Link>

      <ItemCardInfo>
        <ItemCardInfoBlock>
          <div>
            <h2>{name}</h2>
            <p>Вес: <span>{weight}</span>г</p>
          </div>
          <p>{description}</p>
        </ItemCardInfoBlock>

        <ItemCardBtns>
          <ItemCardPrice>{price} ₽</ItemCardPrice>
          <ItemCardCart>
            <p>В корзину</p>
            <img src={cartIcon} alt="cart icon"/>
          </ItemCardCart>

          <ItemCardAddBtn onClick={(e) => addToCart(e.target.attributes['data-id'].value)}>
            <img src={addIcon} alt="add" data-id={id}/>
          </ItemCardAddBtn>

          <ItemCardRemoveBtn onClick={(e) => removeToCart(e.target.attributes['data-id'].value, e.target.attributes['data-deleteBtn'].value)}>
            <img src={removeIcon} alt="remove" data-deleteBtn={'DeleteBtn'} data-id={id}/>
          </ItemCardRemoveBtn>

        </ItemCardBtns>

      </ItemCardInfo>

      {count ? <ItemCardCounter>{count}</ItemCardCounter> : null}
    </ItemCard>
  )
}

export default MenuCard;