import Header from "../header/Header";
import Cart from "../cart/Cart";
import Footer from "../footer/Footer";

const CartPage = ({cartItems, addToCart, removeToCart, deleteToCart}) => {
  return (
    <>
      <Header cartItems={cartItems}/>
      <Cart
        cartItems={cartItems}
        addToCart={addToCart}
        removeToCart={removeToCart}
        deleteToCart={deleteToCart}/>
      <Footer/>
    </>
  )
}

export default CartPage;