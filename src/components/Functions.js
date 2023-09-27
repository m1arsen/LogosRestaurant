import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Получение количества продуктов в меню
export const countTotalProducts = (menu) => {
  let count;
  for(let position in menu) {

    let positionData = menu[position].items;

    positionData.forEach(item => {
      count = item.id
    })
  }

  return count;
}

// Получение рандомной коллекции дополнительных карточек
export const getRandomMenuItems = (menu, count) => {
  let cartAddCollection = [];

  for(let i = 0; i < count; i++) {
    let randomId = randomInteger(0, countTotalProducts(menu));
    let productInfo;

    for(let position in menu) {

      let positionData = menu[position].items;

      positionData.forEach(item => {
        if(item.id == randomId) {
          productInfo = item;
        }
      })
    }

    cartAddCollection.push(productInfo)
  }

  return cartAddCollection;
}