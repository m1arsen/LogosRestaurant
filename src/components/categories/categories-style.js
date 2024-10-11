import styled from 'styled-components';
import { Container } from '../../styles/styles';

import { vars } from '../../styles/styles';
const { green } = vars;

export const CategoriesContainer = styled(Container)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  font-family: 'Gilroy Regular';
  font-size: 18px;
  line-height: 21px;
  color: #cfcfcf;
`;

export const CategoryItem = styled.div`
  padding: 28px 0;
  cursor: pointer;

  position: relative;

  transition: 0.2s linear;

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

    transition: opacity 0.2s linear;
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
