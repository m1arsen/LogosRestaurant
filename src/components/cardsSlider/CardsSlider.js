import { Swiper, SwiperSlide } from 'swiper/react';

import { useSelector } from 'react-redux';

import SliderCard from '../sliderCard/SliderCard';
import Spinner from '../spinner/Spinner';

import { CardsSliderContainer, CardsSliderTitle } from './cardsSlider-style';
import { useEffect, useState } from 'react';

const CardsSlider = ({ props }) => {
  const { cartItems, addToCart, removeToCart } = props;
  const [filteredItems, setFilteredItems] = useState([]);
  const { items, status } = useSelector((state) => state.items);
  const { categories, activeCategory } = useSelector((state) => state.categories);

  useEffect(() => {
    if (status === 'success') {
      setFilteredItems(items.filter((item) => item.category.id === activeCategory));
    }
  }, [activeCategory, status]);

  return (
    <CardsSliderContainer>
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <h1>Error</h1>
      ) : (
        <>
          <CardsSliderTitle>{categories[activeCategory].name}</CardsSliderTitle>
          <Swiper
            loop={false}
            slidesPerView={4}
            spaceBetween={20}
            speed={1000}
            style={{ padding: '25px 50px 70px' }}
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={item.id}>
                <SliderCard
                  item={item}
                  cartItems={cartItems}
                  addToCart={addToCart}
                  removeToCart={removeToCart}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </CardsSliderContainer>
  );
};

export default CardsSlider;
