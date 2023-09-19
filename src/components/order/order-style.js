import styled from "styled-components";
import {Container, Title} from '../../styles/styles';

import { vars } from "../../styles/styles";
// const { green } = vars;

export const OrderSection = styled.section`
  padding: 50px 0 90px;

  font-size: 16px;
  line-height: 19px;
  font-family: 'Gilroy Regular';

  input:focus::placeholder {
    opacity: 0;
  }
`;

export const OrderContainer = styled(Container)`
  margin: 0 auto;

  width: 100%;
  max-width: 800px;
`;

export const OrderTitle = styled(Title)`
  margin-bottom: 54px;
`;

export const OrderStopL = styled.div`
  width: 100%;
  padding: 43px 30px;
  margin-bottom: 20px;

  background: #2B2829;
  border-radius: 10px;

  position: relative;

  h2 {
    margin-bottom: 20px;

    font-size: 22px;
    line-height: 27px;
    font-family: 'Gilroy Bold';
  }

  p {
    font-size: 18px;
    line-height: 21px;
  }

  img {
    width: 154.72px;
    height: 131.5px;

    position: absolute;
    bottom: 0;
    right: 55px;
  }
`;