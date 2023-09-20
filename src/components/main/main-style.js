import styled from "styled-components";
import { Container } from "../../styles/styles";

// Каритинки
import mainBg from '../../resources/main-bg.jpg';

export const MainStyle = styled.main`
  height: 70vh;
  background-color: #211F20;
  background-image: linear-gradient(90deg, rgba(33,31,32,1) 0%, rgba(68,64,63,0) 70%), url(${mainBg});
  background-position: right center;
  background-repeat: no-repeat;
  background-size: 75%;

  overflow: hidden;
`;

export const MainContainer = styled(Container)`
  position: relative;
  height: 100%;
`;

export const MainTitle = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;