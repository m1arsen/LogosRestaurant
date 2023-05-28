import styled from "styled-components";
import {Container, Title} from '../../styles/styles';

import { vars } from "../../styles/styles";
const { green } = vars;

export const MenuTop = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.01);
`;

export const MenuTopContainer = styled(Container)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  font-family: 'Gilroy Regular';
  font-size: 18px;
  line-height: 21px;
  color: #CFCFCF;
`;

export const MenuPos = styled.div`
  padding: 28px 0;
  cursor: pointer;

  position: relative;

  transition: .2s linear;

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: -1.5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${green};
    box-shadow: 0px 5px 12px rgba(114, 164, 121, 0.3);

    transition: opacity .2s linear;
    opacity: 0;
  }

  &.active::after {
    opacity: 1;
  }

  &:hover {
    color: #fff;
  }

  &:hover:after {
    opacity: 1;
  }
`;

export const MenuPosContainer = styled(Container)`
  padding: 0;
`;

export const MenuPosTitle = styled(Title)`
  margin: 50px 0 25px;
  margin-left: 30px;
`;



