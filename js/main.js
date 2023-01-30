// Табы

function tabs(btnsSelector, tabsSelector,) {
  const btns = document.querySelectorAll(btnsSelector);
  const tabs = document.querySelectorAll(tabsSelector);


  btns.forEach(btn => {
    btn.addEventListener('click', () => {

      let currentBtn = btn;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if(!currentBtn.classList.contains('active')) {
        btns.forEach(btn => {
          btn.classList.remove('active');
        });

        tabs.forEach(btn => {
          btn.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }



      btn.classList.add('active');

    });
  });
}

tabs('.order__fieldset-delivery-btn', '.order__delivery-tab'); // Доставка/Самовывоз
tabs('.order__fieldset-pay-btn', '.order__fieldset-pay-change'); // Оплата - онлайн/картой курьеру/наличными
tabs('.order__fieldset-times-time-btn', '.order__fieldset-times-time-tab'); // Доставка - в ближайшее время/ко времени


// Получение данных по позициям меню и их выгрузка на страницу

class MenuCard{
  constructor(name, weight, description, price, src, alt, parentSelector) {
    this.name = name;
    this.weight = weight;
    this.descr = description;
    this.price = price;
    this.src = src;
    this.alt = alt;
    this.parent = document.querySelector(parentSelector);
    this.priceConvert();
    this.descrConvert();
  }

  priceConvert() {
    this.price = this.price.toString();
    if(this.price.length > 3) {
      this.price = this.price.slice(0, -3) + " " + this.price.slice(-3);
    }
  }

  descrConvert() {
    if(this.descr.length >= 72) {
      this.descr = this.descr.slice(0, 69) + ' ...';
    }
  }

  render() {
    const element = document.createElement('div');
    element.classList.add('item-card', 'swiper-slide');

    element.innerHTML = `
      <div class="item-card__img-container">
        <img src=${this.src} alt=${this.alt} class="item-card__img">
      </div>

      <div class="item-card__info">
        <div class="item-card__info-block">
          <div class="item-card__info-block-container">
            <h2 class="item-card__title">${this.name}</h2>
            <p class="item-card__weight">Вес: <span>${this.weight}</span>г</p>
          </div>
          <p class="item-card__descr">${this.descr}</p>
        </div>


        <div class="item-card__btns">
          <p class="item-card__price"><span>${this.price}</span> ₽</p>
          <a href="#!" class="item-card__cart">
            <p>В корзину</p>
            <img src="./img/item_cards/cart-icon.svg" alt="cart icon">
          </a>

          <button class="item-card__add">
            <img src="./img/item_cards/add-icon.svg" alt="add">
          </button>

          <button class="item-card__remove">
            <img src="./img/item_cards/remove-icon.svg" alt="remove">
          </button>

        </div>

      </div>
    `;

    this.parent.append(element);
  }
}

class MenuPos{
  constructor(posName) {
    this.posName = posName;
  }

  render(i) {
    const pos = document.createElement('div');
    pos.classList.add('menu__pos-section');

    pos.innerHTML = `
      <h1 class="menu__pos-title title">${this.posName}</h1>
      <div class="swiper-container swiper">
        <div class="menu__pos-items swiper-wrapper">

        </div>
      </div>
    `;

    pos.setAttribute('id', `tab_${i}`);

    document.querySelector('.menu__pos-container').append(pos);
  }
}

class MenuTab{
  constructor(tabName) {
    this.tabName = tabName;
  }

  render(i) {
    const tab = document.createElement('div');
    tab.classList.add('menu__pos');
    tab.textContent = this.tabName;
    tab.setAttribute('data-tab', `#tab_${i}`);

    document.querySelector('.menu__top-container').append(tab);
  }
}

fetch('http://localhost:3000/menu')
  .then(data => data.json())
  .then(data => {
    let i = 1;
    for(let key in data) {
      new MenuTab(key).render(i);
      new MenuPos(key).render(i);
      i++;

      data[key].forEach(({name, weight, description, price, src, alt}) => {
        new MenuCard(name, weight, description, price, src, alt, '.menu__pos-items').render();
      });
    }
  })
  .then(() => {
    tabs('.menu__pos','.menu__pos-section');
    document.querySelector('.menu__pos').click();
  })
  .then(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 20,
      speed: 1000,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }
    });
  });

// dropdown

let select = function () {
  let selectHeader = document.querySelectorAll('.order__pickup-header');
  let selectItem = document.querySelectorAll('.order__pickup-item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle);
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
      this.parentElement.classList.toggle('open');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.order__pickup'),
          currentText = select.querySelector('.order__pickup-current');
      currentText.innerText = text;
      select.classList.remove('open');

  }

};

select();


// Counter

const counter = document.querySelector('.order__fieldset-times-persons-counter');
const counterNums = document.querySelector('.order__fieldset-times-persons-nums');

counter.addEventListener('click', (e) => {
  e.preventDefault();

  if(e.target.classList.contains('order__fieldset-times-persons-minus')) {
    if(!(counterNums.value <= 1)) {
      counterNums.value -= 1;
    }
  }

  if(e.target.classList.contains('order__fieldset-times-persons-plus')) {
    if(!(counterNums.value >= 30)) {
      counterNums.value = Number(counterNums.value) + 1;
    }
  }

});


