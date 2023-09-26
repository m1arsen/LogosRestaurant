import styled from "styled-components";
import { Button } from "../../styles/styles";

export const CartNoItemsStyle = styled.div`
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;

  h2 {
    font-size: 25px;
    line-height: 30px;
    font-family: 'Gilroy Bold';
    text-transform: uppercase;
  }
`;

export const CartNoItemsPromoBtn = styled(Button)`
  padding: 20px 32px;
  font-size: 20px;
`;

export const CartNoItemsMenuBtn = styled(Button)`
  background: none;
  border: 2px solid #618967;

  &:hover {
    background: #618967;
    box-shadow: none;
  }
`;