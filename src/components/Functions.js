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

// Проблема  в том что функции не универсальные

export const addToCart = (id) => {

  // Есть ли товар в корзине ?
  if(cartItems.hasOwnProperty(id)) {

    setCartItems({
      ...cartItems,
      [id]: cartItems[id] += 1
    });

  } else {

    setCartItems({
      ...cartItems,
      [id]: 1
    });

  }
  console.log(cartItems);

}

export const removeToCart = (id, deleteBtn) => {
  // Есть ли товар в корзине ?
  if(cartItems.hasOwnProperty(id)) {
    if((cartItems[id] == 1) && (deleteBtn == 'DeleteBtn')) {

      const newCartItems = { ...cartItems }
      delete newCartItems[id]
      setCartItems({...newCartItems});

    } else if(cartItems[id] > 1) {

      setCartItems({
        ...cartItems,
        [id]: cartItems[id] -= 1
      });

    }
  } // else если нет то ничего не происходит
}

export const deleteToCart = (id) => {
  const newCartItems = { ...cartItems }
  delete newCartItems[id]
  setCartItems({...newCartItems});
}
