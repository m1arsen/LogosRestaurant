import styled from "styled-components";

export const vars = {
  'accentColor': '#403C3B',
  'secondaryAccentColor': '#504B4A',
  'secondaryTextColor': '#CFCFCF',
  'green': '#618967',
  'greenHover': '#6a9470'
}

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