import { useState, useEffect } from 'react';

// Роутер
import { Route, Routes, BrowserRouter as Router  } from 'react-router-dom';

// Хук
import useLogosService from '../../services/LogosService';

// Страницы
import MainPage from '../pages/MainPage';
import CartPage from '../pages/CartPage';
import DeliveryPage from '../pages/DeliveryPage';
import ProductPage from '../pages/ProductPage';
import OrderPage from '../pages/OrderPage';
import PromotionsPage from '../pages/PromotionsPage';

// Стили
import '../../styles/main.scss';

import {ScrollToTop} from '../Functions';

const App = () => {

  const [menu, setMenu] = useState({}),
        [cartItems, setCartItems] = useState({2: 1, 3: 2, 1: 3});
  const {loading, error, getMenu} = useLogosService();

  useEffect(() => {
    getMenu().then(setMenu);
  }, [])

  const addToCart = (id) => {

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

  const removeToCart = (id, deleteBtn) => {
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

  const deleteToCart = (id) => {
    const newCartItems = { ...cartItems }
    delete newCartItems[id]
    setCartItems({...newCartItems});
  }

  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Routes>

          <Route
            path='/'
            element={<MainPage
              menu={menu}
              loading={loading}
              error={error}
              cartItems={cartItems}
              addToCart={addToCart}
              removeToCart={removeToCart}/>}/>

          <Route
            path='/cart'
            element={<CartPage
              menu={menu}
              cartItems={cartItems}
              addToCart={addToCart}
              removeToCart={removeToCart}
              deleteToCart={deleteToCart}/>}/>

          <Route
            path='/cart/order'
            element={<OrderPage
              cartItems={cartItems}/>}/>

          <Route
            path='/delivery'
            element={<DeliveryPage
              cartItems={cartItems}/>}/>

          <Route
            path='/product/:id'
            element={<ProductPage
              cartItems={cartItems}
              addToCart={addToCart}
              removeToCart={removeToCart}/>}/>

          <Route
            path='/promotions'
            element={<PromotionsPage
              cartItems={cartItems}/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App;