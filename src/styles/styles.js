import styled from "styled-components";

// Видимо бесполезный импорт, надо разобраться как использовать вары, либо их вынести в отдельный файл.
import './base/vars.scss';

export const Container = styled.div`
  max-width: 1395px;
  margin: 0 auto;
  padding: 0 15px;
`;

const green = '#618967';

export const Title = styled.h1`
  padding-left: 20px;
  font-family: 'Gilroy Bold';
  font-size: 32px;
  line-height: 39px;
  text-transform: uppercase;

  position: relative;

  border-left: 4px solid #618967;
`;
