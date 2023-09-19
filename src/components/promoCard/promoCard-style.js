import styled from "styled-components";

export const PromoCardImg = styled.div`
  max-height: 180px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;

  img {
    transition: 3s linear;
  }
`;

export const PromoCardContainer = styled.div`
  width: 100%;
  max-width: 440px;

  cursor: pointer;
  background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
  border-radius: 10px;

  &:hover ${PromoCardImg} img {
    transform: scale(1.05);
  }
`;

export const PromoCardInfo = styled.div`
  padding: 15px 25px;
`;

export const PromoCardTitle = styled.h2`
  margin-bottom: 5px;

  font-size: 18px;
  line-height: 22px;
  font-family: 'Gilroy Bold';
`;

export const PromoCardText = styled.p`
  margin-bottom: 19px;

  font-size: 14px;
  line-height: 16px;
  font-family: 'Gilroy Regular';
  color: #A6A7AB;
`;

export const PromoCardDate = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-family: 'Gilroy Regular';
  color: #6FA076;
`;