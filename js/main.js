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
  }

  priceConvert() {
    this.price = this.price.toString();
    if(this.price.length > 3) {
      this.price = this.price.slice(0, -3) + " " + this.price.slice(-3);
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

  render() {
    const pos = document.createElement('div');
    pos.classList.add('menu__pos-section');

    pos.innerHTML = `
      <h1 class="menu__pos-title">${this.posName}</h1>
      <div class="swiper-container swiper">
        <div class="menu__pos-items swiper-wrapper">

        </div>
      </div>
    `;

    document.querySelector('.menu__pos-container').append(pos);
  }
}

fetch('http://localhost:3000/menu')
  .then(data => data.json())
  .then(data => {
    for(let key in data) {
      new MenuPos(key).render();

      data[key].forEach(({name, weight, description, price, src, alt}) => {
        new MenuCard(name, weight, description, price, src, alt, '.menu__pos-items').render();
      });
    }
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



