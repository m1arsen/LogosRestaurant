import { useState } from 'react';

// Стилизация
import { HeaderSection, HeaderContainer, HeaderSearch, HeaderLocationIcon, HeaderSearchIcon, HeaderContacts, HeaderContactsBg, HeaderContactsIcon, HeaderContactsNum, HeaderCart, HeaderCartHead, HeaderCartCounter, HeaderCartImg } from './header-style';

// Компоненты
import Logo from '../logo/Logo';

// Картинки, иконки
import locationIcon from '../../resources/location-icon.svg';
import searchIcon from '../../resources/search-icon.svg';
import phoneIcon from '../../resources/phone-icon.svg';
import counterIcon from '../../resources/counter-icon.svg';
import cartIcon from '../../resources/header/cart-icon.svg';

const Header = () => {

  const [counter, setCounter] = useState(0);

  return (
    <HeaderSection id="top">
    <HeaderContainer>
      <Logo/>

      <HeaderSearch>
        <HeaderLocationIcon src={locationIcon} alt="location"></HeaderLocationIcon>
        <input type="text" placeholder="Введите адрес доставки"></input>
        <a href="#!">
          <HeaderSearchIcon src={searchIcon} alt="search" className="header__search-icon"></HeaderSearchIcon>
        </a>
      </HeaderSearch>

      <HeaderContacts>
        <HeaderContactsBg>
          <HeaderContactsIcon src={phoneIcon} alt="phone"></HeaderContactsIcon>
        </HeaderContactsBg>
        <HeaderContactsNum>
          <p>Контакты:</p>
          <a href="tel:+79175105759">+7 (917) 510-57-59</a>
        </HeaderContactsNum>
      </HeaderContacts>

      <HeaderCart to={'/cart'}>
        <HeaderCartHead>
          Корзина
        </HeaderCartHead>

        {counter ?
        <HeaderCartCounter>
          <img src={counterIcon} alt="counter-bg"></img>
          <div className="header__cart-counter-nums">{counter}</div>
        </HeaderCartCounter> :
        <HeaderCartImg src={cartIcon} alt="cart icon"></HeaderCartImg>}

      </HeaderCart>

      </HeaderContainer>
    </HeaderSection>
  )
}

export default Header;