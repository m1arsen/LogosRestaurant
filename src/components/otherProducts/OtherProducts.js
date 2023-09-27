import { useEffect, useState } from "react";

import useLogosService from "../../services/LogosService";
import { getRandomMenuItems } from "../Functions";

// Стилизация
import { Container } from "../../styles/styles";
import { OtherProductsTitle } from "./otherProducts-style";

// Компоненты
import Spinner from "../spinner/Spinner";

import {Swiper} from 'swiper/react';
import 'swiper/css';

import {ItemCard, ItemCardImgContainer, ItemCardInfo, ItemCardInfoBlock, ItemCardBtns, ItemCardPrice, ItemCardCart, ItemCardAddBtn, ItemCardRemoveBtn, ItemCardCounter } from '../menu/card-style';
import { Link } from 'react-router-dom';
import cartIcon from "../../resources/item_cards/cart-icon.svg";
import addIcon from "../../resources/item_cards/add-icon.svg";
import removeIcon from "../../resources/item_cards/remove-icon.svg";

const OtherProducts = ({cartItems, addToCart, removeToCart}) => {
  const [randomCards, setRandomCards] = useState([]);
  const {loading, error, getMenu} = useLogosService();

  useEffect(() => {
    getMenu()
      .then((menu) => {
        setRandomCards(() => getRandomMenuItems(menu, 4));
      })
  }, [])

  // Комментарий почему я скопировал функцию renderRandomCards из Menu находится в Menu
  const renderRandomCards = (cards) => {
    let cardsHTML = cards.map(({id, name, weight, description, price, src, alt}) => {

      name = name.length >= 15 ? name.slice(0, 12) + '...' : name;
      description = description.length >= 60 ? description.slice(0, 57) + '...' : description;

      let count = cartItems[id]

      return (
          <ItemCard className='swiper-slide' key={id}>

            <Link to={`/product/${id}`}>
              <ItemCardImgContainer>
                <img src={'.' + src} alt={alt}/>
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
    })

    return <Swiper
              loop={false}
              slidesPerView={4}
              spaceBetween={20}
              speed={1000}
              style={{'padding': '25px 50px 70px'}}>
              {cardsHTML}
            </Swiper>
  }

  const spinner = loading ? <Spinner/> : null;
  const errorMessage = error ? <h1>Error</h1> : null;
  const randomCardsHTML = !(loading && error) ? renderRandomCards(randomCards) : null;

  return (
    <Container>
      <OtherProductsTitle>С этим товаром покупают</OtherProductsTitle>

      {spinner}
      {errorMessage}
      {randomCardsHTML}

    </Container>
  )
}

export default OtherProducts;