import styled from "styled-components";
import {Container, Title} from '../../styles/styles';
import { CartItemStyles } from "../cartItem/cartItem-style";

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
`;