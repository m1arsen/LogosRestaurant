import { useState, useEffect } from 'react';
// import useLogosService from '../../services/LogosService';

import {Swiper} from 'swiper/react';
import 'swiper/css';

import Spinner from '../spinner/Spinner';

import { MenuTopContainer, MenuPosContainer, MenuPosTitle, MenuTop, MenuPos } from './menu-style';

import {ItemCard, ItemCardImgContainer, ItemCardInfo, ItemCardInfoBlock, ItemCardBtns, ItemCardPrice, ItemCardCart, ItemCardAddBtn, ItemCardRemoveBtn, ItemCardCounter } from './card-style';
import { Link } from 'react-router-dom';
import cartIcon from "../../resources/item_cards/cart-icon.svg";
import addIcon from "../../resources/item_cards/add-icon.svg";
import removeIcon from "../../resources/item_cards/remove-icon.svg";

import MenuCard from '../menuCard/MenuCard';

const Menu = ({menu, loading, error, cartItems, addToCart, removeToCart}) => {
  const [openedTab, setopenedTab] = useState(0), // id открытого таба меню
        [tabs, setTabs] = useState([]); // Табы для отображения в виде объекта с id и названием

  useEffect(() => {
    setTabs(getTabsNames(menu))
  }, [menu])

  useEffect(() => {
    renderTabPos(openedTab);
  }, [openedTab])

  const getTabsNames = (menu) => {
    let tabsNames = [];

    for(let key in menu) {
      tabsNames.push({id: menu[key].id, name: key});
    }

    return tabsNames;
  }

  const renderTabsNames = (items) => {
    return items.map(item => {
      const active = openedTab == item.id ? 'active' : '';

      return (<MenuPos
        className={`${active} ${item.id}`}
        key={item.id}
        data-tab={item.id}
        onClick={(e) => setopenedTab(e.target.dataset.tab)}>{item.name}</MenuPos>)
    })
  }

  const renderTabPos = (id) => {
    let cards = [];
    let posName = '';

    for(let key in menu) {
      if(menu[key].id == id) {
        cards.push(...menu[key].items);
        posName = key;
      }
    }

    let cardsHTML = cards.map(({id, name, weight, description, price, src, alt}) => {

      name = name.length >= 15 ? name.slice(0, 12) + '...' : name;
      description = description.length >= 60 ? description.slice(0, 57) + '...' : description;

      let count = 0;

      for(let key in cartItems) {
        if(key == id) count = cartItems[key];
      }

      return (

          <ItemCard className='swiper-slide' key={id}>

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

          // <MenuCard className='swiper-slide' key={id}
          //           id={id}
          //           src={src}
          //           alt={alt}
          //           name={name}
          //           weight={weight}
          //           description={description}
          //           price={price}
          //           count={count}
          //           addToCart={addToCart}
          //           removeToCart={removeToCart}/>
      )
    })

    // По непонятным причинам при попытке выделить ItemCard в отдельный компонент - MenuCard swiper slider не хочет рендерить слайды в swiper wrapper, пока что решил оставил все как было и в OtherProduct компонент просто скопировать код слайда (ItemCard)

    return (
      <>
        <MenuPosTitle>{posName}</MenuPosTitle>
        <Swiper
          loop={false}
          slidesPerView={4}
          spaceBetween={20}
          speed={1000}
          style={{'padding': '25px 50px 70px'}}>
          {cardsHTML}
        </Swiper>
      </>
    )
  }

  const spinner = loading ? <Spinner/> : null;
  const errorMessage = error ? <h1>Error</h1> : null;

  // Рендер табов и слайдеров
  const tabsNames = !(loading && error) ? renderTabsNames(tabs) : null;
  const posSection = !(loading && error) ? renderTabPos(openedTab) : null;

  return (
    <>
      {spinner}
      {errorMessage}
      {/* Если нет загрузки и ошибок то грузим верстку из View, иначе ничего не грузим */}
      {!(loading && error) ? <View tabsNames={tabsNames} posSection={posSection}/> : null}
    </>
  )
}

const View = ({tabsNames, posSection}) => {


  return (
    <section className="menu">
      <MenuTop>
        <MenuTopContainer>
          {tabsNames}
        </MenuTopContainer>
      </MenuTop>

      <MenuPosContainer>
        {posSection}
      </MenuPosContainer>
    </section>
  )
}

export default Menu;