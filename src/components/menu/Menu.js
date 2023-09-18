import { useState, useEffect } from 'react';
import useLogosService from '../../services/LogosService';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import cartIcon from "../../resources/item_cards/cart-icon.svg";
import addIcon from "../../resources/item_cards/add-icon.svg";
import removeIcon from "../../resources/item_cards/remove-icon.svg";

import Spinner from '../spinner/Spinner';

import { MenuTopContainer, MenuPosContainer, MenuPosTitle, MenuTop, MenuPos } from './menu-style';
import {ItemCard, ItemCardImgContainer, ItemCardInfo, ItemCardInfoBlock, ItemCardBtns, ItemCardPrice, ItemCardCart, ItemCardAddBtn, ItemCardRemoveBtn, ItemCardCounter } from './card-style';

const Menu = ({menu, loading, error, addToCart, removeToCart}) => {
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


  // const addToCart = (id) => {

  //   // Есть ли товар в корзине ?
  //   if(cartItems.hasOwnProperty(id)) {

  //     setCartItems({
  //       ...cartItems,
  //       [id]: cartItems[id] += 1
  //     });

  //   } else {

  //     setCartItems({
  //       ...cartItems,
  //       [id]: 1
  //     });

  //   }
  //   console.log(cartItems);

  // }

  // const removeToCart = (id) => {

  //   // Есть ли товар в корзине ?
  //   if(cartItems.hasOwnProperty(id)) {
  //     if(cartItems[id] == 1) {

  //       const newCartItems = { ...cartItems }
  //       delete newCartItems[id]
  //       setCartItems({...newCartItems});

  //     } else {

  //       setCartItems({
  //         ...cartItems,
  //         [id]: cartItems[id] -= 1
  //       });

  //     }
  //   } // else если нет то ничего не происходит
  // }

  const renderTabPos = (id) => {
    let cards = [];
    let posName = '';

    for(let key in menu) {
      if(menu[key].id == id) {
        cards.push(...menu[key].items);
        posName = key;
      }
    }

    let cardsHTML = cards.map(({id, name, weight, description, price, src, alt}, i) => {

      name = name.length >= 15 ? name.slice(0, 12) + '...' : name;
      description = description.length >= 60 ? description.slice(0, 57) + '...' : description;

      return (
        <ItemCard className='swiper-slide'>
          <ItemCardImgContainer>
            <img src={src} alt={alt}/>
          </ItemCardImgContainer>

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

              <ItemCardRemoveBtn onClick={(e) => removeToCart(e.target.attributes['data-id'].value)}>
                <img src={removeIcon} alt="remove" data-id={id}/>
              </ItemCardRemoveBtn>

            </ItemCardBtns>

          </ItemCardInfo>

          {/* <ItemCardCounter data-id={name}>1</ItemCardCounter> */}
        </ItemCard>
      )
    })

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
    <section class="menu">
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