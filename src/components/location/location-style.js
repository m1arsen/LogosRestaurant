import styled from "styled-components";
import { Container } from "../../styles/styles";

// Изображения
import locationIcon from '../../resources/location/location-icon.svg';
import mailIcon from '../../resources/location/mail-icon.svg';

export const LocationSection = styled.section`
  box-shadow: 0px 40px 40px rgba(43, 40, 40, 0.6);
`;

export const LocationContainer = styled(Container)`
  position: relative;
`;

export const LocationContacts = styled.div`
  padding: 25px 0;

  width: 100%;
  max-width: 526px;

  background-color: #2E2B2C;
  border-radius: 15px;
  box-shadow: 0px 0px 70px rgba(0, 0, 0, 1);

  position: absolute;
  z-index: 5;
  top: 210px;
  left: 67px;
`;

export const LocationTitle = styled.h1`
  padding: 0 0 26px 43px;

  font-family: 'Gilroy Bold';
  font-size: 30px;
  line-height: 36px;
  text-transform: uppercase;
`;

export const LocationTextInfo = styled.div`
  padding: 15px 48px 28px 87px;

  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
  border-image-slice: 1;
`;

export const LocationAdressSection = styled.div`
  margin-bottom: 20px;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: -30.7px;

    width: 15.36px;
    height: 18.27px;

    background: url(${locationIcon}) center no-repeat;
    background-size: cover;
  }
`;

export const LocationMailSection = styled.div`
  margin-bottom: 20px;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: -30.7px;

    width: 15.36px;
    height: 18.27px;

    background: url(${mailIcon}) center no-repeat;
    background-size: cover;
  }
`;

export const LocationInfoTitle = styled.h2`
  margin-bottom: 3px;

  font-family: 'Gilroy Regular';
  font-size: 14px;
  line-height: 16px;
  color: #CFCFCF;
`;

export const LocationInfoAdress =  styled.p`
  font-family: 'Gilroy Semibold';
  font-size: 16px;
  line-height: 19px;
`;

export const LocationInfoMail = styled.a`
  font-family: 'Gilroy Semibold';
  font-size: 16px;
  line-height: 19px;
`;

export const LocationButtons = styled.div`
  padding: 17px 42px 30px 52px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 33px;
`;

export const LocationButtonsBook = styled.button`
  padding: 22px 30px;

  font-family: 'Gilroy Bold';
  font-size: 13px;
  line-height: 16px;
  color: #FFFFFF;
  text-transform: uppercase;

  background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
  border-radius: 10px;

  transition: .2s linear;

  &:hover {
    box-shadow: 0px 5px 10px rgba(114, 163, 121, 0.3);
  }
`;

export const LocationNumber = styled.div`
  a {
    font-family: 'Gilroy Bold';
    font-size: 23px;
    line-height: 28px;
  }

  p {
    font-family: 'Gilroy Regular';
    font-size: 13px;
    line-height: 15px;
    color: #CFCFCF;
  }
`;

export const LocationSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 26px;

  p {
    font-family: 'Gilroy Semibold';
    font-size: 16px;
    line-height: 19px;
  }
`;

export const LocationLinks = styled.div`
  display: flex;
  column-gap: 10px;

  svg {
    transition: .2s linear;
  }

  a:hover svg {
    opacity: 0.7;
  }
`;