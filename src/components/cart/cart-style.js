import styled from "styled-components";
import {Container, Title} from '../../styles/styles';
import { CartItemStyles } from "../cartItem/cartItem-style";
import { CartAddItemStyles } from "../cartAddItem/cartAddItem-style";

import { Link } from "react-router-dom";

export const CartWrapper = styled.section`
  padding: 35px 0 90px;
`;

export const CartContainer = styled(Container)`
  max-width: 1095px;
`;

export const CartTitle = styled(Title)`
  margin-bottom: 70px;

  display: flex;
  align-items: flex-end;
  column-gap: 15px;

  p:last-child {
    margin-bottom: 6px;

    font-size: 15px;
    line-height: 18px;
    color: #72A479;
    text-transform: lowercase;
    font-family: 'Gilroy Medium';
  }
`;

export const BackBtn = styled(Link)`
  margin-bottom: 20px;
  padding-left: 12px;
  max-width: 135px;

  display: flex;
  align-items: center;
  font-family: 'Gilroy Bold';

  position: relative;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }

  img {
    position: absolute;
    left: 0;
    top: 58%;
    transform: translateY(-50%);
  }
`;

export const CartItems = styled.div`
  margin-bottom: 40px;

  background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
  border-radius: 10px;
  overflow: hidden;

  ${CartItemStyles} + ${CartItemStyles} {
    border-image: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    border-image-slice: 1;
    border-top: 1px solid;
  }
`;

export const CartAddTitle = styled.h2`
  margin-bottom: 30px;

  font-size: 25px;
  line-height: 30px;
  font-family: 'Gilroy Bold';
  text-transform: uppercase;
`;

export const CartAddItems = styled.div`
  margin: 0 auto 80px;
  background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
  border-radius: 10px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);

    width: 1050px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${CartAddItemStyles} + ${CartAddItemStyles} {
    border-image: linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%);
    border-image-slice: 1;
    border-left: 1px solid;
  }
`;

export const CartTotal = styled.div`
  margin: 0 auto;
  padding: 20px 32px;
  max-width: 760px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
  border-radius: 10px;
`;

export const CartPrice = styled.p`
  margin-bottom: 5px;

  font-size: 25px;
  line-height: 30px;
  font-family: 'Gilroy Bold';

  span:first-child {
    font-size: 18px;
    line-height: 21px;
    color: #A6A7AB;
    font-family: 'Gilroy Regular';
  }
`;

export const CartDeliveryPrice = styled.p`
  margin-bottom: 11px;

  font-size: 12px;
  line-height: 14px;
  font-family: 'Gilroy Medium';

  span {
    font-family: 'Gilroy Bold';
    color: #72A479;
  }
`;

export const CartDeliveryFreePrice = styled.p`
  margin-bottom: 11px;

  font-size: 12px;
  line-height: 14px;
  font-family: 'Gilroy Medium';

  span {
    font-family: 'Gilroy Bold';
    color: #72A479;
  }
`;

export const CartTotalSum = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-family: 'Gilroy Regular';

  span {
    font-family: 'Gilroy Bold';
    color: #72A479;
  }
`;

export const CartTotalBtn = styled(Link)`
  padding: 17px 50px;

  font-size: 14px;
  line-height: 17px;
  font-family: 'Gilroy Bold';
  color: #fff;

  background: #618967;
  border-radius: 10px;

  transition: .2s linear;

  &:hover {
    background: #587d5e;
  }
`;

export const CartTotalBtnDisabled = styled(CartTotalBtn)`
  background: #433f3e;
  cursor: not-allowed;

  &:hover {
    background: #433f3e;
  }
`;


