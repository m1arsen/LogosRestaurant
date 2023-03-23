import Header from '../header/Header';
import Main from '../main/Main';
import Menu from '../menu/Menu';
import OurCafe from '../ourCafe/OurCafe';
import Location from '../location/Location';
import Footer from '../footer/Footer';

import Cart from '../cart/Cart';
import DeliveryTerms from '../deliveryTerms/DeliveryTerms';

import '../../styles/main.scss';

const App = () => {
  return (
    <div className="App">
      {/* <Header/>
      <Main/>
      <Menu/>
      <OurCafe/>
      <Location/>
      <Footer/> */}
      <Cart/>
      {/* <DeliveryTerms/> */}
    </div>
  )
}

export default App;