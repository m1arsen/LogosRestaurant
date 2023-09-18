import { useState, useEffect } from 'react';

// Хук
import useLogosService from '../../services/LogosService';

// Компоненты
import Header from '../header/Header';
import Main from '../main/Main';
import Menu from '../menu/Menu';
import OurCafe from '../ourCafe/OurCafe';
import Location from '../location/Location';
import Footer from '../footer/Footer';
import Product from '../product/Product';
import OtherProducts from '../otherProducts/OtherProducts';

import Cart from '../cart/Cart';
import DeliveryTerms from '../deliveryTerms/DeliveryTerms';

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
    <div className="App">
      {/* <Header/>
      <Main/> */}
      {/* <Menu menu={menu} loading={loading} error={error} addToCart={addToCart} removeToCart={removeToCart}/> */}
      {/* <OurCafe/>
      <Location/>
      <Footer/> */}

      {/* <Cart menu={menu}/>
      <DeliveryTerms/> */}

      <Product/>
      <ProductLine/>
      <OtherProducts/>
    </div>
  )
}

export default App;