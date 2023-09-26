import styled from "styled-components";
import { Link } from "react-router-dom";

export const vars = {
  'accentColor': '#403C3B',
  'secondaryAccentColor': '#504B4A',
  'secondaryTextColor': '#CFCFCF',
  'green': '#618967',
  'greenHover': '#6a9470'
}

const { secondaryTextColor } = vars;

export const Container = styled.div`
  max-width: 1395px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Title = styled.h1`
  padding-left: 20px;
  font-family: 'Gilroy Bold';
  font-size: 32px;
  line-height: 39px;
  text-transform: uppercase;

  position: relative;

  border-left: 4px solid #618967;
`;

export const LogoStyle = styled(Link)`
  margin-right: 72px;

  font-family: 'Gilroy Bold';
  font-size: 25px;
  line-height: 25px;
  letter-spacing: 0.15em;

  transition: color .2s linear;

  &:hover {
    color: ${secondaryTextColor};
  }
`;

export const Button = styled.button`
  padding: 17px 35px;
  margin-top: auto;

  font-size: 14px;
  line-height: 17px;
  font-family: 'Gilroy Semibold';
  color: #fff;

  display: flex;
  align-items: center;
  column-gap: 12px;

  background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
  border-radius: 10px;

  transition: 0.2s linear;

  &:hover {
    box-shadow: 0px 5px 10px rgba(114, 163, 121, 0.3);
  }
`;