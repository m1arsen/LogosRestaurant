import Header from "../header/Header";
import Cart from "../cart/Cart";
import Footer from "../footer/Footer";

const CartPage = ({menu}) => {
  return (
    <>
      <Header/>
      <Cart menu={menu}/>
      <Footer/>
    </>
  )
}

export default CartPage;