import styled from "styled-components";

export const CartAddItemStyles = styled.div`
  padding: 20px 0;

  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  text-align: center;

  &:hover {
    background: linear-gradient(90deg, #423f3e 0%, #4a4544 100%);
  }

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }

  h3 {
    margin-bottom: 10px;

    font-size: 14px;
    line-height: 17px;
    font-family: 'Gilroy Bold';
    text-transform: uppercase;
  }
`;

export const CartAddImg = styled.div`
  margin: 0 auto 10px;
  max-width: 210px;
  max-height: 123px;

  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }

  img {
    height: 100%;
    transition: 3s linear;
  }
`;

export const CartAddBtn = styled.div`
  margin-bottom: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 7px;

  cursor: pointer;
  user-select: none;

  p {
    font-size: 12px;
    line-height: 14px;
    color: #C6CED1;
    font-family: 'Gilroy Regular';

    transition: .2s ease-in-out;
  }

  img {
    width: 18px;
    height: 18px;

    padding: 5px;
    background-color: #72A479;
    border-radius: 50%;

    transition: .2s ease-in-out;
  }

  &:hover p {
    color: #fff;
  }

  &:hover img {
    background-color: #86bf8d;
  }
`;

export const CartAddPrice = styled.p`
  font-size: 12px;
  line-height: 15px;
  font-family: 'Gilroy Bold';
`;