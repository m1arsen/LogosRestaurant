import styled from "styled-components";
import { Title } from "../../styles/styles";

export const DeliveryTermsTitle = styled(Title)`
  margin: 50px 0 42px;
`;

export const DeliveryTermsContainer = styled.div`
  margin-bottom: 30px;
  max-height: 584px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  column-gap: 20px;
`;

export const DeliveryTermsMap = styled.div`
  width: 100%;
  height: 100%;
  // align-items: end;
  max-width: 672px;
  border-radius: 10px;
  overflow: hidden;
`;

export const DeliveryTermsInfo = styled.div`
  margin-bottom: 40px;

  display: flex;
  column-gap: 100px;
`;

export const DeliveryTermsInfoSchedule = styled.div`
  font-size: 22px;
  line-height: 35px;

  h2 {
    font-family: 'Gilroy Bold';
  }

  p {
    font-family: 'Gilroy Regular';
    color: #CFCFCF;
  }
`;

export const DeliveryTermsOrder = styled.div`
  margin-bottom: 37px;
  max-width: 700px;

  font-size: 22px;
  line-height: 35px;

  h2 {
    font-family: 'Gilroy Bold';
  }

  p {
    font-family: 'Gilroy Regular';
    color: #CFCFCF;
  }
`;