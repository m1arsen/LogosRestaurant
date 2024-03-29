import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  max-width: 641px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-family: 'Gilroy Medium';
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;

    transition: color .2s linear;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;