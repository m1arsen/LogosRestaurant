import { useState, useEffect } from 'react';

// Стилизация
import { Container } from '../../styles/styles';
import { DeliveryTermsContainer, DeliveryTermsTitle, DeliveryTermsMap, DeliveryTermsInfo, DeliveryTermsInfoSchedule, DeliveryTermsOrder } from './deliveryTerms-style';

// Компоненты
import Accordion from '../accordion/Accordion';
import Spinner from '../spinner/Spinner';

// Сервис
import useLogosService from '../../services/LogosService';

const DeliveryTerms = () => {
  const {loading, error, getFAQ} = useLogosService();

  const [FAQ, setFAQ] = useState([]);

  useEffect(() => {
    getFAQ().then(setFAQ);
  }, [])

  // const spinner = loading ? <Spinner/> : null;
  const spinner = loading ? <Spinner/> : null;
  const errorMessage = error ? <h1>Error</h1> : null;

  return (
    <section className="delivery-terms">
      <Container>

        <DeliveryTermsTitle>Условия доставки</DeliveryTermsTitle>

        <DeliveryTermsContainer>

          {spinner}
          {errorMessage}
          {!(loading && error) ? <Accordion faqList={FAQ}/> : null}

          <DeliveryTermsMap>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A491d52300c2b47c73b9cbf7145ac2911619a4561cfe5e1e1790d4e4c998bcd00&amp;source=constructor" width="672px" height="584px" frameborder="0"></iframe>
          </DeliveryTermsMap>

        </DeliveryTermsContainer>

        <DeliveryTermsInfo>
          <DeliveryTermsInfoSchedule>
            <h2>График работы доставки:</h2>
            <p>с 10:00-21:00</p>
          </DeliveryTermsInfoSchedule>
          <DeliveryTermsInfoSchedule>
            <h2>График работы кафе:</h2>
            <p>с 08:00-21:00</p>
          </DeliveryTermsInfoSchedule>
        </DeliveryTermsInfo>

        <DeliveryTermsOrder>
          <h2>Минимальный заказ:</h2>
          <p>Бесплатная доставка пешим курьером при сумме заказа от <span>1000</span> ₽
            Доставка оператором такси от любой суммы заказа - по тарифам
            перевозчика.</p>
        </DeliveryTermsOrder>

      </Container>
    </section>
  )
}

export default DeliveryTerms;