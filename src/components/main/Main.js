import './main.scss';
import mainTitle from '../../resources/main-title.svg';

const Main = () => {
  return (
    <main className="main">
      <div className="main__container container">
        <img src={mainTitle} alt="title" className="main__title"/>
      </div>
    </main>
  )
}

export default Main;