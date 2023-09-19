import { useState, useEffect } from 'react';

import useLogosService from '../../services/LogosService';

import Spinner from '../spinner/Spinner';

import '../../styles/blocks/_promotions.scss';
import { PromotionsSection, PromotionsTitleContainer, PromotionsTitle, PromotionsContainer } from './promotions-style';

import PromoCard from '../promoCard/PromoCard';

const Promotions = () => {
  const [promoCards, setPromoCards] = useState([]);
  const {loading, error, getPromotions} = useLogosService();

  useEffect(() => {
    getPromotions()
      .then(setPromoCards);
  }, [])

  const renderPromoCards = (items) => {
    return items.map(({id, title, description, endDate, src, alt}) => {
      return <PromoCard id={id} title={title} description={description} endDate={endDate} src={src} alt={alt}/>
    })
  }

  const spinner = loading ? <Spinner/> : null;
  const errorMessage = error ? <h1>Error</h1> : null;

  const promotionCards = !(loading && error) ? renderPromoCards(promoCards) : null;

  return (
    <PromotionsSection>
      <PromotionsTitleContainer>
        <PromotionsTitle><h1>Акции</h1></PromotionsTitle>
      </PromotionsTitleContainer>

      {/* Изначально было 2 контейнера, но при переносе стилей сделал из них один */}
      {/* <div className="container">
        <div className="promotions__container"></div>
      </div> */}

      <PromotionsContainer>
        {spinner}
        {errorMessage}
        {promotionCards}
      </PromotionsContainer>

    </PromotionsSection>
  )
}

export default Promotions;