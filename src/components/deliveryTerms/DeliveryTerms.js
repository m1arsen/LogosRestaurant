// Стилизация
import { Container } from '../../styles/styles';
import {
  DeliveryTermsContainer,
  DeliveryTermsTitle,
  DeliveryTermsMap,
  DeliveryTermsInfo,
  DeliveryTermsInfoSchedule,
  DeliveryTermsOrder,
} from './deliveryTerms-style';

// Компоненты
import Accordion from '../accordion/Accordion';

const FAQ = [
  [
    'У наших курьеров всегда должна быть сдача!',
    'При оплате наличными будьте уверены, что у нашего курьера всегда будет сдача.',
  ],
  [
    'Вам что-то не довезли?',
    'Наш ресторан ежедневно получает множество заказов и если отдел доставки что-либо перепутает, то мы готовы бесплатно все довезти, а также порадовать вас бонусом.',
  ],
  [
    'Не понравился продукт?',
    'В случае если клиенту не понравится наш продукт мы вернем стоимость продукта !',
  ],
  [
    'Если появились замечания',
    'При появлении замечаний вы можете обратится в нашу тех. поддержку и мы выслушаем все замечания.',
  ],
  ['Оплата Visa, MasterCard и МИР', 'Доступные все платежные системы Visa, MasterCard и МИР.'],
  [
    'Оплата картой',
    "Для оплаты картой вам нужно при оформлении доставки указать 'Оплата картой'. В таком случае наш курьер приедет с терминалом и вы сможете оплатить покупку.",
  ],
];

const DeliveryTerms = () => {
  return (
    <section className="delivery-terms">
      <Container>
        <DeliveryTermsTitle>Условия доставки</DeliveryTermsTitle>

        <DeliveryTermsContainer>
          <Accordion faqList={FAQ} />

          <DeliveryTermsMap>
            <iframe
              title="yandexmap"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A491d52300c2b47c73b9cbf7145ac2911619a4561cfe5e1e1790d4e4c998bcd00&amp;source=constructor"
              width="672px"
              height="584px"
              frameborder="0"
            ></iframe>
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
          <p>
            Бесплатная доставка пешим курьером при сумме заказа от <span>1000</span> ₽ Доставка
            оператором такси от любой суммы заказа - по тарифам перевозчика.
          </p>
        </DeliveryTermsOrder>
      </Container>
    </section>
  );
};

export default DeliveryTerms;
