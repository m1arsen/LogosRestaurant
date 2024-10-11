import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import cartIcon from '../../resources/item_cards/cart-icon.svg';
import addIcon from '../../resources/item_cards/add-icon.svg';
import removeIcon from '../../resources/item_cards/remove-icon.svg';

import {
  SliderCardBtns,
  SliderCardContainer,
  SliderCardRemoveBtn,
  SliderCardAddBtn,
  SliderCardCart,
  SliderCardPrice,
  SliderCardCounter,
  SliderCardImgContainer,
  SliderCardInfo,
  SliderCardInfoBlock,
  // SliderCardTitle,
} from './sliderCard-style';

const SliderCard = ({ item, cartItems, addToCart, removeToCart }) => {
  let { id, name, more_info, description, price, image } = item;

  name = name.length >= 15 ? name.slice(0, 12) + '...' : name;
  description = description.length >= 60 ? description.slice(0, 57) + '...' : description;

  let count = 0;

  for (let key in cartItems) {
    if (Number(key) === id) count = cartItems[key];
  }

  return (
    <SliderCardContainer>
      <Link to={`/product/${id}`}>
        <SliderCardImgContainer>
          <img src={image.src} alt={image.alt} />
        </SliderCardImgContainer>
      </Link>

      <SliderCardInfo>
        <SliderCardInfoBlock>
          <div>
            <h2>{name}</h2>
            <p>
              Вес: <span>{more_info.weight}</span>г
            </p>
          </div>
          <p>{description}</p>
        </SliderCardInfoBlock>

        <SliderCardBtns>
          <SliderCardPrice>{price} ₽</SliderCardPrice>
          <SliderCardCart>
            <p>В корзину</p>
            <img src={cartIcon} alt="cart icon" />
          </SliderCardCart>

          <SliderCardAddBtn onClick={(e) => addToCart(e.target.attributes['data-id'].value)}>
            <img src={addIcon} alt="add" data-id={id} />
          </SliderCardAddBtn>

          <SliderCardRemoveBtn
            onClick={(e) =>
              removeToCart(
                e.target.attributes['data-id'].value,
                e.target.attributes['data-deleteBtn'].value,
              )
            }
          >
            <img src={removeIcon} alt="remove" data-deleteBtn={'DeleteBtn'} data-id={id} />
          </SliderCardRemoveBtn>
        </SliderCardBtns>
      </SliderCardInfo>

      {count ? <SliderCardCounter>{count}</SliderCardCounter> : null}
    </SliderCardContainer>
  );
};

export default SliderCard;
