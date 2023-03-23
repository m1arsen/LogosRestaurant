import './main.scss';
import mainTitle from '../../resources/main-title.svg';

const Main = () => {
  return (
    <main class="main">
      <div class="main__container container">
        <img src={mainTitle} alt="title" class="main__title"/>
      </div>
    </main>
  )
}

export default Main;