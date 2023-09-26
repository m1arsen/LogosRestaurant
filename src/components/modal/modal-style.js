import styled from "styled-components";

import { Title } from "../../styles/styles";

export const ModalStyles = styled.div`
  padding: 20px;
  padding-bottom: 60px;
  width: 460px;
  height: 350px;

  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: 10;

  background-color: #494544;
  border-radius: 10px
`;

export const ModalContent = styled.div`
  padding-top: 30px;
  height: 100%;
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  img {
    transition: 0.2s;
  }

  &:hover img {
    opacity: 0.7;
  }
`;

export const ModalEmptyCartPic = styled.div`
  margin-bottom: 14px;
`;

export const ModalTitle = styled(Title)`
  border-left: unset;
  padding-left: unset;
`;

export const ModalMenuBtn = styled.button`
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
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  width: 100%
  height: 100;

  background-color: #211F20;
  opacity: 50%;
`;