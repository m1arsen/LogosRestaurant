// Стилизация
import styled from 'styled-components';
import {Container} from '../../styles/styles';

// Компоненты
import Logo from '../logo/Logo';

// Картинки, иконки
import locationIcon from '../../resources/location-icon.svg';
import searchIcon from '../../resources/search-icon.svg';
import phoneIcon from '../../resources/phone-icon.svg';
import counterIcon from '../../resources/counter-icon.svg';
import cartIcon from '../../resources/header/cart-icon.svg';

import './header.scss';

const Header = () => {

  const HeaderContainer = styled(Container)`
    padding: 24px 15px;
    display: flex;
    align-items: center;
  `;

  return (
    <header id="top" className="header">
    {/* <div className="header__container container"> */}
    <HeaderContainer>
      <Logo/>

        <div className="header__search">
          <img src={locationIcon} alt="location" className="header__location-icon"></img>
          <input type="text" placeholder="Введите адрес доставки"></input>
          <a href="#!">
            <img src={searchIcon} alt="search" className="header__search-icon"></img>
          </a>
        </div>

        <div className="header__contacts">
          <div className="header__contacts-bg">
            <img src={phoneIcon} alt="phone" className="header__contacts-icon"></img>
          </div>
          <div className="header__contacts-numbers">
            <p>Контакты:</p>
            <a href="tel:+79175105759">+7 (917) 510-57-59</a>
          </div>
        </div>

        <a href="/cart" className="header__cart">
          <div className="header__cart-head">
            Корзина
          </div>

          <div className="header__cart-counter none">
            <img src={counterIcon} alt="counter-bg"></img>
            <div className="header__cart-counter-nums"></div>
          </div>

          <img className="header__cart-img" src={cartIcon} alt="cart icon"></img>
        </a>

      {/* </div> */}
      </HeaderContainer>
    </header>
  )
}

export default Header;