import styled from 'styled-components';
import {Container} from '../../styles/styles';

import Nav from '../nav/Nav';

import './footer.scss';

const Footer = () => {
  const FooterContainer = styled(Container)`
    padding: 26px 30px 30px 120px;

    display: flex;
    column-gap: 86px;

    position: relative;
  `;

  return (
    <footer className="footer">
      <FooterContainer>
        <a href="#top" className="footer__up-btn">
          <svg width="24" height="14" fill="#222021">
            <path d="M13.0607 0.939577C12.4749 0.353795 11.5252 0.353801 10.9394 0.939592L1.3935 10.4856C0.807718 11.0714 0.807724 12.0211 1.39351 12.6069C1.9793 13.1927 2.92905 13.1927 3.51483 12.6069L12.0001 4.12156L20.4854 12.6068C21.0712 13.1926 22.0209 13.1926 22.6067 12.6068C23.1925 12.021 23.1925 11.0712 22.6067 10.4855L13.0607 0.939577ZM13.5001 4.0001L13.5 2.00023L10.5 2.00025L10.5001 4.00012L13.5001 4.0001Z"/>
          </svg>
        </a>

        <div className="footer__links">
          <a href="#!" className="footer__logo logo">LOGOS</a>

          <p className="footer__ooo">
            © ООО СК «АПШЕРОН» <br/>
            Все права защищены. 2010-2020
          </p>

          <a href="#!" className="footer__link">Пользовательское соглашение</a>
          <a href="#!" className="footer__link">Карта сайта</a>
          <a href="#!" className="footer__link">Политика конфиденциальности</a>
        </div>

        <Nav/>
      </FooterContainer>
    </footer>
  )
}

export default Footer;