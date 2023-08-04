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
        [cartItems, setCartItems] = useState([{posId: 0, cardId: 0, count: 0}]);
  const {loading, error, getMenu} = useLogosService();

  useEffect(() => {
    getMenu().then(setMenu);
  }, [])

  return (
    <div className="App">
      {/* <Header/>
      <Main/> */}
      <Menu menu={menu} loading={loading} error={error} cartItems={cartItems} setCartItems={setCartItems}/>
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