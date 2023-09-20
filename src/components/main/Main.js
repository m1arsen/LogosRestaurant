import mainTitle from '../../resources/main-title.svg';

import { MainStyle, MainContainer, MainTitle } from './main-style';

const Main = () => {
  return (
    <MainStyle>
      <MainContainer>
        <MainTitle src={mainTitle} alt="title" className="main__title"/>
      </MainContainer>
    </MainStyle>
  )
}

export default Main;