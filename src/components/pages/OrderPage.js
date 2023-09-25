import Header from "../header/Header";
import Order from "../order/Order";
import Footer from "../footer/Footer";

const OrderPage = ({cartItems}) => {
  return (
    <>
      <Header cartItems={cartItems}/>
      <Order/>
      <Footer/>
    </>
  )
}

export default OrderPage;