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

// Компоненты

import Product from '../product/Product';
import OtherProducts from '../otherProducts/OtherProducts';


// Стили
import '../../styles/main.scss';
import { ProductLine } from '../product/product-style';

const App = () => {

  const [menu, setMenu] = useState({}),
        [cartItems, setCartItems] = useState({2: 1, 3: 30, 1: 2});
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

  const removeToCart = (id) => {

    // Есть ли товар в корзине ?
    if(cartItems.hasOwnProperty(id)) {
      if(cartItems[id] == 1) {

        const newCartItems = { ...cartItems }
        delete newCartItems[id]
        setCartItems({...newCartItems});

      } else {

        setCartItems({
          ...cartItems,
          [id]: cartItems[id] -= 1
        });

      }
    } // else если нет то ничего не происходит
  }

  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path='/' element={<MainPage menu={menu} loading={loading} error={error} addToCart={addToCart} removeToCart={removeToCart}/>}/>

          <Route path='/cart' element={<CartPage menu={menu}/>}/>

          <Route path='/cart/order' element={<OrderPage/>}/>

          <Route path='/delivery' element={<DeliveryPage/>}/>

          <Route path='/product' element={<ProductPage/>}/>

          <Route path='/promotions' element={<PromotionsPage/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App;