import styled from "styled-components";
import {Container, Title} from '../../styles/styles';

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

  display: flex;
  align-items: center;
  font-family: 'Gilroy Bold';

  position: relative;

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
`;

export const CartItem = styled.div`
  padding: 20px;

  display: grid;
  align-items: center;
  grid-template-columns: 2fr 4fr 2fr 1fr 1fr 1fr 1fr;

  &:hover {
    background-image: linear-gradient(90deg, #423f3e 0%, #4a4544 100%);
  }

  &_img {
    max-width: 117px;
    max-height: 86px;
    overflow: hidden;
    cursor: pointer;

    &:hover img {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: 100%;
      transition: 3s linear;
    }

  }

  &_info {
    max-width: 270px;

    h3 {
      margin-bottom: 4px;

      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
      font-family: 'Gilroy Bold';
      text-transform: uppercase;
    }

    p {
      font-size: 12px;
      line-height: 14px;
      color: #A6A7AB;
      font-family: 'Gilroy Regular';
    }

  }

  &_counter {
    grid-column-start: 4;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90px;

    input {

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        display: none;
        -webkit-appearance: none;
        margin: 0;
      }

      background: 0;
      width: 40px;

      padding: 0;
      text-align: center;
      border: 0;
      border-radius: 0;

      font-size: 20px;
      line-height: 26px;
      font-family: 'Gilroy Bold';
      color: #fff;
    }
  }

  &_minus {
    padding: 11.5px 7.5px;
    background-color: #72A479;
    border-radius: 50%;

    transition: .1s ease-in-out;

    &:hover {
      background-color: #86bf8d;
    }
  }

  &_plus {

    padding: 7.5px;
    background-color: #72A479;
    border-radius: 50%;

    transition: .1s ease-in-out;

    &:hover {
      background-color: #86bf8d;
    }
  }

  &_price {
    grid-column-start: 6;

    font-size: 20px;
    line-height: 24px;
    font-family: 'Gilroy Bold';
  }

  &_delete {
    padding: 8.5px 9px;
    background-color: #72A479;
    border-radius: 50%;

    transition: .2s ease-in-out;

    &:hover {
      background-color: #86bf8d;
    }
  }
`;
