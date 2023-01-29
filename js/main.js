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
    const tabs = document.querySelectorAll('.menu__pos');
    const tabsItems = document.querySelectorAll('.menu__pos-section');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {

        let currentBtn = tab;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('active')) {
          tabs.forEach(tab => {
            tab.classList.remove('active');
          });

          tabsItems.forEach(tab => {
            tab.classList.remove('active');
          });

          currentBtn.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    });

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


// Доставка - самовывоз

const deliveryBtns = document.querySelectorAll('.order__fieldset-delivery-btn');
const deliveryTabs = document.querySelectorAll('.order__delivery-tab');


deliveryBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    let currentBtn = btn;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if(!currentBtn.classList.contains('active')) {
      deliveryBtns.forEach(btn => {
        btn.classList.remove('active');
      });

      deliveryTabs.forEach(btn => {
        btn.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }



    btn.classList.add('active');

  });
});

// Реализация dropdown

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