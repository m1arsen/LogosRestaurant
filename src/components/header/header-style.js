import styled from 'styled-components';
import {Container} from '../../styles/styles';

export const HeaderContainer = styled(Container)`
  padding: 24px 15px;
  display: flex;
  align-items: center;
`;

export const HeaderSearch = styled.div`
  margin-right: 30px;
  padding: 16px 18px;
  width: 100%;
  max-width: 555px;
  border-radius: 10px;
  background-color: $secondary-accent-color;

  display: flex;
  align-items: center;
`;