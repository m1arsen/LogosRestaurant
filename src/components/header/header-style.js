import { Link } from 'react-router-dom';

import styled from 'styled-components';
import {Container} from '../../styles/styles';

import { vars } from '../../styles/styles';
const {secondaryTextColor, secondaryAccentColor, green, greenHover, accentColor} = vars;

export const HeaderSection = styled.header`
  background-color: rgb(64, 60, 59);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const HeaderContainer = styled(Container)`
  padding: 24px 15px;
  display: flex;
  align-items: center;
`;

export const HeaderSearch = styled.div`
  margin-right: 30px;
  padding: 16px 18px;
  width: 100%;
  max-width: 555px;
  border-radius: 10px;
  background-color: ${secondaryAccentColor};

  display: flex;
  align-items: center;

  input {
    background: none;
    border: none;
    width: 100%;

    font-family: 'Gilroy Regular';
    color: #fff;

    &::placeholder {
      color: ${secondaryTextColor};
    }
`;

export const HeaderLocationIcon = styled.img`
  width: 15.36px;
  height: 18.27px;
  margin-right: 14.4px;
`;

export const HeaderSearchIcon = styled.img`
  transition: 0.2s;
  height: 17.98px;
  width: 17.98px;

  &:hover {
    opacity: 0.7;
  }
`;

export const HeaderContacts = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const HeaderContactsBg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${green};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContactsIcon = styled.img`
  width: 15px;
  height: 15px;
`;

export const HeaderContactsNum = styled.div`
  line-height: 20px;

  p {
    font-family: 'Gilroy Regular';
    font-size: 12px;
    color: ${secondaryTextColor};
  }

  a {
    font-family: 'Gilroy Bold';
    font-size: 16px;

    transition: color .2s linear;

    &:hover {
      color: ${secondaryTextColor};
    }
  }
`;

export const HeaderCart = styled.button`
  margin-left: auto;
  padding: 7px 0;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  background-color: ${green};
  cursor: pointer;
  border-radius: 10px;

  font-family: 'Gilroy Semibold';

  transition: background-color .2s linear;

  &:hover {
    background-color: ${greenHover};
  }
`;

export const HeaderCartHead = styled.div`
  font-size: 14px;
  // line-height: 16.7px;
  line-height: 36px;
  color: #fff;

  border-right: 1px solid rgba(255, 255, 255, 0.3);

  padding: 0 22px;
`;

export const HeaderCartCounter = styled.div`
  padding: 0 13px;

  position: relative;
  z-index: 1;

  position: relative;

  div {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    font-size: 12px;
    color: ${accentColor};
    line-height: 1;
  }
`;

export const HeaderCartImg = styled.img`
  margin: 0 15.75px;

  width: 18.5px;
  height: 18.1px;
`;