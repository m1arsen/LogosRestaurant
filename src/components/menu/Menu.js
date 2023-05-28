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

import './menu.scss'

const Menu = () => {
  const [openedTab, setopenedTab] = useState(0), // id открытого таба меню
        [menu, setMenu] = useState({}), // Объект со всем меню
        [tabs, setTabs] = useState([]), // Табы для отображения в виде объекта с id и названием
        [onPosLoaded, setOnPosLoaded] = useState(false);
  const {loading, error, getMenu} = useLogosService();

  useEffect(() => {
    getMenu().then(setMenu);
  }, [])

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

    let cardsHTML = cards.map(({name, weight, description, price, src, alt}) => (
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

            <ItemCardAddBtn>
              <img src={addIcon} alt="add" data-id={name}/>
            </ItemCardAddBtn>

            <ItemCardRemoveBtn>
              <img src={removeIcon} alt="remove" data-id={name}/>
            </ItemCardRemoveBtn>

          </ItemCardBtns>

        </ItemCardInfo>

        <ItemCardCounter data-id={name}>1</ItemCardCounter>
      </ItemCard>
    ))

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