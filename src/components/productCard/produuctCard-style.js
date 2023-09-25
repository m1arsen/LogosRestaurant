import styled from "styled-components";

import { vars } from "../../styles/styles";
const {green} = vars;

export const ProductCardStyles = styled.div`
  display: flex;
  height: 400px;

  border-radius: 10px;
  overflow: hidden;
`;

export const ProductCardImg = styled.div`
  overflow: hidden;
  // width: 50%;
  padding-left: 50%;
  // height: 100%;

  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const ProductCardInfo = styled.div`
  padding: 35px 50px;
  width: 50%;
  background: linear-gradient(90deg, #494544 0%, #504B4A 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-child {
    h1 {
      margin-bottom: 5px;

      font-size: 25px;
      line-height: 30px;
      font-family: 'Gilroy Bold';
    }

    p {
      font-size: 14px;
      line-height: 16px;
      font-family: 'Gilroy Regular';
      color: #CFCFCF;
    }
  }


`;

export const ProductCardBtns = styled.div`
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  column-gap: 30px;
`;

export const ProductCardBtnsPrice = styled.div`
  font-size: 25px;
  line-height: 30px;
  font-family: 'Gilroy Semibold';
`;

export const ProductCardBtnsContainer = styled.div`
  display: flex;
`;

export const ProductCardBtnsAdd = styled.div`
  border-radius: 0 24px 24px 0;

  width: 60px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #618967;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #72A479;
  }
`;

export const ProductCardBtnsRemove = styled.div`
  border-radius: 24px 0 0 24px;

  width: 60px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #618967;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #72A479;
  }
`;

export const ProductCardTable = styled.table`
  font-size: 12px;
  line-height: 14px;

  tr + tr {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  tr:last-child {
    font-family: 'Gilroy Medium';
  }

  tr:first-child {
    font-family: 'Gilroy Regular';
  }

  td {
    padding: 5px 0;
    text-align: center;
  }

  td + td {
    padding-left: 50px;
  }
`;

export const ProductCardCounter = styled.h2`
  font-family: 'Gilroy Medium';
  font-size: 18px;
  line-height: 20px;

  span {
    font-family: 'Gilroy Bold';
    color: ${green};
  }
`;