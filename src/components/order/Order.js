import { OrderSection, OrderContainer, OrderTitle, OrderStopL, OrderBtnsContainer } from './order-style';
import '../../styles/blocks/_order.scss';

import backtocartIcon from '../../resources/order/backtocart-icon.svg';
import nightWindow from '../../resources/order/night-window.svg';
import dropdownIcon from '../../resources/delivery/dropdown-icon.svg';

import { Link } from 'react-router-dom';

const OrderStopList = () => {
  return (
    <OrderStopL>
      <div>
        <h2>Сегодня мы уже не доставляем.</h2>
        <p>Заказы принимаем до 20:50, доставляем с 8:30 до 21:30</p>
      </div>
      <img src={nightWindow} alt="night-pic"/>
    </OrderStopL>
  )
}

const Order = () => {
  let stopList = 'active';

  return (
    <OrderSection>
      <OrderContainer>

        <Link to={'/cart'} className="order__link">
          <img src={backtocartIcon} alt="back"/>
          в корзину
        </Link>

        <OrderTitle>Оформление заказа</OrderTitle>

        <form action="" className="order__form">

          {stopList === 'active' ? <OrderStopList/> : null}

          <fieldset className="order__fieldset-contacts">

            <h2 className="order__subtitle">1. Контактная информация</h2>

            <div className="order__fieldset-contacts-container">
              <input className="order__fieldset-contacts-name" type="text" required="required" placeholder="Имя*"/>
              <label className="order__fieldset-contacts-placeholder">Имя<span>*</span></label>
            </div>

            <div className="order__fieldset-contacts-container">
              <input className="order__fieldset-contacts-lastname" type="tel" required="required" placeholder="Телефон*"/>
              <label className="order__fieldset-contacts-placeholder">Телефон<span>*</span></label>
            </div>

          </fieldset>

          <fieldset className="order__fieldset-delivery">
            <h2 className="order__subtitle">2. Доставка</h2>

            <div className="order__fieldset-delivery-btns">

              <OrderBtnsContainer>
                <input className="order__fieldset-delivery-btn active" data-tab="#delivery-tab_1" type="button" value="Доставка"/>
                <input className="order__fieldset-delivery-btn" data-tab="#delivery-tab_2" type="button" value="Самовывоз"/>
              </OrderBtnsContainer>

              <p>Доставим через  1 час 30 минут</p>
            </div>

            <div className="order__delivery-tab active" id="delivery-tab_1">
              <h3>Адрес доставки</h3>

              <div className="order__adress active">

                <div className="order__adress-container">
                  <input className="order__adress-street" type="text" required="required" placeholder="Укажите улицу*"/>
                  <label className="order__adress-street-placeholder">Укажите улицу<span>*</span></label>
                </div>

                <div className="order__adress-container">
                  <input className="order__adress-home" type="text" required="required" placeholder="Номер дома*"/>
                  <label className="order__adress-home-placeholder">Номер дома<span>*</span></label>
                </div>

                <input type="text" placeholder="№ кв/офиса"/>
                <input type="text" placeholder="Подъезд"/>
                <input type="text" placeholder="Этаж"/>
                <input type="text" placeholder="Комментарий"/>
              </div>
            </div>

            <div className="order__delivery-tab" id="delivery-tab_2">
              <h3>Выберите ресторан</h3>

              <div className="order__pickup">

                <div className="order__pickup-header">
                  <span className="order__pickup-current">Выберите ресторан</span>
                  <img className="order__pickup-icon" src={dropdownIcon}/>
                </div>

                <div className="order__pickup-body select__body">
                  <div className="order__pickup-item">Ресторан №1</div>
                  <div className="order__pickup-item">Ресторан №3</div>
                  <div className="order__pickup-item">Ресторан №2</div>
                </div>

              </div>
            </div>

          </fieldset>

          <fieldset className="order__fieldset-pay">
            <h2 className="order__subtitle">3. Оплатить</h2>

            <div className="order__fieldset-pay-btns">
              <OrderBtnsContainer>
                <input className="order__fieldset-pay-btn" type="button" value="Оплата онлайн"/>
                <input className="order__fieldset-pay-btn" type="button" value="Курьеру картой"/>
                <input className="order__fieldset-pay-btn active" data-tab="#pay-tab_3" type="button" value="Наличными"/>
              </OrderBtnsContainer>
            </div>

            <div className="order__fieldset-pay-change active" id="pay-tab_3">
              <input type="text" value="Сдача с " className="order__fieldset-pay-change-placeholder" readonly/>
              <input type="number" className="order__fieldset-pay-change-sum" max="100000"/>
            </div>

          </fieldset>

          <fieldset className="order__fieldset-times">
            <h2 className="order__subtitle">4. Когда доставить</h2>

            <div className="order__fieldset-times-time-btns">
              <OrderBtnsContainer>
                <input className="order__fieldset-times-time-btn" type="button" value="В ближайшее время"/>
                <input className="order__fieldset-times-time-btn active" data-tab="#times-tab_2" type="button" value="Ко времени"/>
                <input className="order__fieldset-times-time-tab active" id="times-tab_2" type="text" placeholder="Укажите время"/>
              </OrderBtnsContainer>
            </div>

            <div className="order__fieldset-times-persons">
              <input type="number" placeholder="Кол-во персон" readonly/>

              <div className="order__fieldset-times-persons-counter">
                <button className="order__fieldset-times-persons-minus"></button>
                <input className="order__fieldset-times-persons-nums" type="number" value="1"/>
                <button className="order__fieldset-times-persons-plus"></button>
              </div>


            </div>

            <h3>Хотите мы позвоним?</h3>

            <div className="order__fieldset-times-call-btns">

                <label>
                  <input className="order__fieldset-times-call-btns-radio" type="radio" name="call" checked/>
                  <span className="order__fieldset-times-call-btns-radio-design"></span>
                  <p>Не перезванивать</p>
                </label>

                <label>
                  <input className="order__fieldset-times-call-btns-radio" type="radio" name="call"/>
                  <span className="order__fieldset-times-call-btns-radio-design"></span>
                  <p>Потребуется звонок оператора</p>
                </label>

            </div>

          </fieldset>

          <fieldset className="order__fieldset-conditions">

            <label>
              <input type="checkbox" className="order__fieldset-conditions-checkbox" checked required/>
              <span className="order__fieldset-conditions-checkbox_design"></span>
              <p>Я согласен на обработку моих перс. данных в соответствии с <a href="#!">Условиями</a></p>
            </label>

            <button className="order__fieldset-conditions-btn">Оформить заказ</button>
          </fieldset>

        </form>

      </OrderContainer>
    </OrderSection>
  )
}

export default Order;