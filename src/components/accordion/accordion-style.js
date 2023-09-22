import styled from "styled-components";

export const AccordionContainer = styled.ul`
  width: 100%;
  max-width: 672px;
  height: min-content;
`;

export const AccordionItemLine = styled.li`
  margin-bottom: 10px;

  border-radius: 10px;
  background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
`;

export const AccordionHeader = styled.button`
  padding: 16px 30px;
  width: 100%;

  font-size: 18px;
  line-height: 35px;
  font-family: 'Gilroy Medium';
  color: white;

  background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
  border-radius: 10px;

  cursor: pointer;
  position: relative;
  text-align: left;
  transition: 0.2s;
`;

export const AccordionBody = styled.div`
  padding: 35px 40px;

  font-size: 16px;
  line-height: 25px;
  font-family: 'Gilroy Regular';

  // background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
  border-radius: 0 0 10px 10px;
`;

export const AccordionCollapse = styled.div`
  height: 0;

  overflow: hidden;
  transition: height 0.2s;
`;

export const AccordionArrow = styled.img`
  position: absolute;
  top: 50%;
  transfrom: translateY(-50%);

  right: 30px;
  display: block;
  transition: 0.2s;
`;