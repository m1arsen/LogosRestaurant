import { PromoCardContainer, PromoCardImg, PromoCardInfo, PromoCardTitle, PromoCardText, PromoCardDate } from './promoCard-style';

const PromoCard = ({id, title, description, endDate, src, alt}) => {
  return (
    <PromoCardContainer key={id}>

      <PromoCardImg>
        <img src={src} alt={alt}/>
      </PromoCardImg>

      <PromoCardInfo>
        <PromoCardTitle>{title}</PromoCardTitle>
        <PromoCardText>{description}</PromoCardText>
        <PromoCardDate>{endDate}</PromoCardDate>
      </PromoCardInfo>

    </PromoCardContainer>
  )
}

export default PromoCard;