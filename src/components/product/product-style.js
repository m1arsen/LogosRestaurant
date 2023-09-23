import styled from "styled-components";
import { Container } from "../../styles/styles";

import { Link } from "react-router-dom";

export const ProductSection = styled.section`
  padding: 40px 0 14px;
`;

export const ProductContainer = styled(Container)`
    max-width: 1212px;
`;

export const ProductLink = styled(Link)`
  margin-bottom: 27px;
  max-width: 166px;

  display: flex;
  align-items: center;
  column-gap: 10px;

  img {
    padding: 7.5px 10px;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 50%;
  }

  p {
    font-size: 16px;
    line-height: 19px;
    font-family: 'Gilroy Semibold';
  }
`;

export const ProductLine = styled.div`
  margin: 50px 0;

  border-image: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
  border-image-slice: 1;
  border-top: 1px solid;
`;



















