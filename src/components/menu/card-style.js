import styled from "styled-components";

import { SwiperSlide } from "swiper/react";

import { vars } from "../../styles/styles";
const {secondaryTextColor} = vars;

export const ItemCardBtns = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

export const ItemCardPrice = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-family: 'Gilroy Semibold';

  transition: .2s linear;
`;

export const ItemCardCart = styled.button`
  padding: 14px 18px;

  font-size: 14px;
  line-height: 17px;
  font-family: 'Gilroy Semibold';
  color: #fff;

  display: flex;
  align-items: center;
  column-gap: 12px;

  background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
  border-radius: 10px;

  & img {
    max-width: 18.5px;
  }
`;

export const ItemCardAddBtn = styled.button`
  padding: 0;

  position: absolute;
  bottom: 0;

  background-color: #618967;
  border-radius: 10px;

  transform: translateY(10px);
  opacity: 0;

  transition: .3s linear;

  &:hover {
    background-color: #72A479;
  }

  right: 0;

  img {
    padding: 13px 22px;
  }
`;

export const ItemCardRemoveBtn = styled(ItemCardAddBtn)`
  right: unset;
  left: 0;

  img {
    padding: 20px 22px;
  }
`;

export const ItemCard = styled(SwiperSlide)`
  max-width: 330px;
  height: 380px;
  width: 100%;

  border-radius: 10px;
  background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
  position: relative;

  transition: .2s linear;

  &:hover {
    box-shadow: 0px 30px 45px rgba(43, 40, 40, 0.9);
  }

  &:hover ${ItemCardPrice} {
    position: absolute;
    right: 50%;
    transform: translate(50%, 0);
  }

  &:hover ${ItemCardCart} {
    opacity: 0;
  }

  &:hover ${ItemCardAddBtn},
  &:hover ${ItemCardRemoveBtn} {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ItemCardCounter = styled.div`
  font-family: 'Gilroy Bold';
  font-size: 20px;
  line-height: 24px;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #79B382;

  position: absolute;
  top: -20px;
  right: -20px;
`;

export const ItemCardImgContainer = styled.div`
  padding-bottom: 227px;
  width: 100%;

  border-radius: 10px 10px 0 0;

  overflow: hidden;
  position: relative;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
`;

export const ItemCardInfo = styled.div`
  padding: 18px 20px;
  max-height: 158px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: red;

  border-radius: 10px;
  background: linear-gradient(90deg, #494544 0%, #504B4A 100%);

  &-block {
    width: 100%;

    &-container {
      margin-bottom: 5px;

      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export const ItemCardInfoBlock = styled.div`
  width: 100%;

  div {
    margin-bottom: 5px;

    display: flex;
    column-gap: 10px;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-family: 'Gilroy Bold';
      font-size: 18px;
      line-height: 23px;
    }

    p {
      font-family: 'Gilroy Regular';
      font-size: 12px;
      line-height: 14px;

      color: #fff;

      margin-left: auto;
    }
  }

  p {
    font-family: 'Gilroy Regular';
    font-size: 13px;
    line-height: 17px;
    color: ${secondaryTextColor};
  }

`;

export const ItemCardTitle = styled.h2`
  font-family: 'Gilroy Bold';
  font-size: 22px;
  line-height: 27px;
`;

