import styled from 'styled-components';

import { Container, LogoStyle } from '../../styles/styles';

export const FooterSection = styled.footer`
  background: linear-gradient(270.7deg, #44403F 0.4%, #211F20 100%);
`;

export const FooterContainer = styled(Container)`
  padding: 26px 30px 30px 120px;

  display: flex;
  column-gap: 86px;

  position: relative;
`;

export const FooterUpBtn = styled.a`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;

  width: 64px;
  height: 64px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
`;

export const FooterLinks = styled.div`
  max-width: 208px;
`;

export const FooterOrganization = styled.p`
  margin-bottom: 7px;

  font-family: 'Gilroy Medium';
  font-size: 12px;
  line-height: 14px;
  color: #CFCFCF;
`;

export const LogoStyleFooter = styled(LogoStyle)`
  display: inline-block;
  margin-bottom: 15px;
`;

export const FooterLink = styled.a`
  margin-bottom: 7px;
  display: inline-block;

  font-family: 'Gilroy Medium';
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  transition: .2s linear;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0);
  }
`;