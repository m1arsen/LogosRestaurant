import styled from "styled-components";

// Картинки
import OurCafeBg from '../../resources/our-cafe/our-cafe-bg.jpg';

export const OurCafeSection = styled.section`
  box-shadow: 0px 100px 100px -50px rgba(0,0,0,0.75);

  max-width: 1395px;
  margin: 10px auto -150px;

  position: relative;
  z-index: 2;
`;

export const OurCafeContainer = styled.div`
  padding: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #232122;
  background-image: linear-gradient(90deg, rgba(33,31,32,1) 34%, rgba(255,255,255,0) 100%), url(${OurCafeBg});
  background-position: right center;
  background-repeat: no-repeat;
`;

export const OurCafeInfo = styled.div`
  max-width: 586px;

  h1 {
    margin-bottom: 26px;

    font-family: 'Gilroy Bold';
    font-size: 32px;
    line-height: 39px;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 60px;

    font-family: 'Gilroy Regular';
    font-size: 20px;
    line-height: 25px;
    color: #CFCFCF;
  }

  button {
    padding: 22px 45px;

    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    font-family: 'Gilroy Bold';
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    text-transform: uppercase;

    transition: .2s linear;

    &:hover {
      background: #232122;
    }
  }
`;

export const OurCafeBenefits = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

export const OurCafeBenefitIcon = styled.svg`
  position: absolute;
  top: 70px;

  max-width: 70px;
  max-height: 70px;

  transition: fill .2s linear;
`;

export const OurCafeBenefitName = styled.h2`
  margin-top: auto;
  margin-bottom: 40px;
  width: 100%;

  font-family: 'Gilroy Regular';
  text-align: center;
  font-size: 18px;
  line-height: 25px;

  transition: color .2s linear;
`;

export const OurCafeBenefit = styled.div`
  width: 227px;
  height: 227px;
  background: rgba(80, 75, 74, 0.7);
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: background .2s linear;

  position: relative;

  &:hover {
    background: #504B4A;
  }

  &:hover ${OurCafeBenefitIcon} {
    fill: #79B282;
  }

  &:hover ${OurCafeBenefitName} {
    color: #79B282;
  }
`;