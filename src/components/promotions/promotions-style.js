import styled from "styled-components";
import {Container } from "../../styles/styles";

export const PromotionsSection = styled.section`
  margin-bottom: 70px;
`;

export const PromotionsTitleContainer = styled.div`
  padding: 50px 0 36px 50px;
  margin-bottom: 40px;

  border-image: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
  border-image-slice: 1;
  border-bottom: 1px solid;
`;

export const PromotionsTitle = styled(Container)`
  h1 {
    padding-left: 20px;
    font-family: 'Gilroy Bold';
    font-size: 32px;
    line-height: 39px;
    text-transform: uppercase;

    position: relative;

    border-left: 4px solid #618967;
  }
`;

// Решил совместить 2 контейнера, хотя они были отдельными дивами при написании стилей
export const PromotionsContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;