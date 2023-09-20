import { LocationSection, LocationContainer, LocationContacts, LocationTitle, LocationTextInfo, LocationAdressSection, LocationMailSection, LocationInfoTitle , LocationInfoAdress, LocationInfoMail, LocationButtons, LocationButtonsBook, LocationNumber, LocationSocials, LocationLinks } from './location-style';

const Location = () => {
  return (
    <LocationSection>
      <LocationContainer>
        <LocationContacts>

          <LocationTitle>Контакты</LocationTitle>

          <LocationTextInfo>

            <LocationAdressSection>
              <LocationInfoTitle>Наш адрес:</LocationInfoTitle>
              <LocationInfoAdress>МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10</LocationInfoAdress>
            </LocationAdressSection>

            <LocationMailSection>
              <LocationInfoTitle>Наша почта:</LocationInfoTitle>
              <LocationInfoMail href="mailto:auto.wash@gmail.com">auto.wash@gmail.com</LocationInfoMail>
            </LocationMailSection>

          </LocationTextInfo>

          <LocationButtons>
            <LocationButtonsBook>Забронировать стол</LocationButtonsBook>
            <LocationNumber>
              <a href="tel:79175105759">+7 (917) 510-57-59</a>
              <p>Звоните или оставляйте заявку</p>
            </LocationNumber>
          </LocationButtons>

          <LocationSocials>
            <p>Мы в соц сетях:</p>
            <LocationLinks>

              <a href="https://facebook.com/" target="_blank">
                <svg width="19" height="19" fill="white">
                  <path d="M16.625 0H2.375C1.06519 0 0 1.06519 0 2.375V16.625C0 17.9348 1.06519 19 2.375 19H9.5V12.4688H7.125V9.5H9.5V7.125C9.5 5.15731 11.0948 3.5625 13.0625 3.5625H15.4375V6.53125H14.25C13.5945 6.53125 13.0625 6.4695 13.0625 7.125V9.5H16.0312L14.8438 12.4688H13.0625V19H16.625C17.9348 19 19 17.9348 19 16.625V2.375C19 1.06519 17.9348 0 16.625 0Z"/>
                </svg>
              </a>

              <a href="https://vk.com/" target="_blank">
                <svg width="20" height="19" fill="white">
                  <path d="M11.2115 10.4714C10.9069 10.294 10.4836 10.294 10.1396 10.294H9.01009V12.6215H10.0468C10.4305 12.6215 10.92 12.6491 11.2509 12.4167C11.5547 12.2122 11.7267 11.8109 11.7267 11.4287C11.7267 11.0736 11.5153 10.6489 11.2115 10.4714ZM10.7854 8.4837C11.0368 8.29231 11.1686 7.9511 11.1686 7.63681C11.1686 7.29541 11.01 6.96766 10.7193 6.79032C10.4151 6.61299 9.85916 6.65396 9.50211 6.65396H9.01009V8.7024H9.66104C10.0313 8.7022 10.4681 8.72951 10.7854 8.4837ZM16.3477 0H4.02695C2.18276 0 0.6875 1.49526 0.6875 3.33984V15.6602C0.6875 17.5043 2.18276 19 4.02695 19H16.3477C18.1918 19 19.6875 17.5043 19.6875 15.6602V3.33984C19.6875 1.49526 18.1918 0 16.3477 0ZM10.7029 14.3559H6.82133V4.9877H11.0623C12.2908 4.9877 13.4242 5.76967 13.4242 7.14895C13.4242 8.21394 12.8297 8.94326 12.0713 9.16988V9.19739C13.1958 9.42974 13.999 10.0405 13.999 11.514C13.999 12.8776 13.0704 14.3559 10.7029 14.3559Z"/>
                </svg>
              </a>

              <a href="https://youtube.com/" target="_blank">
                <svg width="20" height="19" fill="white">
                  <path d="M15.8125 0H3.93748C1.96982 0 0.375 1.59482 0.375 3.56248V15.4375C0.375 17.4052 1.96982 19 3.93748 19H15.8125C17.7802 19 19.375 17.4051 19.375 15.4375V3.56248C19.375 1.59482 17.7802 0 15.8125 0ZM15.7116 11.6268C15.6474 12.4177 15.0466 13.427 14.207 13.5731C11.5173 13.7821 8.33006 13.756 5.54422 13.5731C4.67496 13.4638 4.10379 12.4165 4.03967 11.6268C3.9043 9.96667 3.9043 9.02141 4.03967 7.36129C4.10379 6.57161 4.68923 5.53015 5.54422 5.43517C8.29804 5.20359 11.5031 5.25347 14.207 5.43517C15.1736 5.47078 15.6474 6.46711 15.7116 7.25798C15.8445 8.9181 15.8445 9.96667 15.7116 11.6268Z"/>
                  <path d="M8.6875 11.875L12.25 9.5L8.6875 7.125V11.875Z"/>
                </svg>
              </a>

              <a href="https://instagram.com/" target="_blank">
                <svg width="19" height="19" fill="white">
                  <path d="M11.1799 8.27967C10.8033 7.75231 10.1855 7.40576 9.49239 7.40576C8.79929 7.40576 8.18152 7.75231 7.80484 8.27967C7.56376 8.62622 7.41309 9.04811 7.41309 9.50013C7.41309 10.6453 8.34727 11.5794 9.49239 11.5794C10.6375 11.5794 11.5717 10.6453 11.5717 9.50013C11.5717 9.04811 11.421 8.62622 11.1799 8.27967Z"/>
                  <path d="M12.4909 8.29468C12.6416 8.59603 12.732 9.07818 12.732 9.50007C12.732 11.278 11.2856 12.7396 9.49253 12.7396C7.69951 12.7396 6.25304 11.2931 6.25304 9.50007C6.25304 9.06312 6.34344 8.59603 6.49412 8.29468H4.67096V13.1313C4.67096 13.7641 5.22845 14.3216 5.86128 14.3216H13.1238C13.7566 14.3216 14.3141 13.7641 14.3141 13.1313V8.29468H12.4909Z"/>
                  <path d="M13.7717 4.94964H12.0239V6.9536H14.0128V5.20578V4.93457L13.7717 4.94964Z"/>
                  <path d="M14.2236 0.00878906H4.7613C2.13957 0.00878906 0 2.14836 0 4.77009V14.2475C0 16.8541 2.13957 18.9937 4.7613 18.9937H14.2387C16.8604 18.9937 19 16.8541 19 14.2324V4.77009C18.9849 2.14836 16.8454 0.00878906 14.2236 0.00878906ZM15.3688 8.28079V13.1325C15.3688 14.3982 14.3894 15.3775 13.1237 15.3775H5.86122C4.59556 15.3775 3.61618 14.3982 3.61618 13.1325V8.28079V5.87001C3.61618 4.60435 4.59556 3.62497 5.86122 3.62497H13.1237C14.3894 3.62497 15.3688 4.60435 15.3688 5.87001V8.28079Z"/>
                </svg>
              </a>

            </LocationLinks>
          </LocationSocials>
        </LocationContacts>
      </LocationContainer>

      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A491d52300c2b47c73b9cbf7145ac2911619a4561cfe5e1e1790d4e4c998bcd00&amp;source=constructor" width="100%" height="665" frameBorder="0"></iframe>
    </LocationSection>
  )
}

export default Location;