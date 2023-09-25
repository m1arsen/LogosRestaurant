import Header from "../header/Header";
import Promotions from "../promotions/Promotions";
import Location from '../location/Location';
import Footer from "../footer/Footer";

const PromotionsPage = ({cartItems}) => {
  return (
    <>
      <Header cartItems={cartItems}/>
      <Promotions/>
      <Location/>
      <Footer/>
    </>
  )
}

export default PromotionsPage;