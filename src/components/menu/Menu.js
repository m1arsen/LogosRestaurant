import Categories from '../categories/Categories';
import CardsSlider from '../cardsSlider/CardsSlider';

const Menu = (props) => {
  return (
    <section className="menu">
      <Categories />
      <CardsSlider props={props} />
    </section>
  );
};

export default Menu;
