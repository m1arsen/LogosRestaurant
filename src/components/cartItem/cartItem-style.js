import styled from "styled-components";

export const CartItemStyles = styled.div`
  padding: 20px;

  display: grid;
  align-items: center;
  grid-template-columns: 2fr 4fr 2fr 1fr 1fr 1fr 1fr;

  &:hover {
    background-image: linear-gradient(90deg, #423f3e 0%, #4a4544 100%);
  }
`;

export const CartItemImg = styled.div`
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
`;

export const CartItemInfo = styled.div`
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
`;

export const CartItemCounter = styled.div`
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
`;

export const CartItemDecreaseBtn = styled.img`
  padding: 11.5px 7.5px;
  background-color: #72A479;
  border-radius: 50%;

  transition: .1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #86bf8d;
  }
`;

export const CartItemIncreaseBtn = styled.img`
  padding: 7.5px;
  background-color: #72A479;
  border-radius: 50%;

  transition: .1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #86bf8d;
  }
`;

export const CartItemPrice = styled.p`
  grid-column-start: 6;

  font-size: 20px;
  line-height: 24px;
  font-family: 'Gilroy Bold';
`;

export const CartItemDeleteBtn = styled.img`
  margin: 0 auto;
  padding: 8.5px 9px;

  background-color: #72A479;
  border-radius: 50%;

  transition: .2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #86bf8d;
  }
`;