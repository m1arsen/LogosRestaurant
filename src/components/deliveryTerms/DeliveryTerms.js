import styled from 'styled-components';
import {Title} from '../../styles/styles';
import { Container } from '../../styles/styles';
import { DeliveryTermsContainer, DeliveryTermsTitle, DeliveryTermsAccordion, DeliveryTermsMap, DeliveryTermsInfo, DeliveryTermsInfoSchedule, DeliveryTermsOrder } from './deliveryTerms-style';

import './deliveryTerms.scss';

import accordionIcon from '../../resources/delivery-terms/accordion-icon.svg';

const DeliveryTerms = () => {
  return (
    <section className="delivery-terms">
      <Container>

        <DeliveryTermsTitle>Условия доставки</DeliveryTermsTitle>

        <DeliveryTermsContainer>

          <DeliveryTermsAccordion>

            <div className="delivery-terms__accordion_item" data-tab="#accordion-tab_1">

              <div className="delivery-terms__accordion_btn">
                <p>У наших курьеров всегда должна быть сдача!</p>
                <img className="delivery-terms__accordion_icon" src={accordionIcon} alt="accordion-icon"/>
              </div>

              <div className="delivery-terms__accordion_info" id="accordion-tab_1">
                <p>При оплате наличными будьте уверены, что у нашего курьера всегда будет сдача.</p>
              </div>

            </div>

            <div className="delivery-terms__accordion_item" data-tab="#accordion-tab_2">

              <div className="delivery-terms__accordion_btn">
                <p>Вам что-то не довезли?</p>
                <img className="delivery-terms__accordion_icon" src={accordionIcon} alt="accordion-icon"/>
              </div>

              <div className="delivery-terms__accordion_info" id="accordion-tab_2">
                <p>Наш ресторан ежедневно получает множество заказов и если отдел доставки что-либо перепутает, то мы готовы бесплатно все довезти, а также порадовать вас бонусом.</p>
              </div>

            </div>

            <div className="delivery-terms__accordion_item active" data-tab="#accordion-tab_3">

              <div className="delivery-terms__accordion_btn">
                <p>Не понравился продукт?</p>
                <img className="delivery-terms__accordion_icon" src={accordionIcon} alt="accordion-icon"/>
              </div>

              <div className="delivery-terms__accordion_info active" id="accordion-tab_3">
                <p>В случае если клиенту не понравится наш продукт мы вернем стоимость продукта !</p>
              </div>

            </div>

            <div className="delivery-terms__accordion_item" data-tab="#accordion-tab_4">

              <div className="delivery-terms__accordion_btn">
                <p>Если появились замечания</p>
                <img className="delivery-terms__accordion_icon" src={accordionIcon} alt="accordion-icon"/>
              </div>

              <div className="delivery-terms__accordion_info" id="accordion-tab_4">
                <p>При появлении замечаний вы можете обратится в нашу тех. поддержку и мы выслушаем все замечания.</p>
              </div>

            </div>

            <div className="delivery-terms__accordion_item" data-tab="#accordion-tab_5">

              <div className="delivery-terms__accordion_btn">
                <p>Оплата Visa, MasterCard и МИР</p>
                <img className="delivery-terms__accordion_icon" src={accordionIcon} alt="accordion-icon"/>
              </div>

              <div className="delivery-terms__accordion_info" id="accordion-tab_5">
                <p>Доступные все платежные системы Visa, MasterCard и МИР.</p>
              </div>

            </div>

            <div className="delivery-terms__accordion_item" data-tab="#accordion-tab_6">

              <div className="delivery-terms__accordion_btn">
                <p>Оплата картой</p>
                <img className="delivery-terms__accordion_icon" src={accordionIcon} alt="accordion-icon"/>
              </div>

              <div className="delivery-terms__accordion_info" id="accordion-tab_6">
                <p>Для оплаты картой вам нужно при оформлении доставки указать "Оплата картой". В таком случае наш курьер приедет с терминалом и вы сможете оплатить покупку.</p>
              </div>

            </div>

          </DeliveryTermsAccordion>

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