// Стилизация
import { FooterSection, FooterContainer, FooterUpBtn, FooterLinks, FooterOrganization, LogoStyleFooter, FooterLink } from './footer-style';

// Компоненты
import Nav from '../nav/Nav';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterUpBtn href="#top">
          <svg width="24" height="14" fill="#222021">
            <path d="M13.0607 0.939577C12.4749 0.353795 11.5252 0.353801 10.9394 0.939592L1.3935 10.4856C0.807718 11.0714 0.807724 12.0211 1.39351 12.6069C1.9793 13.1927 2.92905 13.1927 3.51483 12.6069L12.0001 4.12156L20.4854 12.6068C21.0712 13.1926 22.0209 13.1926 22.6067 12.6068C23.1925 12.021 23.1925 11.0712 22.6067 10.4855L13.0607 0.939577ZM13.5001 4.0001L13.5 2.00023L10.5 2.00025L10.5001 4.00012L13.5001 4.0001Z"/>
          </svg>
        </FooterUpBtn>

        <FooterLinks>
          <LogoStyleFooter to={'/'}>LOGOS</LogoStyleFooter>

          <FooterOrganization>
            © ООО СК «АПШЕРОН» <br/>
            Все права защищены. 2010-2020
          </FooterOrganization>

          <FooterLink href="#!">Пользовательское соглашение</FooterLink>
          <FooterLink href="#!">Карта сайта</FooterLink>
          <FooterLink href="#!">Политика конфиденциальности</FooterLink>
        </FooterLinks>

        <Nav/>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer;