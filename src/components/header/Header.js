import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

// Стилизация
import { HeaderSection, HeaderContainer, HeaderSearch, HeaderLocationIcon, HeaderSearchIcon, HeaderContacts, HeaderContactsBg, HeaderContactsIcon, HeaderContactsNum, HeaderCart, HeaderCartHead, HeaderCartCounter, HeaderCartImg } from './header-style';
import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';

// Компоненты
import Logo from '../logo/Logo';
import Modal from '../modal/Modal';

// Картинки, иконки
import locationIcon from '../../resources/location-icon.svg';
import searchIcon from '../../resources/search-icon.svg';
import phoneIcon from '../../resources/phone-icon.svg';
import counterIcon from '../../resources/counter-icon.svg';
import cartIcon from '../../resources/header/cart-icon.svg';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => (props.openModal ? 'hidden' : 'auto')};
  }
`;

const Header = ({cartItems}) => {

  const [counter, setCounter] = useState(0),
        [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.code == 'Escape') {
        setModalVisible(false);
      }
    })
  }, [])

  useEffect(() => {
    setCounter(Object.keys(cartItems).length)
  }, [cartItems])

  const handleCartClick = () => {
    if (Object.keys(cartItems).length > 0) {
      navigate('/cart')
    } else {
      setModalVisible(true);
    }
  }

  return (
    <>
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

        <HeaderCart onClick={handleCartClick}>
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
        {createPortal(
          <>
            <GlobalStyle noScroll />
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
          </>,
          document.body
        )}
      </HeaderSection>
    </>
  )
}

export default Header;