import Header from "../header/Header";
import DeliveryTerms from "../deliveryTerms/DeliveryTerms";
import Footer from "../footer/Footer";

const DeliveryPage = ({cartItems}) => {
  return (
    <>
      <Header cartItems={cartItems}/>
      <DeliveryTerms/>
      <Footer/>
    </>
  )
}

export default DeliveryPage;